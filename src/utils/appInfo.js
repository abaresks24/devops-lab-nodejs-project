// src/utils/appInfo.js
// Utilities exposing static package metadata and live runtime information.
// Used by the /info and /version routes.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// package.json lives at the project root, two levels up from src/utils.
const packageJsonPath = join(__dirname, "..", "..", "package.json");

/**
 * Read the application name and version from package.json.
 * @returns {{ name: string, version: string }}
 */
export function getPackageInfo() {
  const raw = readFileSync(packageJsonPath, "utf-8");
  const pkg = JSON.parse(raw);
  return { name: pkg.name, version: pkg.version };
}

/**
 * Collect live runtime information from the Node.js process.
 * @returns {{ node: string, uptime: number }}
 */
export function getRuntimeInfo() {
  return {
    node: process.version,
    uptime: process.uptime(),
  };
}
