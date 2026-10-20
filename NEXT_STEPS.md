# Portfolio: Next Steps

Improvements still to do on juansalas.dev, most important first.

## Check before or right after deploying

- [ ] **Confirm the BMW and American Express numbers are OK to publish.** The Experience section now lists $150K+ projected savings (BMW) and $1.5M saved on the Devin AI contract (Amex). Some companies don't allow internal figures on public sites. If unsure, swap them for the result without the dollar amount.
- [ ] **Enforce HTTPS.** In the GitHub repo, go to Settings → Pages and tick *Enforce HTTPS* once the certificate is issued.
- [ ] **Test the link preview.** Paste `https://juansalas.dev` into [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and check that the camo preview image shows.
- [ ] **Check the Planora card.** It now links to the Planora repo and https://planora-fawn.vercel.app (it used to point to Global Voyage). Make sure the description and tech tags (HTML, Tailwind CSS, JavaScript) match that version.
- [ ] **Add a Smart Koozie repo link** if the code is public. Add a `<ProjectLinks githubUrl="..." />` to `SmartKoozieCard` in `components/sections/Projects.tsx`.
- [ ] **Update the local git remote** (optional, it works through a redirect today):
  `git remote set-url origin https://github.com/juanjbsalas/juanjbsalas.git`

## Content

- [ ] **Write one in-depth project page** for InvoiceXchange or EstateWatch. Cover the problem, how it's built (architecture), one hard tradeoff, and what you'd change. This shows engineering judgment better than any project card.
- [ ] **Refresh the About Me text.** It says you're focused on EstateWatch; update it when that changes.

## Engineering polish

- [ ] **Run a Lighthouse audit** (Chrome DevTools → Lighthouse) and aim for 90+ in every category. Likely weak spots: the Smart Koozie video and the large camo background images.
- [ ] **Add Cloudflare Web Analytics** (free, no cookie banner). In Cloudflare go to Analytics & Logs → Web Analytics, add juansalas.dev, and paste the script tag into `app/layout.tsx`.
- [ ] **Run lint in CI.** Add `- run: npm run lint` before `npm run build` in `.github/workflows/deploy.yml` so mistakes fail the build instead of going live.
- [ ] **Optional: turn on Cloudflare's proxy.** Once HTTPS works, you can turn the orange clouds back on in Cloudflare DNS. If you do, set SSL/TLS mode to **Full** (not Flexible, which causes a redirect loop).
