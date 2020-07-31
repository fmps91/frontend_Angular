import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotaService } from 'src/app/servicios/nota.service';
import { Nota } from "../../interfaces/nota";
import { SessionService } from 'src/app/servicios/session.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear_medico.component.html',
  styleUrls: ['./crear_medico.component.css']
})
export class CrearMedicoComponent implements OnInit,AfterViewInit {
  stud = [
    {
      name:"paciente"
    },
    {
      name:"doctor"
    }
  ];
  angForm: FormGroup;
  save: Nota = {
    nombre: "",
    texto: "",
    idUser: ""
  }

  message = false;

  constructor(
    private fb: FormBuilder,
    private note: NotaService,
    private session: SessionService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      rol: ['',Validators.required]
    });
  }

  ngOnInit() {
    if (this.session.sessionActual() == false) {
      this.router.navigate(['main']);
    }
  }


  crearUser() {
    this.message = true;
    this.note.urlShow();
    //console.log(this.angForm.value);
   /*  this.save.idUser = this.session.obtenerSession().toString();
    this.save.nombre = this.angForm.value.nombre;
    this.save.texto = this.angForm.value.texto; */

    //console.log(this.save);
    //var l=JSON.stringify(this.save);
    //var l = this.save;
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
