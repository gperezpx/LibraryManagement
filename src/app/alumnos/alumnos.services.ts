import {HttpClient} from '@angular/common/http'
import { Alumno } from '../alumno.model';
import { Observable } from 'rxjs';

export class AlumnosService{
    private urlEndPoint: string = 'http://localhost:8080/api/alumnos';
    constructor(private http: HttpClient){}

    getClientes(): Observable<Alumno[]>{
        return this.http.get<Alumno[]>(this.urlEndPoint);
    }

}