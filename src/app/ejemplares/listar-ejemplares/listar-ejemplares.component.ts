import { Component, OnInit } from '@angular/core';
import { Ejemplar } from 'src/app/ejemplar.model';
import { EjemplaresServices } from '../ejemplares.services';

@Component({
  selector: 'app-listar-ejemplares',
  templateUrl: './listar-ejemplares.component.html',
  styleUrls: ['./listar-ejemplares.component.css']
})
export class ListarEjemplaresComponent implements OnInit {

  ejemplares: Ejemplar[];
  
  constructor(private alumnosServices: EjemplaresServices) { }

  ngOnInit() {
    this.alumnosServices.getAlumnos().subscribe(
      (ejemplares: Ejemplar[]) => { this.ejemplares = ejemplares});
  }

}
