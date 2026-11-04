// src/routes/auto/version.route.js
// DEVOPS-1 — /version endpoint.
// Exposes the current application version read from package.json.

import { Router } from "express";
import { getPackageInfo } from "../../utils/appInfo.js";

const router = Router();

// GET /version -> { version: "x.x.x" }
router.get("/version", (req, res) => {
  const { version } = getPackageInfo();
  res.status(200).json({ version });
});

export default router;
