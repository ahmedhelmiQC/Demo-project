import { test,Locator, Page } from "@playwright/test";
test.use({
    launchOptions: {slowMo: 800},
});

class Dashboard {

    private readonly page:Page;
    readonly email    : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    readonly coatCard : Locator;
   readonly acceleratorLinlk : Locator;

    constructor(page:Page){
       this.page=page;
        this.coatCard = page.locator(".col-lg-4").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:" Add To Cart"});
       this.email    = page.getByPlaceholder("email@example.com");
       this.password = page.getByPlaceholder("enter your passsword");
       this.loginBtn = page.getByRole("button", {name:"Login"});
       this.acceleratorLinlk = page.getByRole("link", {name: "accelerator"});
    }
     user={
        email    : "original.ahmed99@gmail.com",
        password : "Ahmed@123"
    }

    async ValidLogin():Promise<void>{
        await this.email.fill(this.user.email);
        await this.password.fill(this.user.password);
        await this.loginBtn.click();
    }

    async newtabe():Promise<void>{
        
        const [newtab]= await Promise.all([
            this.page.waitForEvent(""),this.acceleratorLinlk.click()
        ])
    }


    async coat():Promise<void>{
        await this.coatCard.click();
    }
}

test("adds todo Items",async ({page})=>{
    const card = new Dashboard(page);
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await card.ValidLogin();
    await card.coat();
})
