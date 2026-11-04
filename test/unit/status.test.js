// test/unit/status.test.js — unit test for DEVOPS-4 formatStatus()
// Covers every branch of src/utils/status.js.
import { describe, it, expect } from "vitest";
import { formatStatus } from "../../src/utils/status.js";

describe("formatStatus", () => {
  it("returns 'warming-up' when uptime < 60s", () => {
    expect(formatStatus(0)).toBe("warming-up");
    expect(formatStatus(59)).toBe("warming-up");
  });

  it("returns 'healthy' when 60s <= uptime < 3600s", () => {
    expect(formatStatus(60)).toBe("healthy");
    expect(formatStatus(1800)).toBe("healthy");
    expect(formatStatus(3599)).toBe("healthy");
  });

  it("returns 'steady' when uptime >= 3600s", () => {
    expect(formatStatus(3600)).toBe("steady");
    expect(formatStatus(100000)).toBe("steady");
  });

  it("falls back to 'warming-up' for invalid input", () => {
    expect(formatStatus(NaN)).toBe("warming-up");
    expect(formatStatus("abc")).toBe("warming-up");
  });
});
