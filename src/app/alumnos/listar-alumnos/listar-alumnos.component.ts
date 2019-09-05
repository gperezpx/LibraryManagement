import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/alumno.model';
import { AlumnosServices } from '../alumnos.services';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  alumnos: Alumno[];
  
  constructor(private alumnosServices: AlumnosServices) { }

  ngOnInit() {
    this.alumnosServices.getAlumnos().subscribe(
      (alumnos: Alumno[]) => { this.alumnos = alumnos});
  }

}
