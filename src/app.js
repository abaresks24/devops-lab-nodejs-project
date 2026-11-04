// src/app.js
// Express application factory. Wires every feature route plus the global
// error handler. Exported without calling listen() so Supertest can mount it.

import express from "express";

import versionRoute from "./routes/auto/version.route.js";
import infoRoute from "./routes/auto/info.route.js";
import boomRoute from "./routes/auto/boom.route.js";
import healthRoute from "./routes/auto/health.route.js";
import { errorHandler } from "./utils/errorHandler.js";

const app = express();

app.use(express.json());

// Feature routes (one per DEVOPS user story).
app.use(versionRoute); // DEVOPS-1  /version
app.use(infoRoute); //    DEVOPS-2  /info
app.use(boomRoute); //    DEVOPS-3  /boom
app.use(healthRoute); //  DEVOPS-4  /health

// Global error-handling middleware — must be registered last.
app.use(errorHandler);

export default app;
