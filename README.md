# DevOps Lab Node.js Project

Core API built for the ESILV **TP4 — DevOps Lab** (Jira · GitHub · VS Code · CI/CD · Node.js).
It implements the four team features and the full CI/CD + testing pipeline.

## Features / User Stories

| Story | File | Endpoint / Utility | Description |
|-------|------|--------------------|-------------|
| DEVOPS-1 | `src/routes/auto/version.route.js` | `GET /version` | Returns `{ version }` from `package.json` |
| DEVOPS-2 | `src/routes/auto/info.route.js` | `GET /info` | Returns `{ name, version, node, uptime }` |
| DEVOPS-3 | `src/routes/auto/boom.route.js` | `GET /boom` | Triggers a 500 handled globally → `{ error: true, message }` |
| DEVOPS-4 | `src/utils/status.js` | `formatStatus()` + `GET /health` | Maps uptime to `warming-up` / `healthy` / `steady` |

## Project structure

```
package.json
eslint.config.js
.github/workflows/ci.yml
src/
  app.js            Express app factory (mounted by tests)
  server.js         HTTP entry point (npm run dev)
  routes/auto/      version | info | boom | health routes
  utils/            appInfo | status | errorHandler
test/
  version.test.js info.test.js boom.test.js health.test.js   (integration — Supertest)
  unit/            appInfo.test.js status.test.js errorHandler.test.js  (unit — Vitest)
```

## Commands

| Action | Command |
|--------|---------|
| Start server | `npm run dev` → http://localhost:3000 |
| Run tests | `npm test` |
| Watch tests | `npm run test:watch` |
| Coverage | `npm test -- --coverage` |
| Lint | `npm run lint` |
| View coverage report | `open coverage/index.html` |

## Quality gates

Enforced via the `vitest.coverage` block in `package.json`:
Lines ≥ 80 %, Functions ≥ 80 %, Statements ≥ 80 %, Branches ≥ 70 %.

CI (`.github/workflows/ci.yml`) runs on every push / PR to `main`:
checkout → setup Node 20 → `npm ci` → `npm run lint` → `npm test -- --coverage` → upload `coverage-report` artifact.

## Git / Jira conventions

- Branch: `feature/DEVOPS-<id>-<short-desc>` (e.g. `feature/DEVOPS-2-info-endpoint`)
- Commit: `feat(DEVOPS-2): add /info endpoint`
- PR title: `DEVOPS-2 | Implement /info endpoint`
