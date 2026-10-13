import{test , expect} from "@playwright/test";

const loginTestData = [
    ["rahulshettyacademy" , "Learning@830$3mK2" , "valid"] ,
    ["rahulshettyacademy" , "wrong-pass", "invaild"] ,
    ["ey" , "learning" , "invaild"] , 
    [" " , " " , "invalid"],
];

for(const [username,password,validity] of loginTestData){
test(`login test for${username} / ${password}`, async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill(username);
    await page.locator("#password").fill(password);
    await page.getByRole("button",{name:"Sign In"}).click();

    if(validity.toLocaleLowerCase()==="valid"){
        await expect(page).toHaveURL(/shop/!)
    }
    else{
        await expect(
            page.getByText("Incorrect username/password.")
        ).toBeVisible();
    }
}
)}