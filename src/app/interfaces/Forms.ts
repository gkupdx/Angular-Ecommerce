//// interfaces for all forms
export interface LoginForm {
    email: string,
    password: string,
}

export interface RegForm {
    email: string,
    password: string,
    passConfirm: string,
}

export interface UpdatePassForm {
    currPassword: string,
    newPassword: string,
    passConfirm: string,
}