# SEO and controlled AI discovery

Production domain: `https://fazekasterasz.hu`

This document is the maintenance handover for ordinary SEO, generative engine optimisation, AI-assisted search discovery, crawler policy and search-engine registration.

There is no single GEO switch or guaranteed AI-ranking tag. The durable approach is accurate public content, strong technical SEO, factual structured data, controlled crawler access and consistent canonical URLs.

## Production contract

Last verified on 18 July 2026:

- The canonical sitemap is `https://fazekasterasz.hu/sitemap.xml`.
- Google Search Console reported the sitemap as `Success` with 4 discovered URLs.
- The site is registered in Bing Webmaster Tools and the same canonical sitemap is submitted.
- `https://www.fazekasterasz.hu/*` redirects permanently to the matching `https://fazekasterasz.hu/*` URL while preserving the path and query string.
- The homepage canonical, sitemap, `robots.txt`, `llms.txt`, `llms-full.txt` and Cloudflare response headers passed the production audit.

Do not add old HTTP sitemaps, child sitemaps, sitemap indexes or alternate-host sitemap URLs to Google or Bing.

## Required public signals

Keep `/robots.txt`, `/sitemap.xml`, `/llms.txt` and `/llms-full.txt` available in the deployed site.

Public responses must retain:

```text
Content-Signal: search=yes, ai-input=yes, ai-train=no, use=reference
```

`llms.txt` and `llms-full.txt` are factual discovery aids. They do not replace HTML content, metadata, internal links, structured data or the sitemap.

## Crawler policy

- Allow ordinary search indexing.
- Allow user-directed retrieval and AI search agents, including OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User and DuckAssistBot.
- Disallow known model-training or bulk collection agents, including GPTBot, ClaudeBot, anthropic-ai, CCBot, Google-Extended, Applebot-Extended, Bytespider, meta-externalagent, Amazonbot and cohere-ai.
- Keep sitemap references and any existing repo-specific crawler rules intact.

Do not infer verified crawler access from a normal `curl` request with a copied AI user agent. Check AI Crawl Control actions and production security logs instead.

## Cloudflare settings

- Crawler Hints: on.
- Verified AI training crawlers: blocked on all pages.
- Mixed-purpose crawlers used for search: continue to allow.
- Managed `robots.txt`: off.
- Canonical www-to-apex redirect: active and path-preserving.

## Change rules

- Keep one canonical URL for every page.
- Update the sitemap, canonical, internal links, structured data and both `llms` files together when a public route or business fact changes.
- Do not invent services, locations, accreditations, people, reviews or project facts.
- Do not create repetitive keyword or location pages without genuine unique content.
- Never claim a URL is indexed only because it appears in a successful sitemap.

## Release checks

```bash
curl -sS https://fazekasterasz.hu/robots.txt
curl -sS https://fazekasterasz.hu/llms.txt
curl -sS https://fazekasterasz.hu/llms-full.txt
curl -sSI https://fazekasterasz.hu/ | grep -i content-signal
curl -sSIL "https://www.fazekasterasz.hu/kapcsolat?seo-check=1"
```

Confirm the canonical sitemap remains accepted in Google Search Console and Bing Webmaster Tools after material URL changes.
