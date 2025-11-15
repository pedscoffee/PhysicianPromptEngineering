# Deploying Doc Pixel's Coffee PWA to Vercel

This guide explains how to deploy the Coffee PWA to Vercel, which provides the necessary HTTP headers for SharedArrayBuffer support that GitHub Pages cannot provide.

## Why Vercel?

**Problem:** Coffee PWA uses ONNX WASM with SIMD for fast AI transcription, which requires SharedArrayBuffer. SharedArrayBuffer requires these HTTP headers:
- `Cross-Origin-Embedder-Policy: require-corp`
- `Cross-Origin-Opener-Policy: same-origin`

**Solution:** Vercel allows custom headers via `vercel.json` configuration (already created in the repo root).

---

## Deployment Steps

### Option 1: Deploy Entire Site to Vercel (Recommended)

**Pros:** Simple, everything in one place, faster than GitHub Pages
**Cons:** Moves your entire site away from GitHub Pages

1. **Sign up for Vercel** (free):
   - Go to https://vercel.com/signup
   - Sign in with GitHub

2. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your `Overhaul` repository
   - Click "Import"

3. **Configure the project:**
   - **Framework Preset:** Select "Other" or "Jekyll"
   - **Build Command:** `bundle exec jekyll build`
   - **Output Directory:** `_site`
   - **Install Command:** `bundle install`

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for first build
   - Vercel will give you a URL like `your-site.vercel.app`

5. **Test Coffee:**
   - Navigate to `https://your-site.vercel.app/scribe-pwa/`
   - Click "Initialize Coffee"
   - Record test audio
   - Should transcribe successfully!

6. **Custom domain (optional):**
   - Go to Project Settings → Domains
   - Add `physicianpromptengineering.com`
   - Follow DNS configuration instructions
   - Vercel will auto-provision SSL certificate

---

### Option 2: Deploy Only Coffee PWA to Vercel

**Pros:** Keep main site on GitHub Pages, only move Coffee
**Cons:** More complex setup, need to manage two deployments

1. **Create a new GitHub repository** (just for Coffee):
   ```bash
   # Create new repo on GitHub: "coffee-pwa"

   # Copy Coffee files to new repo
   mkdir coffee-pwa
   cd coffee-pwa
   git init

   # Copy files from Overhaul/scribe-pwa/
   cp -r /path/to/Overhaul/scribe-pwa/* .
   cp /path/to/Overhaul/vercel.json .

   git add .
   git commit -m "Initial Coffee PWA"
   git remote add origin https://github.com/yourusername/coffee-pwa.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Import the `coffee-pwa` repository
   - **Framework Preset:** "Other"
   - **Build Command:** (leave empty - it's static files)
   - **Output Directory:** `.` (current directory)
   - Deploy!

3. **Update navigation on main site:**
   - Edit `_layouts/default.html` on GitHub Pages
   - Change Coffee link to point to Vercel URL:
     ```html
     <a href="https://coffee.vercel.app/">☕ Doc Pixel's Coffee (NEW!)</a>
     ```

4. **Optional subdomain:**
   - In Vercel, add domain: `coffee.physicianpromptengineering.com`
   - Add CNAME record in your DNS: `coffee` → `cname.vercel-dns.com`

---

## Vercel Configuration Explained

The `vercel.json` file in the repo root configures Vercel to:

```json
{
  "headers": [
    {
      "source": "/scribe-pwa/(.*)",
      "headers": [
        {
          "key": "Cross-Origin-Embedder-Policy",
          "value": "require-corp"
        },
        {
          "key": "Cross-Origin-Opener-Policy",
          "value": "same-origin"
        }
      ]
    }
  ]
}
```

This applies the required headers to all Coffee PWA pages, enabling SharedArrayBuffer for WASM SIMD.

---

## Testing Checklist

After deployment, verify:

- [ ] Coffee page loads at `/scribe-pwa/`
- [ ] No SharedArrayBuffer warnings in console
- [ ] "Initialize Coffee" button works
- [ ] Models download successfully
- [ ] Recording works
- [ ] **Transcription completes without errors** ✅
- [ ] Processing with prompts works
- [ ] PWA install prompt appears
- [ ] Offline mode works after first visit

---

## Troubleshooting

### Build fails on Vercel

**Problem:** Jekyll dependencies not installing

**Solution:** Add `.ruby-version` file to repo:
```bash
echo "2.7.4" > .ruby-version
git add .ruby-version
git commit -m "Add Ruby version for Vercel"
git push
```

Then redeploy on Vercel.

### SharedArrayBuffer still not available

**Problem:** Headers not being applied

**Solution 1:** Check Vercel's response headers:
- Open DevTools → Network tab
- Load the Coffee page
- Click on the HTML document request
- Check Response Headers for COOP/COEP

**Solution 2:** Update `vercel.json` to be more specific:
```json
{
  "headers": [
    {
      "source": "/scribe-pwa/index.html",
      "headers": [...]
    },
    {
      "source": "/scribe-pwa/(.*)",
      "headers": [...]
    }
  ]
}
```

### Models fail to download

**Problem:** CORS errors from HuggingFace/CDN

**Solution:** This is expected and should work. The models are large (~1.5GB) and may take time. Wait for full download.

---

## Cost

Vercel Free Tier includes:
- 100GB bandwidth/month (plenty for this use case)
- Unlimited builds
- Free SSL certificates
- Custom domains

Coffee PWA should stay well within free tier limits since:
- Static site (no serverless functions)
- Models cached in browser after first load
- Most users visit once and cache everything

---

## Rollback Plan

If you want to move back to GitHub Pages:

1. Keep your GitHub repo as-is
2. GitHub Pages will continue serving from `gh-pages` or `main` branch
3. Just update any links to point back to GitHub Pages URL

---

## Support

If you encounter issues:
- Check Vercel build logs: Project → Deployments → Click deployment → View logs
- Vercel support: https://vercel.com/support
- Coffee PWA issues: Check browser console for specific errors

---

## Next Steps After Deployment

1. **Update README.md** with new Coffee URL
2. **Update navigation** on main site to link to Vercel-hosted Coffee
3. **Test on mobile devices** (iOS Safari, Android Chrome)
4. **Monitor Vercel analytics** to see usage
5. **Consider adding custom domain** for professional URL

---

**That's it!** Coffee should now work perfectly with full WASM SIMD support and fast transcription on Vercel.
