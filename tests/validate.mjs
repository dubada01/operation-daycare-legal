import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const pages = [
  ["index.html", ["Operation Daycare", "additional reminder"]],
  ["privacy/index.html", ["Privacy policy", "do not sell personal information", "Delete your linked account"]],
  ["terms/index.html", ["Terms of use", "not an emergency service", "Family Plan"]],
  ["support/index.html", ["Support", "dubatechstudio@gmail.com", "Check on the child directly"]],
];

for (const [relativePath, requiredText] of pages) {
  const path = join("site", relativePath);
  assert.ok(existsSync(path), `${relativePath} is missing`);
  const html = readFileSync(path, "utf8");
  assert.match(html, /<!doctype html>/i, `${relativePath} is not an HTML document`);
  assert.match(html, /<meta name="viewport"/, `${relativePath} is missing responsive metadata`);
  assert.doesNotMatch(html, /PASTE_|PLACEHOLDER|openai\.site/i, `${relativePath} contains a placeholder`);
  for (const text of requiredText) {
    assert.ok(html.includes(text), `${relativePath} is missing required copy: ${text}`);
  }
}

assert.ok(existsSync("site/styles.css"), "styles.css is missing");
assert.ok(existsSync("site/.nojekyll"), ".nojekyll is missing");
console.log(`Validated ${pages.length} static pages.`);
