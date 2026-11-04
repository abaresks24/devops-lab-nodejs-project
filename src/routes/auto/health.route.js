// src/routes/auto/health.route.js
// /health endpoint — reports a human-readable uptime status label.
// Relies on the DEVOPS-4 formatStatus() utility.

import { Router } from "express";
import { formatStatus } from "../../utils/status.js";

const router = Router();

// GET /health -> { status: "ok", uptime, label }
router.get("/health", (req, res) => {
  const uptime = process.uptime();
  res.status(200).json({
    status: "ok",
    uptime,
    label: formatStatus(uptime),
  });
});

export default router;
