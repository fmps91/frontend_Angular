import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  angForm: FormGroup;
  //constructor() {

    stud = [
      {
        name:"Masculino"
      },
      {
        name:"Femenino"
      }
    ];
  constructor(private fb: FormBuilder,
    private user: UsuarioService
    ) {

    this.angForm = this.fb.group({
      nombre:['',Validators.required],
      edad:['',Validators.required],
      sexo: ['',Validators.required],
      ocupacion: ['',Validators.required],
      telefono: ['',Validators.required],
      fecha: ['',Validators.required],
      hora: ['',Validators.required],
      lugar: ['',Validators.required],
      motivo: ['',Validators.required],
    });
  }

  ngOnInit() {
  }

  Register(){
    //console.log(this.angForm.value.email);
    //console.log(this.angForm.value.password);
    //this.user.findUser(this.angForm.value);
    this.user.urlShow();
    console.log(this.angForm.value)
    //this.user.saveUser(this.angForm.value);
  }

  valueChange(event){
    console.log("selected value",event.target.value);
    //this.selected = event.target.value;
  }
}
