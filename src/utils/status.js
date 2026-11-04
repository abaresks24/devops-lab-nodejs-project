// src/utils/status.js
// DEVOPS-4 — formatStatus() utility.
// Converts an uptime (in seconds) into a human-readable status label.

/**
 * Map an uptime in seconds to a status label.
 *   uptime < 60      -> "warming-up"
 *   60 <= uptime < 3600 -> "healthy"
 *   uptime >= 3600   -> "steady"
 *
 * @param {number} uptime uptime in seconds
 * @returns {"warming-up" | "healthy" | "steady"}
 */
export function formatStatus(uptime) {
  if (typeof uptime !== "number" || Number.isNaN(uptime)) {
    return "warming-up";
  }
  if (uptime < 60) {
    return "warming-up";
  }
  if (uptime < 3600) {
    return "healthy";
  }
  return "steady";
}
