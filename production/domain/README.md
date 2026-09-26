# Custom domain: preparation and cutover

Candidate: `millervisual.ru`. Registry check on 26 September 2026 showed it
was unregistered. This is time-sensitive; check the registrar cart before paying.

The current GitHub Pages project is hosted at
`https://stepanmiller.github.io/visual-production-studio/`. The public project
page and Bali use relative asset URLs. The anonymized Heart presentation was
prepared with `portable-heart.mjs` so it resolves images, scripts and the film
from either `/visual-production-studio/cases/heart/` or `/cases/heart/`.

## After the owner buys the domain

1. Confirm the registered domain name, registrar and control panel access.
2. In the registrar's DNS zone set four A records for the root (`@`):
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`. Remove conflicting parked-site root records.
3. If `www` is wanted, add a CNAME for `www` to
   `stepanmiller.github.io.`; configure apex plus `www` with GitHub's
   redirect behavior. Do not set a wildcard record.
4. In repository Settings → Pages → Custom domain enter the actual owned
   domain, save, and ensure the source branch has the matching root `CNAME`
   file. GitHub adds it automatically for branch-based publication.
5. Wait for GitHub's DNS check and certificate provisioning, then enable
   **Enforce HTTPS** when GitHub offers it. DNS can take up to 24 hours.
6. Verify `/`, `/cases/bali/`, `/cases/heart/`, the Heart introductory film,
   the four music-backed films and the MAX contact links on the final HTTPS
   address. Old GitHub Pages URLs should redirect as GitHub configures them.

Until the registration is paid and domain ownership confirmed, do not set a
`CNAME` file or change GitHub Pages' custom-domain setting; the existing site
must remain available. DNS needs domain control through the registrar.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
