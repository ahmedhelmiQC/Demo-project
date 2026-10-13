import{test} from "@playwright/test";
import fs from "fs";
import path from "path";

import { AuthApi } from "../API/AuthApi";
import { TokenHelper} from "../Utils/ApiHelper";
import { DashboardPage } from "../pages/client/ProductPage";
import { CartPage} from "../pages/client/CartPage";

type clientEcommerce = {
        userEmail:string;
        userPassword: string;
        productName: string; 
    }

    const datapath = path.join(process.cwd(), "test-data/API.json");
    const tests:clientEcommerce[] = JSON.parse(fs.readFileSync(datapath,"utf-8"));

    for(const {userEmail,userPassword,productName} of tests){
        test(`API Login + add"${productName}" for ${userEmail}`,async({page})=>{
            const authenticationAPI = await AuthApi.create();
            try{
                const token = await authenticationAPI.login({userEmail,userPassword});
                await TokenHelper.inject(page,token);
            }finally{
                await authenticationAPI.dispose();
            }

            const dashboard = new DashboardPage(page);
            const cart = new CartPage(page);

            await dashboard.open();
            await dashboard.addProductToCart(productName);
            await dashboard.openCart();

            await cart.expectProductVisibilty(productName);

        })
    }