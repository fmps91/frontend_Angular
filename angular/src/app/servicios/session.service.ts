import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  User: any = {
    name: '',
    last:'',
    id: '',
    email: '',

  }
  constructor(
    private router: Router

  ) { }

  sessionIniciada(data: any) {
    console.log("estamos en session iniciada " + data)
    if (data != null) {
      localStorage.setItem("userId", data[0]);
      localStorage.setItem("first_name", data[1]);
      localStorage.setItem("last_name", data[2]);
      localStorage.setItem("rol", data[4]);
      if (data[4] == "admin") {

        this.router.navigate(['/main']);
      } else if (data[4] == "paciente") {

      } else if (data[4] == "medico") {

      }
    }
    /* if(data.email==environment.superuser&&data.password==environment.superpassword){
       localStorage.setItem("userId",data[0]);
       localStorage.setItem("first_name",data[1]);
       localStorage.setItem("last_name",data[2]);
       localStorage.setItem("rol",data[4]);
       this.router.navigate(['/main']);
    }else{

    } */
    //console.log("session "+this.user.findUser({"email":data.email,"password":data.password}));


  }

  sessionActual(): Boolean {
    var session = localStorage.getItem('userId');
    console.log("session actual");
    //console.log(session);
    if (session != null) {

      //console.log("existe session");

      return true;
      //

    } else {
      console.log("no existe session ");

      return false;

    }
  }

  obtenerName(): String {
    var Name = localStorage.getItem("first_name");
    var Last = localStorage.getItem("last_name");
    //var User=Name+''+Last;
    return Name + ' ' + Last;
  }

  obtenerSession(): String {
    return localStorage.getItem('userId');
  }

  obtenerUser(): any {
    this.User.name = localStorage.getItem("first_name");
    this.User.id = localStorage.getItem("userId");
    this.User.last = localStorage.getItem("last_name");
    //this.User.email = localStorage.getItem("last_name");

    //var User=Name+''+Last;
    return this.User;
  }

  /* obtenerPerfil(){
    var perfil;

  }
 */
  cerrarSession() {
    localStorage.clear();
    this.router.navigate(['main']);
  }



}
