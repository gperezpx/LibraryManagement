import { Component, OnInit } from '@angular/core';
import { ReservacionesServices } from '../reservation.service';
import { Reservacion } from 'src/app/reservacion.model';

@Component({
  selector: 'app-listar-reservaciones',
  templateUrl: './listar-reservaciones.component.html',
  styleUrls: ['./listar-reservaciones.component.css']
})
export class ListarReservacionesComponent implements OnInit {

  reservaciones: Reservacion[];
  
  constructor(private alumnosServices: ReservacionesServices) { }

  ngOnInit() {
    this.alumnosServices.getReservaciones().subscribe(
      (reservaciones: Reservacion[]) => { this.reservaciones = reservaciones});
  }
}
