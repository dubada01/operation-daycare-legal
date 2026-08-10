# Operation Daycare policies

Static privacy, terms, and support pages for Operation Daycare. There is no
runtime, package manager, database, analytics script, cookie, or paid hosting.

GitHub Actions validates the required pages and publishes the `site/` directory
to GitHub Pages after changes reach `main`.

## Public routes

- `/operation-daycare-legal/`
- `/operation-daycare-legal/privacy/`
- `/operation-daycare-legal/terms/`
- `/operation-daycare-legal/support/`

## Local validation

```bash
node tests/validate.mjs
```
