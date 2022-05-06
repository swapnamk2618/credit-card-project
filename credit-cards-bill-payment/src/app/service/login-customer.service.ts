import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginCustomerService{
    baseUrl="http://localhost:8080/user-login"
    constructor(private http:HttpClient){

    }
    login(loginBody:any){
        const url=`$(this.baseurl)user-login`
        return this.http.post(url,loginBody);
    }
}