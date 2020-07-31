import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

//componentes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { ProfeliComponent } from './componentes/profeli/profeli.component';
import { MainComponent } from './componentes/main/main.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { PdfComponent } from './componentes/pdf/pdf.component';

//servicios
import { UsuarioService } from "./servicios/usuario.service";
import { SessionService } from "./servicios/session.service";
import { NotaService } from "./servicios/nota.service";
//import { VideoService } from './servicios/video.service';

//implementos de bootstrap
import bootstrap from "bootstrap";

//filtrar o buscar
import { FilterPipe } from './pipes/filter.pipe';

//pdf complemento
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';


import { PacienteComponent } from './componentes/paciente/paciente.component';
import { DoctorComponent } from './componentes/doctor/doctor.component';
import { HistoriaClinicaComponent } from './componentes/historia-clinica/historia-clinica.component';
import { RegistroRecetasComponent } from './componentes/registro-recetas/registro-recetas.component';
import { RegistroExamenesComponent } from './componentes/registro-examenes/registro-examenes.component';
import { GestionUsuariosComponent } from './componentes/gestion-usuarios/gestion-usuarios.component';
import { GestionPacientesComponent } from './componentes/gestion-pacientes/gestion-pacientes.component';
import { GestionMedicosComponent } from './componentes/gestion-medicos/gestion-medicos.component';
import { GestionCitasComponent } from './componentes/gestion-citas/gestion-citas.component';
import { GestionExamanesComponent } from './componentes/gestion-examanes/gestion-examanes.component';
import { GestionEspecialidadesComponent } from './componentes/gestion-especialidades/gestion-especialidades.component';
//import firebase from 'firebase/app';


import {ActualizarPacienteComponent} from './componentes/actualizar_paciente/actualizar_paciente.component';
import {CrearPacienteComponent} from './componentes/crear_paciente/crear_paciente.component';
import {BuscarPacienteComponent} from './componentes/buscar_paciente/buscar_paciente.component';


import {ActualizarMedicoComponent} from './componentes/actualizar_medico/actualizar_medico.component';
import {CrearMedicoComponent} from './componentes/crear_medico/crear_medico.component';
import {BuscarMedicoComponent} from './componentes/buscar_medico/buscar_medico.component';
import { RegistrarCitaComponent } from './componentes/registrar-cita/registrar-cita.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ListarComponent,
    ActualizarComponent,
    BuscarComponent,
    SliderComponent,
    ProfeliComponent,
    MainComponent,
    CrearComponent,
    FilterPipe,
    PerfilComponent,
    PdfComponent,
    PacienteComponent,
    DoctorComponent,
    HistoriaClinicaComponent,
    RegistroRecetasComponent,
    RegistroExamenesComponent,
    GestionUsuariosComponent,
    GestionPacientesComponent,
    GestionMedicosComponent,
    GestionCitasComponent,
    GestionExamanesComponent,
    GestionEspecialidadesComponent,


    ActualizarPacienteComponent,
    CrearPacienteComponent,
    BuscarPacienteComponent,

    ActualizarMedicoComponent,
CrearMedicoComponent,
BuscarMedicoComponent,
RegistrarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    
  ],
  providers: [
    FormBuilder,
    Validators,
    UsuarioService,
    SessionService,
    NotaService,
    //VideoService
    //AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
