import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HistoriaService } from 'src/app/servicios/historia.service';

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
    private historia: HistoriaService
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
    this.historia.urlShow();
    console.log(this.angForm.value)
    this.historia.saveHistoria(this.angForm.value);
    //this.user.saveUser(this.angForm.value);
  }

  valueChange(event){
    console.log("selected value",event.target.value);
    //this.selected = event.target.value;
  }
}
