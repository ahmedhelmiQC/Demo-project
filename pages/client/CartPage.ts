import { Locator , Page , Expect, expect } from "@playwright/test";

export class CartPage{

    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    productRow(productName : string): Locator {
        return this.page.locator("div.cartSection h3")
        .filter({hasText : productName});
    }

    async expectProductVisibilty(productName: string): Promise<void>{
        await expect(this.productRow(productName),
        `Expected "${productName}"to be visibile in the cart`
        ).toBeVisible();
    }

}