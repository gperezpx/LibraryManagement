import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Reservacion } from '../reservacion.model';

@Injectable()
export class ReservacionesServices{
    private urlEndPoint: string = 'http://localhost:8080/api/reservaciones';
    constructor(private http: HttpClient){}

    getReservaciones(): Observable<Reservacion[]>{
        return this.http.get<Reservacion[]>(this.urlEndPoint);
    }
    saveReservaciones(reservacion: Reservacion){
        this.http.post(this.urlEndPoint,reservacion);
    }
    

}