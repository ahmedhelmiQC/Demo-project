import{test , expect , type Page , type Locator} from "@playwright/test";

test.use({
    launchOptions: {slowMo: 800},
});
class ToDoPage {
    static readonly URL = "https://demo.playwright.dev/todomvc";

    private readonly page: Page;
    public readonly todoinput : Locator;
    todoitems : Locator;

    constructor (page : Page){
        this.page = page;
        this.todoinput = page.getByPlaceholder("What needs to be done?");
        this.todoitems = page.getByTestId("todo-item");
    }
    public async open(): Promise<void> {
       await this.page.goto(ToDoPage.URL);
    }

    public async toDoItems(titel : string):Promise<void>
    {
    await this.todoinput.fill(titel);
    await this.todoinput.press("Enter");
    }

}

test("adds todo Items",async ({page})=>{
    const too = new ToDoPage(page);
    await page.goto(ToDoPage.URL);
    await too.toDoItems("Automation Course")

    await expect(too.todoitems).toHaveCount(1);
    await expect(too.todoitems).toContainText("Automation Course");
})
