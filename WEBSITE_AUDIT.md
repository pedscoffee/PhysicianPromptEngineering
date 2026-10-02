# Project maintenance review

Reviewed October 2, 2026. This supersedes the November 2025 audit; the earlier report remains in Git history.

## Overall assessment

The prompt library and browser tools are worth keeping. The main maintenance problems were broken integrations, unfinished material appearing in the public build, inconsistent promises in the copy, and the absence of a reproducible local build. The changes in this review address those problems without replacing the site's design or deleting useful source material.

This is a repository and behavior review, not a clinical validation of the prompts, billing rules, or medical teaching content.

## Fixes implemented

- Restored the truncated Prompt Assistant module, including its missing closing script tag and copy, save, download, and reset handlers for both tabs. Tab switching now uses the clicked button rather than the browser's implicit global `event`.
- Unified Prompt Assistant, Prompt Remix, and Prompt Manager on `ppe_snippets`. A shared storage helper recovers legacy `aiPromptSnippets`, normalizes IDs, tags, and dates, preserves colliding records, and only removes legacy storage after a successful save. Invalid saved data is not silently overwritten during migration.
- Separated the global site-search ID from the Prompt Manager filter. Imported prompts receive new IDs, normalized tags, and timestamps so they remain editable and do not conflict with existing records.
- Scoped all six PWA registrations to their respective app paths. Added narrowly targeted cleanup of the earlier site-wide registrations. Each worker reads only its own offline cache, ignores non-GET requests, and extends its lifetime for cache writes. Cache versions were bumped to v2. See [MDN's service-worker registration documentation](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register) for scope semantics.
- Delayed loading Google Analytics until explicit acceptance, including on later page loads. Declining or having no saved consent does not load the analytics script. Development builds do not show an inactive analytics consent banner. The privacy-policy description was updated to match the opt-in behavior.
- Converted the header dropdown triggers to buttons with expansion state, keyboard support, Escape handling, and a breakpoint that matches the CSS. The sharing dropdown is also available on keyboard focus.
- Removed malformed duplicate PTO markup and the competing `app` ID that caused rendering to replace the wrong element. Removed the abandoned Vue `v-cloak` attribute.
- Removed the duplicate automatically generated page title where content already supplies an H1.
- Escaped user-entered text in the patient timeline and trainee summary. Removed a duplicated feedback block and closing tag from the trainee summary and repaired nested paragraph markup in the beta notice.
- Fixed homepage and style-guide links to the current prompt anchors. Removed the dead “Support Development” CTA; the support page currently contains contributions and community links, not the referenced support section.
- Corrected the course estimate from 30 minutes to approximately four hours, matching its 45/60/60/75-minute modules. Replaced claims of automatic scoring with the implemented workflow: run a prompt, review output, and compare against an example solution. Completion is not a graded assessment.
- Displayed prompt character counts from the actual prompt body instead of stale hand-maintained metadata and an indiscriminate 5,000-character limit.
- Serialized search records with JSON escaping rather than HTML escaping, retaining real quotes and ampersands and handling commas independently of collection size.
- Added Gemfile/Gemfile.lock and contribution/build instructions. Explicitly enabled the feed and redirect plugins used by the templates and old URLs. Jekyll remains on 3.x for compatibility with the existing GitHub Pages setup; a build-system migration is separate work.
- Removed nonexistent blog/podcast links, the unsupported “Maintained: Yes” badge, and blanket promises of production readiness or notes needing no manual editing.
- Ignored generated Jekyll output/caches and excluded internal notes, historical performance PDFs, research/planning files, scratch scripts, and unfinished newborn-course material from the public build.

## What to remove or retire

Already removed from public output: research notes, planning/idea files, old performance reports, scratch scripts, and the unfinished newborn modules/engine. Their repository files remain available for reuse. Broken navigation and claims described above were removed outright.

Keep the Epic Text Assistant and DAX prompt variants: similar titles do not mean identical instructions or platform behavior. Do not bulk-delete them as duplicates.

The unfinished newborn course should remain unpublished unless there is a specific intention to finish it. It lacks its advertised landing page; its exercise engine contains Liquid expressions without Jekyll front matter; and the common course layout uses the other course's data/progress setup. Completing it requires data wiring, independent progress handling, source/attribution checks, and clinical review. These issues were contained by excluding its public output, not by presenting it as a completed course.

If there is no intention to resume that course, its five modules, two YAML data files, engine, and three documentation files are candidates for a later source removal. They are preserved in this pass because they represent substantial authored content.

The scratch `test_regex.js` and `extract_pdf_text.py`, plus the two PageSpeed PDFs, can be deleted from the repository once their historical value is no longer needed. They are now excluded from deployment.

## Remaining work worth a separate decision

- Choose and add a repository license. The README describes the project as open source and the newborn documentation mentions MIT, but there is no root LICENSE file. Confirm the intended license and third-party asset rights before adding one.
- Review and date the billing/RVU tables and clinical teaching/prompt content with appropriate sources. The wRVU lookup is hard-coded and has no source year. This review intentionally did not change its values or assert that they are current.
- Audit the remaining imported-data rendering across the larger QI and visualization tools. Several still build HTML from data or user input. The timeline/trainee fixes are targeted improvements, not a claim that every rendering path is hardened.
- Pin and consolidate CDN-loaded libraries/model versions, and test the advertised offline behavior on actual installed PWAs. Some tools depend on external scripts and model downloads; HTML/CSS caching alone does not establish that every feature works offline.
- Consider reducing the maintenance surface to the prompt library, course, and the productivity tools you actually use. There is no usage evidence in the repository that justifies removing a specific working tool today.

## Validation

- Production Jekyll build succeeded with the pinned bundle. A temporary configuration disabled Sass's disk cache after the initial build hit local disk-space pressure; the project source was not changed to depend on that temporary file.
- The generated-site checker examined 90 HTML pages and passed with zero broken local targets, missing anchors, duplicate IDs, unclosed scripts, or JavaScript syntax errors. Both rendered inline scripts and published JS files are checked.
- Search and API JSON parsed successfully: 78 search records, 41 prompts, and 10 synthetic cases. Internal notes and newborn drafts were verified absent from the output.
- Fifteen Node regression tests passed for legacy prompt migration and failure preservation, both assistant tabs' output actions, analytics opt-in behavior, and six workers' explicit scopes/isolated offline fallback.
- Browser checks verified creating and filtering a prompt in Prompt Manager and rendering the PTO calendar; the tested PTO page reported no console errors.
- `git diff --check` passed.

The LLM models were not downloaded or clinically evaluated, and physical-device PWA installation/offline behavior was not tested. Changes are local; this review does not publish or deploy the site.
