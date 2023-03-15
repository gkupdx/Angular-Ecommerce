import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getTopProducts() {
    return [
      {
        name: '빨간 풍선 [Red Balloon]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F12%2F14%2Flandscape_red_balloo.2393912c.jpg&w=1366&q=75',
      },
      {
        name: '일지매 [Iljimae]',
        price: '9.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F4%2Flandscape_il_ji_mae_.848d77b0.jpg&w=1366&q=75',
      },
      {
        name: '야인시대 [Rustic Period]',
        price: '14.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F7%2F29%2Flandscape_the_wild_d.b29cedf3.jpg&w=384&q=75',
      },
      {
        name: '오 마이 비너스 [Oh My Venus]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F10%2F7%2Foh_my_venus_kr.e5cdfd33.jpg&w=1920&q=75',
      }
    ];
  }

  getNewRelease() {
    return {
        name: '비밀의 여자 [Woman in a Veil]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F3%2F14%2Flandscape_woman_in_a.627c5410.jpg&w=384&q=75',
        premiere: '03/14/2023',
    }
  }
}


