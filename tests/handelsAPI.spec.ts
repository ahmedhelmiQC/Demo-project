import{test , expect , request} from "@playwright/test";

const loginPayload = {
    userEmail: "original.ahmed99@gmail.com",
    userPassword: "Ahmed@123",
};

let token;

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