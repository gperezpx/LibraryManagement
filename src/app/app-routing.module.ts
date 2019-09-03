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

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'alumnos', component: AlumnosComponent, children: [
    {path: 'agregar', component: CrearAlumnoComponent},
    {path: 'eliminar', component: EliminarAlumnoComponent},
    {path: 'mostrar', component: ListarAlumnosComponent}
  ]},
  {path: 'libros', component: DashboardComponent, children: [
    {path: 'agregar', component: CrearLibroComponent},
    {path: 'eliminar', component: EliminarLibroComponent},
    {path: 'mostrar', component: ListarLibrosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
