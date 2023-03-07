import { Injectable } from '@angular/core';
import { LoginForm, RegForm } from '../interfaces/Forms';
import { Router } from '@angular/router';

// Firebase imports
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  isPasswordMatch: boolean = false;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    if (this.isLoading) return;
    
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true;
      this.router.navigate(['store']);
    })
    .catch((error) => {
      this.isAuthenticated = false;
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => (this.isLoading = false))
  }

  register(form: RegForm) {
    if (form.password !== form.passConfirm) {
      this.isPasswordMatch = false;
      return;
    }

    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        const user = userCredential.user;
        this.router.navigate(['store']);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['']);
    })
    .catch((error) => {
      console.log("Logout failed. Please try again.");
    })
  }
}
