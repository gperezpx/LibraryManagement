import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ejemplar } from '../ejemplar.model';

@Injectable()
export class EjemplaresServices{
    private urlEndPoint: string = 'http://localhost:8080/api/ejemplares';
    constructor(private http: HttpClient){}

    getAlumnos(): Observable<Ejemplar[]>{
        return this.http.get<Ejemplar[]>(this.urlEndPoint);
    }
    saveAlumno(ejemplar: Ejemplar){
        this.http.post(this.urlEndPoint,ejemplar);
    }
    

}