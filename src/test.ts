import { test, expect } from "@playwright/test";

test.describe("WITH describe", () => {
  test("Test with steps", async ({ page }) => {
    await test.step("Step 1", async () => {
      await page.goto("https://bing.com");
    });

    await test.step("Step 2", async () => {
      expect(1).toBe(2);
    });
  });
});

test("Test with steps WITHOUT `describe`", async ({ page }) => {
  await test.step("Step 1", async () => {
    await page.goto("https://bing.com");
  });

  await test.step("Step 2", async () => {
    expect(1).toBe(2);
  });
});
