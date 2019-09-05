import { Component, OnInit } from '@angular/core';
import { Prestamo } from 'src/app/prestamo.model';
import { PrestamosServices } from '../prestamos.service';

@Component({
  selector: 'app-listar-prestamos',
  templateUrl: './listar-prestamos.component.html',
  styleUrls: ['./listar-prestamos.component.css']
})
export class ListarPrestamosComponent implements OnInit {

  prestamos: Prestamo[];
  
  constructor(private prestamosServices: PrestamosServices) { }

  ngOnInit() {
    this.prestamosServices.getPrestamos().subscribe(
      (prestamos: Prestamo[]) => { this.prestamos = prestamos});
  }

}

