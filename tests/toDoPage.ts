import {type Page} from "@playwright/test"
import { BasePage } from "./basePage.ts";

 export class ToDoPage extends BasePage{
   constructor(page:Page)
   {
    super(page);
   }

   override async open(): Promise<void>
{
    await super.open();
    await this.page.getByPlaceholder("What needs to be done?").waitFor();
    await this.page.getByPlaceholder("todo-item");
}
async additems():Promise<void>
{
    await this.page.getByPlaceholder("What needs to be done?").fill("omar khaled");
    await this.page.getByPlaceholder("What needs to be done?").press("Enter");
}

}