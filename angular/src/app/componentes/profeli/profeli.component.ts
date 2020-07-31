import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
//import $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-profeli',
  templateUrl: './profeli.component.html',
  styleUrls: ['./profeli.component.css']
})
export class ProfeliComponent implements OnInit, AfterViewInit, AfterContentChecked {
  modulos: Object;
  User: any;
  rol: any;
  message = true;
  ip_adres: any;
  constructor(
    private session: SessionService,
    private router: Router,
    public conf: ConfiguracionService,

  ) { }

  ngOnInit() {
    this.rol = this.session.obtenerRol();
    if (this.session.sessionActual() == false) {
      this.router.navigate(['main']);
    }else{
      if (this.rol == "admin") {
        this.conf.getJSONAdmin().subscribe(res => {
          this.modulos = res;
  
        });
      }else if (this.rol == "paciente") {
        this.conf.getJSONPaciente().subscribe(res => {
          this.modulos = res;
  
        });
      }else if (this.rol == "medico") {
        this.conf.getJSONPaciente().subscribe(res => {
          this.modulos = res;
  
        });
      }
      this.User = this.session.obtenerName()
    }

    
    //console.log(this.session.obtenerName());

    /* this.conf.getIPAddress().subscribe(res => {
      this.ip_adres = res['ip'];

      //console.log("ip "+ res['ip']);
      console.log(res);


    }) */
    //
    

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
   /*  setTimeout(function () {
      environment.init = false;
      this.message = false;
      //$("div").style="display: none;";
      $(".alert").alert('close')

    }, 2000); */
  }

}
