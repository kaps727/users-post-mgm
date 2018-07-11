import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAuaGbnk06AMOSi8z8snQExTXHMr8O6HOU",
      authDomain: "userposts-mgm-app.firebaseapp.com"
    });
  }

}