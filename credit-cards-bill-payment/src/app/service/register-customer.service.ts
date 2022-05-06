import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class RegisterCustomerService{
    baseUrl="http://localhost:8080/register-user-detail"
    constructor(private http:HttpClient){

    }
    register(registerBody:any){
        const url=`$(this.baseurl)register-user-detail`
        return this.http.post(url,registerBody);
    }
}