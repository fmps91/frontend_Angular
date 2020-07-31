import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      rol: ['',Validators.required]
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
