import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes para importar
import { BuscarComponent } from "./componentes/buscar/buscar.component";
import { ListarComponent } from "./componentes/listar/listar.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegisterComponent } from "./componentes/register/register.component";
import { ProfeliComponent  } from "./componentes/profeli/profeli.component";
import { MainComponent } from "./componentes/main/main.component";
import { CrearComponent } from './componentes/crear/crear.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

import { ActualizarComponent } from './componentes/actualizar/actualizar.component';



import { GestionUsuariosComponent } from './componentes/gestion-usuarios/gestion-usuarios.component';


import { GestionPacientesComponent } from './componentes/gestion-pacientes/gestion-pacientes.component';

import { HistoriaClinicaComponent} from './componentes/historia-clinica/historia-clinica.component';



const routes: Routes = [
  {path:'',redirectTo:'/main',pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profeli', component:ProfeliComponent},
  {path:'perfil/:id', component:PerfilComponent},
  {path:'main', component:MainComponent},
  //{path:'listar_usuario', component:ListarComponent},
  
  //{path:'fire', component:AutenticacionComponent},
  {path:'actualizar_usuario/:id', component:ActualizarComponent},


  //gestion de usuarios
  {path:'usuarios', component:GestionUsuariosComponent},
  {path:'buscar_usuario', component:BuscarComponent},
  {path:'crear_usuario', component:CrearComponent},

  //gestion de usuarios
  {path:'historia_clinica', component:HistoriaClinicaComponent},
  {path:'buscar_usuario', component:BuscarComponent},
  {path:'crear_usuario', component:CrearComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent];
