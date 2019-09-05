import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno } from 'src/app/alumno.model';
import { AlumnosServices } from '../alumnos.services';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  alumno: Alumno;
  constructor(private alumnosServices: AlumnosServices) { }

  ngOnInit() {
  }

  guardar(form: NgForm){
    this.alumnosServices.saveAlumno(this.alumno);
  }

}
