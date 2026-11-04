// src/routes/auto/boom.route.js
// DEVOPS-3 — /boom endpoint.
// Deliberately throws to exercise the global error handler (returns HTTP 500).

import { Router } from "express";

const router = Router();

// GET /boom -> throws, forwarded to the global error handler via next(err).
router.get("/boom", (req, res, next) => {
  next(new Error("Simulated server error"));
});

export default router;
