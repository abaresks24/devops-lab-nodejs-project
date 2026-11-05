# Step 1 — PLAN (Jira Cloud)

> Plan de l'étape 1 du TP. Le projet Jira correspondant est sur https://arthur-devops-lab.atlassian.net (clé DEVOPS).

## 1. Create the Scrum project
- https://www.atlassian.com/software/jira → **Software → Scrum → Create Project**
- **Name:** `DevOps Lab Node.js Project`
- **Key:** `DEVOPS` (prefixes issues: DEVOPS-1 …)

## 2. Board workflow (Board Settings → Columns)
`To Do → In Progress → Review → Done` — assign all 4 students to the board.

## 3. Epics
| Epic | Description |
|------|-------------|
| **API Core Development** | Endpoints for /version, /info, /boom, /health |
| **Error Handling** | Exception management and global middleware |
| **Monitoring** | Application uptime, runtime info, and status labels |
| **CI/CD Automation** | Linting, testing, coverage, and GitHub Actions pipeline |

## 4. User Stories (linked to the *API Core Development* epic)

### DEVOPS-1 — Create /version API endpoint
**As a developer, I want to provide a /version API route, so that the app can expose its current version number.**
Acceptance criteria:
- GET /version returns a JSON with a `"version"` key
- Response code = 200
- Integration test `test/version.test.js` passes
- Commit and branch include `DEVOPS-1`
- Story → Done when PR merged and CI passes

### DEVOPS-2 — Implement /info endpoint
- GET /info returns `{ name, version, node, uptime }`
- JSON response; unit test for helpers (`test/unit/appInfo.test.js`)

### DEVOPS-3 — Implement /boom endpoint
- GET /boom triggers a 500 error
- Global error handler returns `{ error: true, message }`

### DEVOPS-4 — Implement formatStatus() utility
- Returns `warming-up`, `healthy`, or `steady` depending on uptime
- Unit test covers all branches (`test/unit/status.test.js`)

### Story ↔ file mapping
| Student | Story | File | Branch |
|---------|-------|------|--------|
| A | DEVOPS-1 | src/routes/auto/version.route.js | feature/DEVOPS-1-version-endpoint |
| B | DEVOPS-2 | src/routes/auto/info.route.js | feature/DEVOPS-2-info-endpoint |
| C | DEVOPS-3 | src/routes/auto/boom.route.js | feature/DEVOPS-3-boom-endpoint |
| D | DEVOPS-4 | src/utils/status.js | feature/DEVOPS-4-status-utility |

## 5. Integrate Jira with GitHub
1. Jira → **Apps → Find new apps → "GitHub for Jira (Atlassian)"**
2. Install and authorize your GitHub organization.
3. Connect the repository (push this project to GitHub first).

Once connected, because branches/commits/PRs embed the `DEVOPS-N` key:
- Branch `feature/DEVOPS-2-info-endpoint` appears automatically in Jira.
- Commit `feat(DEVOPS-2): add /info endpoint` links to the story.
- PR `DEVOPS-2 | Implement /info endpoint` shows in the issue's Development panel.
