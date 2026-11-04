// test/unit/errorHandler.test.js — unit tests for src/utils/errorHandler.js
import { describe, it, expect } from "vitest";
import { errorHandler } from "../../src/utils/errorHandler.js";

// Minimal Express-like response double capturing status + json payload.
function mockRes() {
  return {
    statusCode: 0,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
  };
}

describe("errorHandler", () => {
  it("returns 500 with default message when error has none", () => {
    const res = mockRes();
    errorHandler({}, {}, res, () => {});
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ error: true, message: "Internal Server Error" });
  });

  it("returns 500 and forwards the error message", () => {
    const res = mockRes();
    errorHandler(new Error("boom"), {}, res, () => {});
    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ error: true, message: "boom" });
  });
});
