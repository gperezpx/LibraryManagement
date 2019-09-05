import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from './alumno.model';
import { Libro } from './libro.model';
import { Ejemplar } from './ejemplar.model';
import { Autor } from './autor.model';
import { Reservacion } from './reservacion.model';
import { Prestamo } from './prestamo.model';
import { Categoria } from './categoria.model';
import { Editorial } from './editorial.model';

@Injectable()
export class DataServices{

    
    constructor(private httpClient: HttpClient){}
    
    getAlumnos(){
        const url_api = "http://localhost:8080/api/alumnos/";
        return this.httpClient.get(url_api);
    }
    getAlumnoById(matricula: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteAlumno(matricula: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createAlumno(alumno: Alumno){
        const url_api = "";
        return this.httpClient.post(url_api,alumno);
    }
    modifyAlumno(libro: Libro){
        const url_api = "";
        return this.httpClient.put(url_api,libro);
    }

    getLibros(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getLibroById(idLibro: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteLibro(idLibro: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createLibro(libro: Libro){
        const url_api = "";
        return this.httpClient.post(url_api,libro);
    }
    modifyLibro(libro: Libro){
        const url_api = "";
        return this.httpClient.put(url_api,libro);
    }

    getEjemplares(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getEjemplarById(idEjemplar: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteEjemplar(idEjemplar: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createEjemplar(ejemplar: Ejemplar){
        const url_api = "";
        return this.httpClient.post(url_api,ejemplar);
    }
    modifyEjemplar(ejemplar: Ejemplar){
        const url_api = "";
        return this.httpClient.put(url_api,ejemplar);
    }
    getAutores(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getAutorById(idAutor: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteAutor(idAutor: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createAutor(autor: Autor){
        const url_api = "";
        return this.httpClient.post(url_api,autor);
    }
    modifyAutor(autor: Autor){
        const url_api = "";
        return this.httpClient.put(url_api,autor);
    }
    getReservaciones(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getReservacionById(idReservacion: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteReservacion(idReservacion: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createReservacion(reservacion: Reservacion){
        const url_api = "";
        return this.httpClient.post(url_api,reservacion);
    }
    modifyReservacion(reservacion: Reservacion){
        const url_api = "";
        return this.httpClient.put(url_api,reservacion);
    }
    getPrestamos(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getPrestamoById(idPrestamo: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deletePrestamo(idPrestamo: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createPrestamo(prestamo: Prestamo){
        const url_api = "";
        return this.httpClient.post(url_api,prestamo);
    }
    modifyPrestamo(prestamo: Prestamo){
        const url_api = "";
        return this.httpClient.put(url_api,prestamo);
    }
    getCategorias(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getCategoriaById(idPrestamo: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteCategoria(idCategoria: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createCategoria(categoria: Categoria){
        const url_api = "";
        return this.httpClient.post(url_api,categoria);
    }
    modifyCategoria(categoria: Categoria){
        const url_api = "";
        return this.httpClient.put(url_api,categoria);
    }
    getEditoriales(){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    getEditorialById(idEditorial: string){
        const url_api = "";
        return this.httpClient.get(url_api);
    }
    deleteEditorial(idEditorial: string){
        const url_api = "";
        return this.httpClient.delete(url_api);
    }
    createEditorial(editorial: Editorial){
        const url_api = "";
        return this.httpClient.post(url_api,editorial);
    }
    modifyEditorial(editorial: Editorial){
        const url_api = "";
        return this.httpClient.put(url_api,editorial);
    }
}