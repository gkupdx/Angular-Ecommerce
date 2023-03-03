import { Injectable } from '@angular/core';
import { LoginForm, RegForm } from '../interfaces/Forms';

// Firebase imports
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  isPasswordMatch: boolean = false;

  constructor() {}

  login(form: LoginForm) {
    if (this.isLoading) return;
    
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true;
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
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => (this.isLoading = false));
  }
}
