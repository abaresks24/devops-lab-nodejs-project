// src/routes/auto/info.route.js
// DEVOPS-2 — /info endpoint.
// Combines package metadata and runtime info into a single JSON payload.

import { Router } from "express";
import { getPackageInfo, getRuntimeInfo } from "../../utils/appInfo.js";

const router = Router();

// GET /info -> { name, version, node, uptime }
router.get("/info", (req, res) => {
  const { name, version } = getPackageInfo();
  const { node, uptime } = getRuntimeInfo();
  res.status(200).json({ name, version, node, uptime });
});

export default router;
