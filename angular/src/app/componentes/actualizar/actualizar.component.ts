import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/servicios/session.service';
import { Router, ActivatedRoute, RoutesRecognized, NavigationEnd, ChildActivationEnd } from '@angular/router';
import { NotaService } from 'src/app/servicios/nota.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//selector: 'app-actualizar',
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  angForm: FormGroup;
  customerData: any;

  notes:any[]=[];

  data:any={
    nombre:"",
    texto:"",
    id:""
    };

  constructor(
    private session: SessionService,
    private router: Router,
    private note: NotaService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.angForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId:['', Validators.required]
    });
  }
  private routeData;
  ngOnInit() {


    this.route.data.subscribe((res) => {
      console.log("consume "+res['firstName'])
      this.customerData = res;

      this.angForm = this.fb.group({
        firstName: [this.customerData['firstName'], Validators.required],
        lastName: [this.customerData['lastName'], Validators.required],
        emailId: [this.customerData['emailId'], Validators.required],
      });
      //console.log('res   ', res);

    },
      error => {
        console.log('ERROR al cargar los datos del buscar', error);
      });

  }

  actualizareNote() {

    this.data.nombre = this.angForm.value.nombre;
    this.data.texto = this.angForm.value.texto;
    this.data.id = this.customerData['id'];
    //console.log(this.data);
    this.note.UpdateNote(this.data);
  }

  borrar() {
    this.angForm = this.fb.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      emailId: [, Validators.required],
    });
  }






}
