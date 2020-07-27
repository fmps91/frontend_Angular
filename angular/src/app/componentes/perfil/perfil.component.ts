import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  User:any;
  constructor(
    private session: SessionService,

  ) { }

  ngOnInit() {
    this.User=this.session.obtenerUser();
    console.log(this.User);
  }



}
