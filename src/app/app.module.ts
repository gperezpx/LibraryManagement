import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EliminarAlumnoComponent } from './alumnos/eliminar-alumno/eliminar-alumno.component';
import { ListarAlumnosComponent } from './alumnos/listar-alumnos/listar-alumnos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { LibrosComponent } from './libros/libros.component';
import { CrearLibroComponent } from './libros/crear-libro/crear-libro.component';
import { EliminarLibroComponent } from './libros/eliminar-libro/eliminar-libro.component';
import { ListarLibrosComponent } from './libros/listar-libros/listar-libros.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CrearAlumnoComponent,
    EliminarAlumnoComponent,
    ListarAlumnosComponent,
    AlumnosComponent,
    LibrosComponent,
    CrearLibroComponent,
    EliminarLibroComponent,
    ListarLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
