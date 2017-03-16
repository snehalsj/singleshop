import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import {Component, NgZone,ElementRef, AfterViewInit} from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


declare const gapi: any;

@Component({
  selector: 'login',
  templateUrl : 'login.component.html',

 //template: '<button id="googleBtn">Google Sign-In</button>'
})
export class LoginComponent implements AfterViewInit{

  private clientId:string = '849070167601-o8lu4ol1ncc6hrkdk26vhtc0elqf8o8g.apps.googleusercontent.com';
  
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

constructor(ngZone: NgZone, private element: ElementRef,
      private route: ActivatedRoute,
      private router: Router) {
  window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
}
  
 

  public auth2: any;
  public googleInit() {
    console.log('In GoogleInit');
    console.log('Created variable isLogin' );
  localStorage.setItem('isLogin', "true");
    var auth2 = gapi.auth2.getAuthInstance();         
          // Sign the user in, and then retrieve their ID.
           console.log('In GoogleInit 2');
          auth2.signIn().then(function() {
             console.log('In GoogleInit');
            console.log(auth2.currentUser.get().getId());               
          });      
  }
  public attachSignin(element) {
     console.log('In attachSignin');
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {
        console.log('Created variable isLogin' );
         localStorage.setItem('isLogin', "true");
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }
  
  ngAfterViewInit() {
    
    this.googleInit();
    
  
  }
 onSignIn(googleUser) {
   console.log('Created variable isLogin' );
  localStorage.setItem('isLogin', "true");
   console.log('I am in OnSignIn function');
     var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
}
   
}

