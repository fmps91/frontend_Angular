import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../servicios/session.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  /* nav=[
    "login",
    "register",
  ] */

  //nav:any = [];

  //nav:any = [1,"2",3,4];


  constructor(
    public auth: SessionService,
    private router: Router
  ) { }


  ngOnInit() {
    //console.log(this.nav);
    if(this.auth.sessionActual()){

      this.router.navigate(['profeli']);
    }else{

    }


    //this.auth.cerrarSession();
  }


  /* Session(){
    this.nav=[];
    if(this.auth.sessionActual()){
      this.nav=["login","register"];


    }else{
      this.nav=["add","remove","eliminar"];

    }
    //this.auth.sessionActual()


  } */



  /*
  Arreglo

  nav:any = [1,"2",3,4];

  onAdd(){
    this.nav.push("uno");
  }

  onRemoveLast(){
    //this.nav.pop();
  }

  removeFind(){
    //var find=
    this.nav.splice(this.nav.indexOf("2"), 1);
    //this.nav=find;
    console.log(this.nav);
  }
  */

}
