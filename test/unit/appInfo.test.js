// test/unit/appInfo.test.js — unit tests for src/utils/appInfo.js
import { describe, it, expect } from "vitest";
import { getPackageInfo, getRuntimeInfo } from "../../src/utils/appInfo.js";

describe("getPackageInfo", () => {
  it("returns name and version", () => {
    const info = getPackageInfo();
    expect(info).toHaveProperty("name");
    expect(info).toHaveProperty("version");
    expect(typeof info.version).toBe("string");
  });
});

describe("getRuntimeInfo", () => {
  it("returns node version and a numeric uptime", () => {
    const info = getRuntimeInfo();
    expect(info).toHaveProperty("node");
    expect(info.node).toBe(process.version);
    expect(typeof info.uptime).toBe("number");
    expect(info.uptime).toBeGreaterThanOrEqual(0);
  });
});
