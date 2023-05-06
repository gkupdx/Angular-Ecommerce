import { Injectable } from '@angular/core';
import { LoginForm, RegForm, UpdatePassForm } from '../interfaces/Forms';
import { Router } from '@angular/router';

// Firebase imports
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updatePassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  isPasswordMatch: boolean = false;
  isPasswordUpdated: boolean = false;
  isMembershipActive: boolean = true;

  constructor(private router: Router) {}

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
      this.isAuthenticated = true;
      this.router.navigate(['store']);
    })
    .catch((error) => {
      this.isLoading = false;
      this.isAuthenticated = false;
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
      .finally(() => {
        this.isLoading = false;
        this.router.navigate(['store']);
      });
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
    this.isMembershipActive =true;
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
