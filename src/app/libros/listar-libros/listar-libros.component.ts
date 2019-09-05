import { Component, OnInit, Injectable } from '@angular/core';
import { Libro } from 'src/app/libro.model';
import { LibrosServices } from 'src/app/libros/libros.services';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {

  libros: Libro[];

  constructor(private librosServices: LibrosServices) { }

  ngOnInit() {
    this.librosServices.getLibros().subscribe(
      (libros: Libro[]) => { this.libros = libros});
  }

}
