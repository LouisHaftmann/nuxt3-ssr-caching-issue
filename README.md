# Nuxt3 SSR caching issue reproduction

1. Run `pnpm install`
2. Build project: `pnpm build`
3. Serve project: `node .output/server/index.mjs`
4. Go to http://localhost:3000, caching doesn't work
5. Try changing to a different route rule in `nuxt.config.ts`