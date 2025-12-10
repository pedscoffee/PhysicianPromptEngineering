# Post-Deployment Checklist

After deploying Clinical Toolkit to GitHub Pages, update the following:

## 1. Update _config.yml

Replace placeholders:
```yaml
url: "https://YOUR-USERNAME.github.io"  # Change YOUR-USERNAME
```

## 2. Search and Replace [USERNAME]

The following files contain `[USERNAME]` placeholders that need YOUR GitHub username:

- `README.md` (4 occurrences)
- `about.md` (3 occurrences)
-_config.yml` (1 occurrence)

**Find:** `[USERNAME]`  
**Replace:** Your actual GitHub username

## 3. Optional: Update Cross-Links

If you want bidirectional linking between projects:

**In PhysicianPromptEngineering:**
- Add link to Clinical Toolkit in footer or about page

**In Clinical Toolkit:**
- Already links to Physician Prompt Engineering in:
  - Homepage (bottom CTA section)
  - About page (Related Projects section)

## 4. Optional: Google Analytics

If you want analytics:

1. Create GA4 property
2. Get tracking ID (starts with G-)
3. Add to `_config.yml`:
```yaml
google_analytics: G-XXXXXXXXXX
```

## 5. Optional: Social Media Links

Update footer.html with your social accounts:
- Twitter/X
- YouTube  
- GitHub

## 6. Test All Links

After deployment, verify:
- [ ] All tool pages load
- [ ] Navigation works
- [ ] PWA installation works (6 tools)
- [ ] Footer links correct
- [ ] Cross-links to Physician Prompt Engineering work

## 7. Update Repository Description

On GitHub repo page, add:
- **Description:** "Open-source productivity and visualization tools for physicians"
- **Website:** (your GitHub Pages URL)
- **Topics:** Add tags like `physicians`, `healthcare`, `productivity`, `medical-tools`, `pwa`

## 8. Create GitHub Templates (Optional)

Consider adding:
- `.github/ISSUE_TEMPLATE/` - Issue templates
- `.github/PULL_REQUEST_TEMPLATE.md` - PR template
- `.github/CONTRIBUTING.md` - Contribution guidelines

## Files That Are Ready As-Is

These don't need updates:
- ✅ All 16 tool `.md` files
- ✅ All service workers and manifests
- ✅ All layouts and includes
- ✅ All assets (CSS, JS)
- ✅ index.md (homepage)
- ✅ about.md (except [USERNAME] placeholders)
- ✅ disclaimer.md
- ✅ privacy-policy.md
- ✅ Gemfile
- ✅ .gitignore

## Quick Deploy Commands

```bash
cd ClinicalToolkit
git init
git add .
git commit -m "Initial commit - Clinical Toolkit"
git remote add origin https://github.com/YOUR-USERNAME/ClinicalToolkit.git
git branch -M main
git push -u origin main
```

Then enable Pages in repo settings!
