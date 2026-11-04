// src/server.js
// Entry point: starts the HTTP server. Kept separate from app.js so tests can
// import the app without binding a port.

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});
