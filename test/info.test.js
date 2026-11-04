// test/info.test.js — integration test for DEVOPS-2 (/info)
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("GET /info", () => {
  it("returns app info", async () => {
    const res = await request(app).get("/info");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("version");
    expect(res.body).toHaveProperty("node");
    expect(res.body).toHaveProperty("uptime");
  });
});
