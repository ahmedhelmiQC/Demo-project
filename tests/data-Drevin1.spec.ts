import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const loginDataPath = resolve(__dirname, "../test-data/data.json");
const loginTestData = JSON.parse(readFileSync(loginDataPath, "utf-8"));

for (const { username, password, validity } of loginTestData) {
test(`login test for ${username} / ${password}`, async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill(username);
    await page.locator("#password").fill(password);
    await page.getByRole("button",{name:"Sign In"}).click();

    if (validity.toLowerCase() === "valid") {
        await expect(page).toHaveURL(/shop/!);
    }
    else{
        await expect(
            page.getByText("Incorrect username/password.")
        ).toBeVisible();
    }
});
}