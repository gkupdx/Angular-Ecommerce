//// interfaces for all things related to products
export interface Product {
    name: string,
    price: string,
    imgSrc: string,
}

export interface CartProduct {
    name: string,
    price: string,
    imgSrc: string,
    count: number,
}

export interface NewRelease {
    name: string,
    price: string,
    imgSrc: string,
    premiere: string,
}