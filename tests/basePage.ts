import{ type Page} from "@playwright/test"

export class BasePage{
    constructor (readonly page:Page){};

    async open():Promise<void>
    {
        await this.page.goto("https://demo.playwright.dev/todomvc");
    }

}

