import { Injectable } from '@angular/core';
import { LoginForm, RegForm, UpdatePassForm } from '../interfaces/Forms';
import { database } from 'firebase.config';
import { ref, set } from 'firebase/database';
import { Router } from '@angular/router';

interface PwdResetForm {
  email: string,
}

// Firebase imports
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updatePassword, signOut, sendPasswordResetEmail } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoginSuccess: boolean = true;
  isLoading: boolean = false;
  isPasswordMatch: boolean = false;
  isPasswordUpdated: boolean = false;
  isMembershipActive: boolean = true;

  constructor(private router: Router) { }

  getUserEmail(): string | null | undefined {
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user?.email;

    return email;
  }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isLoading = false;
        if (this.isLoginSuccess === false) this.isLoginSuccess = true;
        this.isAuthenticated = true;
        this.router.navigate(['store']);
      })
      .catch((error) => {
        this.isLoading = false;
        this.isLoginSuccess = false;
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  resetPassword(form: PwdResetForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    sendPasswordResetEmail(auth, form.email)
      .then(() => {
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })

  }

  updatePassword(form: UpdatePassForm): boolean {
    if (form.newPassword !== form.passConfirm) {
      this.isPasswordMatch = false;
      return false;
    }

    const auth = getAuth();
    const user = auth.currentUser;
    const newPassword = form.newPassword;

    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          this.isPasswordUpdated = true;
        }).catch((error) => {
          console.log(error);
        })
    }

    return this.isPasswordUpdated;
  }

  register(form: RegForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        // Create a reference to our database
        const reference = ref(database, 'users/');
        // Write to our database using the created reference
        set(reference, {
          email: form.email,
          password: form.password, 
        });

        this.isLoading = false;
        this.isAuthenticated = true;
        this.router.navigate(['store']);
      })
      .catch((error) => {
        this.isLoading = false;
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }

  reauthenticate() {
    const auth = getAuth();
    const user = auth.currentUser;

    user ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  deactivation() {
    this.isMembershipActive = false;
  }

  reactivation() {
    this.isMembershipActive = true;
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
      })
      .catch((error) => {
        console.log("Logout failed. Please try again.");
      }).finally(() => this.router.navigate(['']));
  }
}
