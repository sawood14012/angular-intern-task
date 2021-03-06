import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  openTab = 1;
  

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  userEmail = '';
  userPassword = '';

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/shop');
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  tryLogin() {
    this.authService.loginWithEmailAndPassword(this.userEmail, this.userPassword);
  }

  signInWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logout()
  }

  loginWithFacebook(){
    this.authService.loginWithFacebook()
  }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }
}
