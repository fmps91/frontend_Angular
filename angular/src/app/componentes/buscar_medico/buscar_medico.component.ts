import { Component, OnInit, AfterContentInit } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
//import { Nota } from 'src/app/interfaces/nota';
declare var jQuery: any;
@Component({
  selector: 'app-buscar-medico',
  templateUrl: './buscar_medico.component.html',
  styleUrls: ['./buscar_medico.component.css']
})
export class BuscarMedicoComponent implements OnInit, AfterContentInit {
  notes: any[] = [];
  filterPost = '';

  nota = {
    _id: "",
    nombre: "",
    texto: ""
  }

  id: any;
  //public route:any;

  constructor(
    private session: SessionService,
    private router: Router,
    private user: UsuarioService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.session.sessionActual() == false) {
      this.router.navigate(['main']);
    } else {
      this.listarNotes();

    }
  }

  ngAfterContentInit() {
    (function ($) {
      // put all that "wl_alert" code here
      //alert("hola");
      //console.log('fff')

    }());

  }

  listarNotes() {
    var idUser = { idUser: "" + this.session.obtenerSession() };

    this.user.findUsers().subscribe(res => {
      this.notes = res
      console.log(res);
    });

  }

  eliminareNote(id){
    console.log('vino a eliminar');
    console.log(id);
    this.user.DeleteUser(id).subscribe(() => {
      this.listarNotes();
    });
  }


  actualizarNote(rowVal) {
    console.log('row  ',rowVal+"   id: "+rowVal['id']);
    var route = this.router.config.find(r => r.path === 'actualizar_usuario/:id');
    route.data = rowVal;

    //console.log('row  ',rowVal['id']);

    this.router.navigateByUrl(`${'actualizar_usuario'}/${rowVal.id}`);
    //this.router.navigateByUrl(`${'actualizar'}/${'1'}`);

  }


  anadirRol(id){
   
    this.user.DeleteUser(id).subscribe(() => {
      this.listarNotes();
    });
  }

  eliminarRol(id){
   
    this.user.DeleteUser(id).subscribe(() => {
      this.listarNotes();
    });
  }

  actualizarRol(id){
   
    this.user.DeleteUser(id).subscribe(() => {
      this.listarNotes();
    });
  }


}

// Basic example
