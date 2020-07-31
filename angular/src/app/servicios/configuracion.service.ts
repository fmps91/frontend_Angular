import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private _jsonURL = '';
 respuesta:any;
    //return
  constructor(private http: HttpClient,
    //private rol: String,
    //private session:SessionService
    ) {
   /*  this.getJSON().subscribe(data => {
     console.log(data);
    }); */
  }
  public getJSONAdmin(): Observable<any> {
    this._jsonURL='assets/modulosAdmin.json';
    return this.http.get(this._jsonURL);
  }

  public getJSONPaciente(): Observable<any> {
    this._jsonURL='assets/modulosPaciente.json';
    return this.http.get(this._jsonURL);
  }

  public getJSONMedico(): Observable<any> {
    this._jsonURL='assets/modulosMedico.json';
    return this.http.get(this._jsonURL);
  }

  public getIPAddress(): Observable<any> 
  {  
    return this.http.get("http://api.ipify.org/?format=json");  
  } 
}
