import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated(){
    return this.authenticated = this.authService.isAuthenticated();
   }

   onLogout(){
    this.authService.logout();
  }

  isAdmin(){
    return false;
  }

}
