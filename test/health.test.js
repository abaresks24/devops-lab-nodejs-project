// test/health.test.js — integration test for /health (uses DEVOPS-4 utility)
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /health", () => {
  it("returns a status label based on uptime", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
    expect(res.body).toHaveProperty("uptime");
    expect(["warming-up", "healthy", "steady"]).toContain(res.body.label);
  });
});
