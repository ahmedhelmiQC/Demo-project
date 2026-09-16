import{test,expect} from "@playwright/test"

test.use({
    launchOptions: {slowMo: 800},
});
test("Playwright special locators", async({page})=> {
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator('form input[name="name"]').fill("ahmed");
    await page.locator('form input[name="email"]').fill("test@test.com");
    await page.getByPlaceholder("Password").fill("test");
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByRole("checkbox", { name: /Check me out/! }).click();
    await page.getByLabel("Employed").click();
    await page.getByRole("button",{name:"Submit"}).click();

    await page.getByRole("link",{name:"Shop"}).click();

    await page
        .locator("app-card")
        .filter({hasText:"Nokia Edge"})
        .getByRole("button", { name:"Add " }).click();
    await page
        .locator("app-card")
        .filter({hasText:"iphone X"})
        .getByRole("button", { name:"Add " }).click();

    expect( page.locator("a").filter({hasText:"Checkout"})).toContainText("Checkout ( 2 )");
    
})