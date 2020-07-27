import { Component, OnInit, AfterContentInit, OnChanges, DoCheck } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { SessionService } from 'src/app/servicios/session.service';
import { Nota } from 'src/app/interfaces/nota';

import { environment } from "src/environments/environment";
import { Router } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, AfterContentInit, DoCheck {
  //puede ser una Nota de tipo interfaz
  notes:any[]=[];
  //o de tipo any
  //notes:any[]=[];

  //notes:any;


  ancho = environment.ancho;
  size = this.notes.length;
  activa : Boolean;
  /* uno=0
  dos=2;
  residuo=0;
  resto=0;
  resultado=0; */



  constructor(
    private user: UsuarioService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarNotes();
    if ( this.session.sessionActual() == false ) {
      this.router.navigate(['main']);
    }
    this.activa=this.session.sessionActual();
    /* setTimeout(() => {
      this.listarNotes();
    }, 1000); */


  }


  listarNotes(){
    var idUser={idUser:""+this.session.obtenerSession()};

    this.user.findUsers().subscribe(res=>{
      this.notes=res
      console.log(res);
    });

  }

  ngAfterContentInit(){
    (function ($) {
      $(document).ready(function(){
        //console.log("Hello from jQuery!");
      });
    })(jQuery);

    this.size = this.notes.length;
    this.ancho = environment.ancho;

  }

  jqueryL(){
    //console.log(jQuery);
  }



  ngDoCheck(){

    /* if(this.ancho<768){
      console.log("cambio  ",environment.ancho);
      //this.classCard="card-group";
    }else{
      //console.log("cambio  ",environment.ancho);
      //this.classCard="card-group";
    } */
    this.ancho = environment.ancho;
   /*
    this.size = this.notes.length;
    this.resto = this.notes.length / 3;
    this.residuo = this.notes.length % 3;

    console.log('resto ', this.resto);
    console.log('residuo ', this.residuo); */
  }

}
