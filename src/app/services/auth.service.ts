import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces/Forms';

// Firebase imports
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;

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
}
