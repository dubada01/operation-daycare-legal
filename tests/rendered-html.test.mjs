import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(path) {
  const url = new URL(workerUrl);
  url.searchParams.set("test", `${path}-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(url.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

for (const [path, title, phrase] of [
  ["/", "Operation Daycare | Safety, privacy, and support", "A clear safety layer"],
  ["/privacy", "Privacy policy | Operation Daycare", "Information we collect"],
  ["/terms", "Terms of use | Operation Daycare", "An additional reminder"],
  ["/support", "Support | Operation Daycare", "dubatechstudio@gmail.com"],
]) {
  test(`server-renders ${path}`, async () => {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`, "i"));
    assert.match(html, new RegExp(phrase, "i"));
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/);
  });
}
