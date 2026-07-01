import { cpSync, mkdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve("studio-dist");

if (!existsSync(src)) {
  console.error("ERROR: studio-dist/ not found. Run `sanity build ./studio-dist` first.");
  process.exit(1);
}

// Studio's index.html goes to /admin/index.html so requests to /admin/* serve it
const adminDest = resolve(".output/public/admin");
mkdirSync(adminDest, { recursive: true });
cpSync(resolve(src, "index.html"), resolve(adminDest, "index.html"));

// Studio's static assets (/static/...) go to the public root — Studio HTML
// references them as absolute /static/... paths regardless of basePath.
const staticSrc = resolve(src, "static");
if (existsSync(staticSrc)) {
  const staticDest = resolve(".output/public/static");
  mkdirSync(staticDest, { recursive: true });
  cpSync(staticSrc, staticDest, { recursive: true });
}

// Copy favicon and manifest from Studio (used by /static/ references in Studio's HTML)
for (const file of ["favicon.ico", "manifest.webmanifest"]) {
  const f = resolve(src, file);
  if (existsSync(f)) {
    cpSync(f, resolve(".output/public", file));
  }
}

console.log("✓ Sanity Studio index.html → .output/public/admin/index.html");
console.log("✓ Sanity Studio static assets → .output/public/static/");
