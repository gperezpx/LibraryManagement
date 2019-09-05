import {HttpClient} from '@angular/common/http'
import { Libro } from '../libro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LibrosServices{
    private urlEndPoint: string = 'http://localhost:8080/api/libros';
    constructor(private http: HttpClient){}

    getLibros(): Observable<Libro[]>{
        return this.http.get<Libro[]>(this.urlEndPoint);
    }

}