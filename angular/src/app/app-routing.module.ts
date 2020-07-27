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

import { AutenticacionComponent } from "./componentes/autenticacion/autenticacion.component";
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';

const routes: Routes = [
  {path:'',redirectTo:'/main',pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profeli', component:ProfeliComponent},
  {path:'perfil/:id', component:PerfilComponent},
  {path:'main', component:MainComponent},
  {path:'listar', component:ListarComponent},
  {path:'buscar', component:BuscarComponent},
  {path:'crear', component:CrearComponent},
  {path:'fire', component:AutenticacionComponent},
  {path:'actualizar/:id', component:ActualizarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent];
