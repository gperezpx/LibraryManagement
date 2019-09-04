import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginService{

    activeSession: boolean;

    constructor(private router: Router){}

    login(username: string, password: string){
        if((username=="admin")&&(password="12345")){
            this.router.navigate(['/dashboard']);
            this.activeSession = true;
        }
    }

    logout(){
        this.router.navigate(['/login']);
        this.activeSession = false;
    }
}