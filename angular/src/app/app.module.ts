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
import { AutenticacionComponent } from './componentes/autenticacion/autenticacion.component';


var firebaseConfig = {
  apiKey: "AIzaSyAqNMc7u-LXQP_vUuHDZeidIyWEXyoyZ78",
  authDomain: "beberloja.firebaseapp.com",
  databaseURL: "https://beberloja.firebaseio.com",
  projectId: "beberloja",
  storageBucket: "beberloja.appspot.com",
  messagingSenderId: "410310070682",
  appId: "1:410310070682:web:8ac87ae84acbd45422ea23",
  measurementId: "G-GQE79D72ER"
};
//angularfire2
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from "@angular/fire/firestore";
//import firebase from 'firebase/app';


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
    AutenticacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
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
