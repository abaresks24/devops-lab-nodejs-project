// vitest.config.js
// Authoritative test + coverage configuration (mirrors the vitest block in
// package.json). server.js only binds the HTTP port, so it is excluded from
// coverage — all testable logic lives in app.js / routes / utils.
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      all: true,
      include: ["src/**/*.js"],
      exclude: ["src/server.js"],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 70,
        statements: 80,
      },
    },
  },
});
