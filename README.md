# Operation Daycare policy site

Public safety, privacy, terms, and support pages for Operation Daycare.

## Routes

- `/` — safety and support overview
- `/privacy` — privacy policy
- `/terms` — terms of use
- `/support` — support and account-deletion help

## Local validation

Requires Node.js 22.13 or later.

```bash
npm ci
npm test
npm run lint
npm audit
```

The production site is managed by OpenAI Sites. Its opaque project identifier
is stored in `.openai/hosting.json`; runtime credentials and secrets must not be
committed to this directory.
