import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'SingleShop';
  constructor() { }

  ngOnInit() {
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    console.log('Deleted variable isLogin' );
    localStorage.setItem('isLogin', "false");

    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

}
