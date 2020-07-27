import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AutenticacionService } from "../../servicios/autenticacion.service";
//import { auth, firestore } from 'firebase';



import { AngularFirestore, DocumentData, AngularFirestoreModule, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireAuthModule } from "@angular/fire/auth";
//import { auth } from 'firebase';
import 'firebase/app'
import * as firebase from 'firebase/app'
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';
import 'firebase/auth';
//import firebase = require('firebase');


@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {


  angForm: FormGroup;
  l:AngularFireAuthModule;
  provider;
  provider2;
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
  //constructor() {
  otherProject;
  otherStorage;
  otherFirestore;
  otherAuth;
  db;
  constructor(private fb: FormBuilder,
    private auth: AutenticacionService,
    private authFire: AngularFireAuth
    ) {
      //firebase.initializeApp(firebase);
      //firebase.storage
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      pass: ['',Validators.required]
    });
  }
  ngOnInit() {
    this.otherProject = firebase.initializeApp(this.firebaseConfig, "other");
    //console.log(l);
    this.otherStorage = this.otherProject.storage();
    this.otherFirestore = this.otherProject.firestore();
    this.otherAuth = this.otherProject.auth();
    //google
    this.provider = new firebase.auth.GoogleAuthProvider();
    //facebook
    this.provider2 = new firebase.auth.FacebookAuthProvider();

    //this.db= firebase.firestore();
    console.log(this.otherProject.name);
  }

  //registrar firebase google
  /* login(){
    this.provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });

    this.otherAuth.signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log("res ",result);
      console.log("token ",token);
      console.log("user ",)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });



    console.log(this.angForm.value);

  } */
  //login facebook
  login(){

    this.provider2.setCustomParameters({
      'display': 'popup'
    });
    this.otherAuth.signInWithPopup(this.provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      /* var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user; */

      console.log("res ",result);

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });



    console.log(this.angForm.value);

  }

}
