import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

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
    ListarLibrosComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,LoginGuardian,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
