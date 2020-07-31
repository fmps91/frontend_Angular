import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  configuracion:any

  constructor(
    private conf:ConfiguracionService
  ) { }

  ngOnInit() {
    /* this.conf.getJSON().subscribe(res=>{
      this.configuracion=res;
      console.log(this.configuracion);
    }); */
  }

}
