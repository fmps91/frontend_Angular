import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import { UsuarioService } from 'src/app/servicios/usuario.service';
//import $ from 'jquery';

declare var $: any;
@Component({
  selector: 'app-profeli',
  templateUrl: './profeli.component.html',
  styleUrls: ['./profeli.component.css']
})
export class ProfeliComponent implements OnInit,AfterViewInit,AfterContentChecked {

  User:any;
  message=true;
  ip_adres: any;
  constructor(
    private session: SessionService,
    private router: Router,
    public ip: UsuarioService,

  ) { }

  ngOnInit() {

    if ( this.session.sessionActual() == false ) {
      this.router.navigate(['main']);
    }

    this.User=this.session.obtenerName()
    console.log(this.session.obtenerName());

    this.ip.getIPAddress().subscribe(res=>{
      this.ip_adres=res['ip']
      console.log("ip "+ res['ip']);
      
      
    })

  }

  ngAfterContentChecked(){

  }

  ngAfterViewInit(){
    setTimeout(function(){
      environment.init=false;
      this.message=false;
      //$("div").style="display: none;";
      $(".alert").alert('close')

  },2000);
  }

}
