import {test , expect , Locator , Page} from "@playwright/test"

test.use({
    launchOptions: {slowMo: 800},
}); 

class ToDo{

    static readonly URL = "https://demo.playwright.dev/todomvc";

    private readonly page : Page;
     readonly item : Locator;
     todoitem : Locator;

    constructor (page : Page)
    {
        this.page = page;
        this.todoitem = page.getByPlaceholder("What needs to be done?");
        this.item = page.getByTestId("todo-item");
    }

    public async open():Promise<void>{
        await this.page.goto(ToDo.URL);
    }

    public async todoitems(titel : string):Promise<void>
    {
        await this.todoitem.fill(titel);
        await this.todoitem.press("Enter");
    }
}

   test ("add to item" , async({page})=>
    {
        const todo = new ToDo(page);

        await page.goto(ToDo.URL);
        await todo.todoitems("Automation Course");

        await expect(todo.item).toHaveCount(1);
        await expect(todo.item).toContainText("Automation Course");
    }
)
