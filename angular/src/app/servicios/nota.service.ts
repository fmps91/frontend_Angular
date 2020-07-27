import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';
import { Nota } from '../interfaces/nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  url: string = '';
  //'Content-Type': 'application/json',
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private session: SessionService
  ) {
    this.url = `${environment.base}`;
  }

  urlShow() {
    console.log('url: ', this.url);
  }

  saveRol(note: any) {
    console.log("al guardar: "+note);
    /* this.http.post<Nota>(this.url + 'saveNote', note, this.httpOptions).subscribe(storeNote => {
      console.log('note registrado');
      //console.log(storeNote);
    }); */
  }

  findRol(): Observable<any> {
    //console.log(note);
    //this.urlShow();
    return this.http.get<any>(this.url + 'roles/'+localStorage.getItem('userId'));
  }

  UpdateNote(note: any) {
    console.log('notaUpdate  ', note);
    console.log('url  ' + this.url + 'findAndUpdateNote');

    this.http.post<Nota>(this.url + 'roles', note, this.httpOptions).subscribe(updateNote => {
      console.log('updateNote   ', updateNote);
    });
  }

  DeleteNote(note: any): Observable<any> {
    console.log('idssss:    ', note);
    let id = { '_id': note };


    return this.http.post<Nota>(this.url+'roles',id,this.httpOptions);

  }

  saveStorage(note: any) {
    localStorage.setItem('noteId', note._id);
    localStorage.setItem('noteNombre', note.nombre);
    localStorage.setItem('noteTexto', note.texto);
  }

  saveStorageId(note: any) {
    //localStorage.setItem("noteId",note);
    this.router.navigate(['actualizar/' + note]);
  }




  /* findNotes(note:any){
    //console.log(note);
    //this.urlShow();
    this.http.post<Nota>(this.url+'findNotes',note,this.httpOptions).subscribe((notas)=>{
      console.log("las notas");
      console.log(notas);
    });
  } */
}
