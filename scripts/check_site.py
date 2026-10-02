#!/usr/bin/env python3
"""Check a built Jekyll site using Python's standard library and Node.js."""
import argparse
import json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import subprocess
import tempfile
from urllib.parse import unquote, urljoin, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.links = []
        self.scripts = []
        self.current_script = None
        self.script_type = ''

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.append(attrs['id'])
        for attribute in ('href', 'src'):
            if attrs.get(attribute):
                self.links.append(attrs[attribute])
        if tag == 'script':
            self.current_script = []
            self.script_type = attrs.get('type', '')

    def handle_data(self, data):
        if self.current_script is not None:
            self.current_script.append(data)

    def handle_endtag(self, tag):
        if tag == 'script' and self.current_script is not None:
            if self.script_type in ('', 'module', 'text/javascript', 'application/javascript'):
                self.scripts.append(''.join(self.current_script))
            self.current_script = None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('site', type=Path)
    args = parser.parse_args()
    root = args.site.resolve()
    if not (root / 'index.html').exists():
        parser.error('Build the Jekyll site first; index.html is missing')
    pages = {}
    problems = []
    for file in sorted(root.rglob('*.html')):
        page = Page()
        page.feed(file.read_text())
        pages[file] = page
        for identifier, count in Counter(page.ids).items():
            if count > 1:
                problems.append(f'{file.relative_to(root)}: duplicate id {identifier}')
        if page.current_script is not None:
            problems.append(f'{file.relative_to(root)}: unclosed script')
        for index, source in enumerate(page.scripts):
            with tempfile.NamedTemporaryFile(mode='w', suffix='.mjs') as script:
                script.write(source)
                script.flush()
                result = subprocess.run(['node', '--check', script.name], capture_output=True, text=True)
            if result.returncode:
                problems.append(f'{file.relative_to(root)}: script {index}: {result.stderr.strip()}')
    for file, page in pages.items():
        route = '/' + file.relative_to(root).as_posix()
        for link in page.links:
            url = urlsplit(urljoin('https://physicianpromptengineering.com' + route, link))
            if url.scheme not in ('http', 'https') or url.netloc != 'physicianpromptengineering.com':
                continue
            path = unquote(url.path).lstrip('/')
            target = root / path
            candidates = [target, target / 'index.html', root / (path.rstrip('/') + '.html')]
            target = next((p for p in candidates if p.is_file()), None)
            if target is None:
                problems.append(f'{file.relative_to(root)}: missing local target {link}')
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                problems.append(f'{file.relative_to(root)}: missing anchor {link}')
    for script in sorted(root.rglob('*.js')):
        result = subprocess.run(['node', '--check', str(script)], capture_output=True, text=True)
        if result.returncode:
            problems.append(f'{script.relative_to(root)}: {result.stderr.strip()}')
    for file in sorted(root.rglob('*.json')):
        try:
            json.loads(file.read_text())
        except (ValueError, UnicodeError) as error:
            problems.append(f'{file.relative_to(root)}: invalid JSON: {error}')
    for problem in sorted(set(problems)):
        print(problem)
    print(f'Checked {len(pages)} HTML pages; {len(set(problems))} problem(s).')
    return bool(problems)


if __name__ == '__main__':
    raise SystemExit(main())
