import{Locator , Page} from "@playwright/test";


export class DashboardPage{

    readonly page :Page;
    private readonly cartButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.cartButton = page.locator("[routerlink*='cart']");
    }

    async open():Promise<void>{
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    private productCard(productName : string): Locator{
        return this.page.locator(".cart-body").filter({hasText:productName});
    }

    async addProductToCart(productName:string):Promise<void>{
        const card = this.productCard(productName);
        await card.getByRole("button", {name:/add to cart/!}).click();
    }

    async openCart():Promise<void>{
        await this.cartButton.click();
    }
}