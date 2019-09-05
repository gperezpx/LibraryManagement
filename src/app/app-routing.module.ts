import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ListarAlumnosComponent } from './alumnos/listar-alumnos/listar-alumnos.component';
import { EliminarAlumnoComponent } from './alumnos/eliminar-alumno/eliminar-alumno.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';
import { CrearLibroComponent } from './libros/crear-libro/crear-libro.component';
import { EliminarLibroComponent } from './libros/eliminar-libro/eliminar-libro.component';
import { ListarLibrosComponent } from './libros/listar-libros/listar-libros.component';
import { LibrosComponent } from './libros/libros.component';
import { LoginGuardian } from './login/login-guardian.service';
import { EliminarEjemplarComponent } from './ejemplares/eliminar-ejemplar/eliminar-ejemplar.component';
import { CrearEjemplarComponent } from './ejemplares/crear-ejemplar/crear-ejemplar.component';
import { ListarEjemplaresComponent } from './ejemplares/listar-ejemplares/listar-ejemplares.component';
import { EjemplaresComponent } from './ejemplares/ejemplares.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[LoginGuardian]},
  {path: 'alumnos', component: AlumnosComponent, canActivate:[LoginGuardian], children: [
    {path: 'agregar', component: CrearAlumnoComponent},
    {path: 'eliminar', component: EliminarAlumnoComponent},
    {path: 'mostrar', component: ListarAlumnosComponent}
  ]},
  {path: 'libros', component: LibrosComponent, canActivate:[LoginGuardian], children: [
    {path: 'agregar', component: CrearLibroComponent},
    {path: 'eliminar', component: EliminarLibroComponent},
    {path: 'mostrar', component: ListarLibrosComponent}
  ]},
  {path: 'ejemplares', component: EjemplaresComponent, canActivate:[LoginGuardian], children: [
    {path: 'agregar', component: CrearEjemplarComponent},
    {path: 'eliminar', component: EliminarEjemplarComponent},
    {path: 'mostrar', component: ListarEjemplaresComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
