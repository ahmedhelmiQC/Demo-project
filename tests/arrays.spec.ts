// import {test , expect} from "@playwright/test";

// launchOptions: {slowMo: 1000}
// test("create each todo from an array", async ({ page }) => {
//     await page.goto("https://demo.playwright.dev/todomvc");

//     const todos = [ "Buy milk" , "Write test", "Ship it" ];
//     const input = page.getByPlaceholder("What needs to be done?");  

//     for(const todo of todos)
//     {
//         await input.fill(todo);
//         await input.press("Enter");
//     }
//     await expect(page.getByTestId("todo-item")).toHaveCount(todos.length);
//     await expect(page.getByTestId("todo-item")).toHaveText(todos);
// });



const browsers = ["chromium", "firefox", "webkit"];
browsers.push("safari");

browsers.splice(2,2,"edge");
console.log(browsers);

browsers.pop();
console.log(browsers);

const browserremoved = browsers.slice(0,2);
console.log(browserremoved);

console.log(browsers);

