import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Usuario } from "../interfaces/usuario";
import { SessionService } from "../servicios/session.service";

import { Router } from '@angular/router';

import { Session } from '../interfaces/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  url: string = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  }

  login: any

  constructor(
    private http: HttpClient,
    private router: Router,
    //private login: Session,
    private session: SessionService
  ) {

    this.url = `${environment.base}`;
  }

  public getIPAddress() {
    return this.http.get("http://api.ipify.org/?format=json");
  }

  urlShow() {
    console.log('url: ', this.url);
  }

  saveUser(usuario: any) {
    //console.log("al guardar: "+usuario);
    var user = {
      firstName: usuario['firstName'],
      lastName: usuario['lastName'],
      emailId: usuario['emailId'],
      password: usuario['password']
    }

    //rol: usuario['rol']

    console.log("viene user")
    console.log(user);
    var rol = {
      nombre: usuario['nombre'],
      id_usuario: ""
    }
    this.http.post<any>(this.url + 'users', user, this.httpOptions).subscribe(storeUser => {
      //console.log("usuario registrado");
      //console.log(storeUser);
      rol.id_usuario = storeUser['id'];
      this.http.post<any>(this.url + '/roles', rol, this.httpOptions).subscribe(rols => {
        //console.log("usuario registrado");
        console.log(rols);


      });

    });

  }

  findUser(usuario: any) {
    //var data:any;

    //var data=JSON.stringify({email:"admin@sgd.com",password:"admin"});
    this.http.post<any>(this.url + 'users/1/login/session',
      usuario
    ).subscribe(storeUser => {
      console.log("wellcome");

      console.log(storeUser);
      //this.login=storeUser;
      this.session.sessionIniciada(storeUser);
      this.router.navigate(['/main']);
      /*  this.login.last_name=storeUser[2];
       this.login.password=storeUser[3];
       this.login.email=storeUser[4];
       this.login.rol=storeUser[5]; */


      //this.session.sessionIniciada(storeUser);

      //this.router.navigate(['/main']);

    })

    /*  if(this.login==null){
       console.log("no existe este usuario")
     }else{
       //console.log()
 
     } */
    /*  const httpParams = new HttpParams()
       .set('email', "admin@sgd.com")
       .set('password', "admin");
 
 
     const httpHeaders = new HttpHeaders()
       .set('Accept', 'application/json');
 
     console.log("user " + usuario);
 
     this.http.get<any>(this.url + 'users/1/login/session', {
       headers: httpHeaders,
       params: httpParams,
       responseType: 'json'
 
     }).subscribe(storeUser => {
       console.log("wellcome");
 
       console.log(storeUser);
       //this.session.sessionIniciada(storeUser);
 
       //this.router.navigate(['/main']);
 
     }); */
  }

  findUsers(): Observable<any> {
    //console.log(note);
    //this.urlShow();
    return this.http.get<any>(this.url + 'users');
  }

  UpdateUser(note: any) {
    //console.log('notaUpdate  ', note);
    //console.log('url  ' + this.url);
    /* var user = {
      firstName: note['firstName'],
      lastName: note['lastName'],
      emailId: note['emailId'],
    } */

    //console.log("note: "+note['firstName']);
    this.http.put<any>(this.url + 'users/' + localStorage.getItem("userId"), note, this.httpOptions).subscribe(updateNote => {
      console.log('updateNote   ', updateNote);
    });
  }

  DeleteUser(note: any): Observable<any> {
    console.log('idssss:    ', note);
    let id = { '_id': note };


    return this.http.delete<any>(this.url + 'users/' + localStorage.getItem("userId"), this.httpOptions);

  }

}
