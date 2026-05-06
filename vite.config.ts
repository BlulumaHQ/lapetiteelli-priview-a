// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When STATIC=1 we build a fully static SPA suitable for Netlify.
// Lovable's standard build (without STATIC) keeps the SSR/Worker output intact
// so the in-editor preview and tooling continue to work as before.
const STATIC = process.env.STATIC === "1";

export default defineConfig(
  STATIC
    ? {
        cloudflare: false,
        tanstackStart: {
          spa: {
            enabled: true,
            prerender: {
              enabled: true,
              crawlLinks: true,
              outputPath: "/index.html",
            },
          },
        },
      }
    : {},
);
