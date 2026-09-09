import{test,expect} from "@playwright/test";

test.use({
    launchOptions: {slowMo: 800},
});

const user = {
    email : "qa@example.test",
    password: "safe-password",
};

test("fills the UI from destructured user fields", async ({page})=>{
    const {email} = user;

    await page.goto("https://demo.playwright.dev/todomvc");
    const input = page.getByPlaceholder("what needs to be done?");
    await input.fill(email);
    await input.press("Enter");

    await expect(page.getByTestId("todo-item")).toContainText(email);
}
);  
