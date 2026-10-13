import{test , expect } from "@playwright/test"

test.use({
    launchOptions: {slowMo: 800},
});

test("handle a new tab", async({page, context})=>{

    await page.goto("https://rahulshettyacademy.com/locatorspractice/");

    const bannerlink= page.getByRole("link", {name: /QA Career Accelerator/!});

    const [newTab] = await Promise.all([
        context.waitForEvent("page"),
        bannerlink.click(),
    ]);

    await newTab.waitForLoadState();
    await expect(newTab.url()).toContain("rahulshettyacademy");
    await newTab.close();

    await expect(bannerlink).toBeVisible();
})