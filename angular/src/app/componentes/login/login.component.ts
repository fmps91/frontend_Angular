import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';

//import { AutenticacionService } from "../../servicios/autenticacion.service";
import { UsuarioService } from "../../servicios/usuario.service";
import { SessionService } from "../../servicios/session.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  /* loginForm: FormGroup;
  registroForm: FormGroup;
   */
  /*User: Usuario={
    name:'',
    email:'',
    password:''
  };*/

  angForm: FormGroup;

  //constructor() {
  constructor(private fb: FormBuilder,
    private user: UsuarioService,
    private sesion: SessionService
    ) {

    this.angForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });


  }

 /*  createForm() {
    this.angForm = this.fb.group({
      email: [''],
      password: ['']
    });
  } */

  ngOnInit() {
  }

  login(){
    console.log(this.angForm.value.email);
    console.log(this.angForm.value.password);
    this.user.findUser(this.angForm.value);
    //this.user.urlShow();
    //this.user.findUser(this.angForm.value);
    //this.sesion.sessionIniciada(this.angForm.value);

  }


}
