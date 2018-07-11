import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router,
              private toastr: ToastrService){

  }

  signupUser(email: string, password: string){
      firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(
              response => this.toastr.show("Sign Up Successful..!")
          )
          .catch(
              error => this.toastr.show("Sign Up Failed..!")
          );
  }

  signinUser(email: string, password: string){
      this.toastr.show("Signing you in ...");
      firebase.auth().signInWithEmailAndPassword(email,password)
              .then(
                  response =>{
                      this.toastr.clear();
                      this.router.navigate(['dashboard']);
                      firebase.auth().currentUser.getIdToken()
                          .then(
                              (token: string)=> this.token = token
                          );
                  }
              );
  }

  getToken(){
      firebase.auth().currentUser.getIdToken()
              .then(
                 (token: string)=> this.token = token
              );
      return this.token;
  }

  isAuthenticated(){
      return this.token != null;
  }

  logout(){
      this.toastr.show("We will miss you...!")
      firebase.auth().signOut();
      this.token = null;
      this.router.navigate(['/'])
  }
}
