// src/utils/errorHandler.js
// Global Express error-handling middleware.
// Produces a standardized { error: true, message } payload with HTTP 500.

/* eslint-disable no-unused-vars */

/**
 * Express error handler. Must keep the 4-argument signature so Express
 * recognizes it as an error-handling middleware.
 *
 * @param {Error|object} err   the thrown error
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export function errorHandler(err, req, res, next) {
  const message = (err && err.message) ? err.message : "Internal Server Error";
  res.status(500).json({ error: true, message });
}
