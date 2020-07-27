import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../servicios/session.service";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {



  nav:any = [];

  constructor(
    public auth: SessionService,
    private router: Router,

  ) { }

  session;

  ngOnInit() {
    //this.mostrar();
    this.Session();
  }


  id:any;

  Session(){
    this.nav=[];
    if(this.auth.sessionActual()){
      //console.log("session: "+this.auth.sessionActual());
      environment.session=true;
      this.session=environment.session;
      //if()
        this.nav=["crear","listar","buscar","Perfil","Cerrar Session"];
        this.id=this.auth.obtenerSession();

    }else{

      environment.session=false;
      this.session=environment.session;

      this.nav=["main","login","register"];
      //this.listar();
    }

  }

  removeId(){
    this.nav.splice(this.nav.indexOf(1), 1)
  }

  mostrar(){

    //this.nav=["login","register"];
    var idx = this.nav.indexOf("login");
    console.log("idx: ",idx);
    var element= this.nav[idx];
    console.log("element: ",element);

  }

  listar(){
    this.nav.forEach(element => {
      console.log("nav ele: ",element);
    });
  }

  CerrarSession(){
    this.auth.cerrarSession();
  }
}
