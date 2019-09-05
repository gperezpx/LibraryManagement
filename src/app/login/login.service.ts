import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataServices } from '../data.services';
import { Alumno } from '../alumno.model';

@Injectable()
export class LoginService{

    activeSession: boolean;
    private urlEndPoint: string = 'http://localhost:8080/api/libros';

    constructor(private router: Router, private dataServices: DataServices){}

    login(username: string, password: string){
        this.dataServices.getAlumnoById(username).subscribe(
            (alumno: Alumno) => { 
                if((alumno.matricula==username)&&(alumno.password=password)){
                    this.router.navigate(['/dashboard']);
                    this.activeSession = true;
            }
        });
    }
    

    logout(){
        this.router.navigate(['/login']);
        this.activeSession = false;
    }

}