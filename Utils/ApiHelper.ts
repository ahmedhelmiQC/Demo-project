import{Page} from "@playwright/test";

export class TokenHelper{
    static async inject(page: Page , token: string):Promise<void>{
        await page.addInitScript((value)=>{
            window.localStorage.setItem("token", value);
        },token)
    }
}