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
    newPassword: string,
    passConfirm: string,
}

export interface PaymentForm {
    cardNum: string,
    expDate: string,
    cvv: string,
}