import{test , expect , request} from "@playwright/test";

const loginPayload = {
    userEmail: "original.ahmed99@gmail.com",
    userPassword: "Ahmed@123",
};

let token: string;

test.beforeAll(async()=>{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post
    ("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:loginPayload,
        }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();

    token = loginResponseJson.token;
})

test("addproduct to the cart", async({page})=>{
    await page.addInitScript((value) => {
        window.localStorage.setItem("token",value);
    }, token);
    
    page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

    const product = page.locator(".card-body").filter({hasText:"ZARA COAT 3"});
    await product.getByRole("button", {name:"ADD TO CART"}).click();

    await page.locator("[routerlink*='cart']").click();
    await expect(page.locator("h3").filter({hasText:"ZARA COAT 3"})).toBeVisible();

})