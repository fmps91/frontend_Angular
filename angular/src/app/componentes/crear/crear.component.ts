import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/servicios/session.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit,AfterViewInit {
  stud = [
    {
      name:"paciente"
    },
    {
      name:"doctor"
    }
  ];
  angForm: FormGroup;
  

  message = false;

  constructor(
    private fb: FormBuilder,
    private user: UsuarioService,
    private session: SessionService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      emailId: ['',Validators.required],
      password: ['',Validators.required],
      nombre: ['',Validators.required]
    });
  }

  ngOnInit() {
    if (this.session.sessionActual() == false) {
      this.router.navigate(['main']);
    }
  }


  crearUser() {
    this.message = true;
    this.user.urlShow();
    //console.log(this.angForm.value);
   /*  this.save.idUser = this.session.obtenerSession().toString();
    this.save.nombre = this.angForm.value.nombre;
    this.save.texto = this.angForm.value.texto; */

    //console.log(this.save);
    //var l=JSON.stringify(this.save);
    //var l = this.save;
    this.user.saveUser(this.angForm.value)
    console.log(this.angForm.value);
    //this.note.saveRol(this.angForm.value);

    //$().alert('close')

  }

  ngAfterViewInit(){

  }


  borrar() {
    this.angForm = this.fb.group({
      nombre: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  valueChange(event){
    console.log("selected value",event.target.value);
    //this.selected = event.target.value;
  }



}
