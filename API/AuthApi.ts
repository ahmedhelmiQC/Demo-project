import { APIRequestContext , request , expect } from "@playwright/test";

const BASE_URL = "https://rahulshettyacademy.com";

export type loginCredentials= {
    userEmail : string;
    userPassword : string;
}

class AuthApi{

    private constructor(private readonly apiContext:APIRequestContext){}

    static async create():Promise<AuthApi>{
        const apiContext = await request.newContext( {baseURL:BASE_URL} );
        return new AuthApi(apiContext);
    }

    async login({userEmail,userPassword}:loginCredentials):Promise<string>{
        const loginResponse = await this.apiContext.post("/client/#/auth/login",{
            data: {userEmail,userPassword},
        });

        expect(loginResponse.ok(), `Login Faild For ${userEmail}`).toBeTruthy();

        const loginResponseJeson = await loginResponse.json();
        expect(
            loginResponseJeson.token,"Login response missing api"
        ).toBeTruthy();

        return loginResponseJeson.token as string;
    }

    async dispose():Promise<void>{
        await this.apiContext.dispose();
    }
}