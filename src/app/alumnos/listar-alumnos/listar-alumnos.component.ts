import { Component, OnInit } from '@angular/core';
import { DataServices } from 'src/app/data.services';
import { Alumno } from 'src/app/alumno.model';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  alumnos: Alumno[] = [
    /*{ matricula: '1', nombreAlumno: 'Gerardo', direccion: 'San Miguel Arcangel', telefono: '3335849', email: 'gerardonoeperez@arroba', status: 'activo', password: '123'},
    { matricula: '2', nombreAlumno: 'Pedro2', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},
    { matricula: '3', nombreAlumno: 'Juan2', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},
    { matricula: '4', nombreAlumno: 'Ernesto2', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},
    { matricula: '5', nombreAlumno: 'Alberto', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},
    { matricula: '6', nombreAlumno: 'Maria', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},
    { matricula: '7', nombreAlumno: 'Francisco', direccion: 'San Miguel Arcangel2', telefono: '3335849*2', email: 'gerardonoeperez@arroba-2', status: 'activo-2', password: '123-2'},*/
  ];
  constructor(private dataServices: DataServices) { }

  ngOnInit() {
    this.dataServices.getAlumnos().subscribe(
      (alumnos: Alumno[]) => { this.alumnos = alumnos});
      console.log(this.alumnos);
  }

}
