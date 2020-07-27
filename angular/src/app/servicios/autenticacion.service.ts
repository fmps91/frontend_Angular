import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData, AngularFirestoreModule, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from "angularfire2/auth";
//import { auth } from 'firebase';

import 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';
//import { AngularFirestore } from '@angular/fire/firestore';
//import 'firebase/firestore';
//import { Usuario } from "../interfaces/usuario";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 /*  db:AngularFirestore;
  private denuncias: AngularFirestoreCollection<any>; */
  //db:AngularFirestoreCollection<any>
  //public denuncias:  AngularFirestoreCollection<any>;
  constructor(

    private afsAuth: AngularFireAuth,
    //user: Usuario
   ) {

    //this.denuncias = this.db.collection('user');

    //console.log(this.denuncias);
   }
/*
   firebaseConfig = {
    apiKey: "AIzaSyAqNMc7u-LXQP_vUuHDZeidIyWEXyoyZ78",
    authDomain: "beberloja.firebaseapp.com",
    databaseURL: "https://beberloja.firebaseio.com",
    projectId: "beberloja",
    storageBucket: "beberloja.appspot.com",
    messagingSenderId: "410310070682",
    appId: "1:410310070682:web:8ac87ae84acbd45422ea23",
    measurementId: "G-GQE79D72ER"
  };


   save(user){

    this.db.collection("user").add(user);



   } */

   /* loginGoogle(){
    this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).
    then(res => console.log(res));
   }

   loginFacebook(){
    this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).
    then(res => console.log(res));
   } */
}
