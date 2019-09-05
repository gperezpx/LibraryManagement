import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Prestamo } from '../prestamo.model';

@Injectable()
export class PrestamosServices{
    private urlEndPoint: string = 'http://localhost:8080/api/prestamos';
    constructor(private http: HttpClient){}



    getPrestamos(): Observable<Prestamo[]>{
        return this.http.get<Prestamo[]>(this.urlEndPoint);
    }
    savePrestamos(prestamo: Prestamo){
        this.http.post(this.urlEndPoint,prestamo);
    }
    

}