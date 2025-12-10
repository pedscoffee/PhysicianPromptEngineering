# Clinical Toolkit Deployment Guide

## Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create a new GitHub repository**
   ```bash
   # Navigate to the ClinicalToolkit directory
   cd /path/to/ClinicalToolkit
   
   # Initialize git
   git init
   git add .
   git commit -m "Initial commit - Clinical Toolkit"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repository on GitHub named "ClinicalToolkit"
   # Then:
   git remote add origin https://github.com/YOUR-USERNAME/ClinicalToolkit.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `(root)`
   - Click Save

4. **Update _config.yml**
   ```yaml
   url: "https://YOUR-USERNAME.github.io"
   baseurl: "" # Leave empty if using custom domain or root
   ```

5. **Your site will be live at:**
   - `https://YOUR-USERNAME.github.io/ClinicalToolkit/` (if baseurl is "/ClinicalToolkit")
   - `https://YOUR-USERNAME.github.io/` (if baseurl is empty and using root)

### Option 2: Custom Domain

1. Follow GitHub Pages setup above
2. In repository Settings → Pages → Custom domain:
   - Enter your domain (e.g., `clinicaltoolkit.com`)
3. Configure DNS at your registrar:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

4. Update `_config.yml`:
   ```yaml
   url: "https://clinicaltoolkit.com"
   baseurl: ""
   ```

## Local Development

### Setup
```bash
# Install Ruby (if not already installed)
# On macOS:
brew install ruby

# Install Jekyll
gem install bundler jekyll

# Navigate to project
cd ClinicalToolkit

# Install dependencies
bundle install
```

### Run Locally
```bash
# Start Jekyll server
bundle exec jekyll serve

# Visit http://localhost:4000
# Changes auto-reload (except _config.yml)
```

### Build for Production
```bash
# Generate static site in _site/
bundle exec jekyll build
```

## Configuration

### Update Branding

Edit `_config.yml`:
```yaml
title: Clinical Toolkit  # Your site name
description: Your description
url: "https://yourdomain.com"
baseurl: ""  # Leave empty for root
```

### Update Links

Search and replace in all files:
- `[USERNAME]` → Your GitHub username
- `https://physicianpromptengineering.com` → Update if needed

### Google Analytics (optionnal)

1. Get GA4 tracking ID
2. Add to `_config.yml`:
   ```yaml
   google_analytics: G-XXXXXXXXXX
   ```

## File Structure

```
ClinicalToolkit/
├── _config.yml            # Jekyll configuration
├── _includes/             # Shared HTML components
│   ├── head.html
│   ├── footer.html
│   └── cta-banner.html
├── _layouts/              # Page templates
│   └── default.html
├── assets/                # CSS, JS, images
│   ├── css/
│   └── js/
├── index.md               # Homepage
├── about.md               # About page
├── [tool-name].md         # Individual tool pages (16 files)
├── *-sw.js                # Service workers for PWA
├── *-manifest.json        # PWA manifests
├── README.md              # Project documentation
├── Gemfile                # Ruby dependencies
└── DEPLOYMENT.md          # This file
```

## Troubleshooting

### Jekyll Build Errors

```bash
# Clear cache and rebuild
bundle exec jekyll clean
bundle exec jekyll build
```

### PWA Not Installing

1. Ensure HTTPS (GitHub Pages auto-enables)
2. Check service worker registration in browser DevTools
3. Verify manifest.json paths are correct

### Styles Not Loading

1. Check `baseurl` in `_config.yml`
2. Verify asset paths use `{{ site.baseurl }}`
3. Clear browser cache

### 404 Errors

1. Confirm GitHub Pages is enabled
2. Wait 1-2 minutes after pushing
3. Check branch is `main` not `master`
4. Verify file names don't have special characters

## Updating Content

### Add New Tool

1. Create `new-tool.md` in root
2. Add frontmatter:
   ```yaml
   ---
   layout: default
   title: Tool Name
   description: Tool description
   ---
   ```
3. Add link to `index.md` and navigation
4. Commit and push

### Update Existing Tool

1. Edit the `.md` file
2. Test locally: `bundle exec jekyll serve`
3. Commit and push
4. Changes appear in 1-2 minutes

## Performance Optimization

### Images
- Compress before uploading
- Use WebP format when possible
- Lazy load with `loading="lazy"`

### PWA
- Update service worker version after changes
- Test offline functionality
- Validate manifest with Lighthouse

## Security Notes

- ✅ All data stored locally (localStorage)
- ✅ No server-side processing
- ✅ HTTPS via GitHub Pages
- ❌ NOT HIPAA compliant
- ❌ Never collect PHI

## Support

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions
- **Documentation:** This file and README.md

---

**Last Updated:** December 2025
