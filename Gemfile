source "https://rubygems.org"

# Jekyll core - use latest stable version
gem "jekyll", "~> 4.3"

# Essential Jekyll plugins
gem "jekyll-seo-tag"
gem "jekyll-sitemap"

# Windows and JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Webrick is needed for Jekyll 4+ (no longer bundled with Ruby 3.0+)
gem "webrick", "~> 1.8"
