import{test , expect , type Page } from "@playwright/test"
import { ToDoPage } from "./ToDoPage.ts";

test.use({
    launchOptions: {slowMo: 800},
});


    test("user can add item", async ({page})=>
    {
        const todopage = new ToDoPage(page);

        await todopage.open();
         await todopage.additems;

        // await expect(page.getByPlaceholder("todo-item")).toHaveCount(1);
        // await expect(page.getByPlaceholder("todo-item")).toContainText("omar khaled");

    }
)
 
    
