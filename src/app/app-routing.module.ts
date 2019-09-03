import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ListarAlumnosComponent } from './alumnos/listar-alumnos/listar-alumnos.component';
import { EliminarAlumnoComponent } from './alumnos/eliminar-alumno/eliminar-alumno.component';
import { CrearAlumnoComponent } from './alumnos/crear-alumno/crear-alumno.component';

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
    {path: 'agregar', component: CrearAlumnoComponent},
    {path: 'eliminar', component: EliminarAlumnoComponent},
    {path: 'mostrar', component: ListarAlumnosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
