import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{

    constructor(private router: Router){}

    login(username: string, password: string){
        if((username=="admin")&&(password="12345")){
            this.router.navigate(['/dashboard']);
        }
    }
}