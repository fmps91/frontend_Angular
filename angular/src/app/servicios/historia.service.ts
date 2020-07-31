import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

import { Router } from '@angular/router';

import { Session } from '../interfaces/session';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {


  url: string = "";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  }

  login: any

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    this.url = `${environment.base}`;
  }



  urlShow() {
    console.log('url: ', this.url);
  }

  saveHistoria(usuario: any) {


    this.http.post<any>(this.url + 'historia', usuario, this.httpOptions).subscribe(storeUser => {
      //console.log("usuario registrado");
      console.log(storeUser);


    });

  }

  findUsers(): Observable<any> {
    //console.log(note);
    //this.urlShow();
    return this.http.get<any>(this.url + 'historia');
  }

}
