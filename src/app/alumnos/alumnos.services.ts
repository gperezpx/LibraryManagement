import {HttpClient} from '@angular/common/http'
import { Alumno } from '../alumno.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AlumnosServices{
    private urlEndPoint: string = 'http://localhost:8080/api/alumnos';
    constructor(private http: HttpClient){}

    getAlumnos(): Observable<Alumno[]>{
        return this.http.get<Alumno[]>(this.urlEndPoint);
    }

}