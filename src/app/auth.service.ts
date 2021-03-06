import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as Firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Firebase.default.User;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    if (!this.isLoggedIn) {
      this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
        console.log('Logged In');
        this.router.navigateByUrl('/shop');
      });
    } else {
      this.router.navigateByUrl('/shop');
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  loginWithGoogle() {
    const googleProvider = new Firebase.default.auth.GoogleAuthProvider();
    if (!this.isLoggedIn) {
      this.afAuth.signInWithPopup(googleProvider).then((userCred) => {
        console.log('Logged In');
        localStorage.setItem('user', JSON.stringify(userCred.user));
        this.router.navigateByUrl('/shop');
      });
    } else {
      this.router.navigateByUrl('/shop');
    }
  }

  loginWithFacebook() {
    const facebookauthprovider = new Firebase.default.auth.FacebookAuthProvider();
    if (!this.isLoggedIn) {
      this.afAuth.signInWithPopup(facebookauthprovider).then((userCred) => {
        console.log('Logged In');
        localStorage.setItem('user', JSON.stringify(userCred.user));
        this.router.navigateByUrl('/shop');
      });
    } else {
      this.router.navigateByUrl('/shop');
    }
  }

  logout() {
    if (this.isLoggedIn) {
      this.afAuth.signOut().then(() => {
        console.log('Successfully Logged Out');
        localStorage.removeItem('user');
        this.router.navigate(['/']);
      });
    } else {
      console.log('Not signed-in to logout');
    }
  }

  signUpWithEmailAndPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((userData) => {
        console.log('User Registered');
        resolve(userData);
      });
    });

  }
}