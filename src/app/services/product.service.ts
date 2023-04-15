import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product = {
    name: '',
    price: '',
    imgSrc: '',
  };
  products: Product[] = [
    {
      name: '빨간 풍선 [Red Balloon]',
      price: '19.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F12%2F14%2Flandscape_red_balloo.2393912c.jpg&w=1366&q=75',
    },
    {
      name: '야인시대 [Rustic Period]',
      price: '9.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F7%2F29%2Flandscape_the_wild_d.b29cedf3.jpg&w=384&q=75',
    },
    {
      name: '오 마이 비너스 [Oh My Venus]',
      price: '19.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F10%2F7%2Foh_my_venus_kr.e5cdfd33.jpg&w=1920&q=75',
    },
    {
      name: '치얼업 [Cheer Up]',
      price: '19.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F9%2F30%2Flandscape_cheer_up_k.0e5da47c.jpg&w=384&q=75',
    },
    {
      name: '일지매 [Iljimae]',
      price: '9.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F4%2Flandscape_il_ji_mae_.848d77b0.jpg&w=1366&q=75',
    },
    {
      name: '모범택시 II [Taxi Driver 2]',
      price: '19.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F23%2Flandscape_Taxi_Drive.61f64a85.jpg&w=384&q=75',
    },
    {
      name: '트레이서 [Tracer]',
      price: '19.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F8%2F3%2Flandscape_tracer_sea.6903b125.jpeg&w=384&q=75',
    },
    {
      name: '바람이 분다 [The Wind Blows]',
      price: '14.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F10%2F12%2Flandscape_the_wind_b.b01acd81.jpg&w=384&q=75',
    },
    {
      name: '황금 가면 [Gold Mask]',
      price: '14.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F5%2F21%2Flandscape_gold_mask_.21f5bf6a.jpg&w=384&q=75',
    },
    {
      name: '피아노 [Piano]',
      price: '4.99',
      imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F7%2F27%2Flandscape_piano_kr.1a5d6566.jpg&w=384&q=75',
    },
  ]

  constructor() { }

  getTopProducts() {
    return [
      {
        name: '빨간 풍선 [Red Balloon]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F12%2F14%2Flandscape_red_balloo.2393912c.jpg&w=1366&q=75',
      },
      {
        name: '모범택시 II [Taxi Driver 2]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F23%2Flandscape_Taxi_Drive.61f64a85.jpg&w=384&q=75',
      },
      {
        name: '일지매 [Iljimae]',
        price: '9.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2023%2F2%2F4%2Flandscape_il_ji_mae_.848d77b0.jpg&w=1366&q=75',
      },
      {
        name: '오 마이 비너스 [Oh My Venus]',
        price: '19.99',
        imgSrc: 'https://beta.ondemandkorea.com/_next/image?url=https%3A%2F%2Fd2y2efdi5wgkcl.cloudfront.net%2Ffit-in%2F1600x900%2Fmedia-io%2F2022%2F10%2F7%2Foh_my_venus_kr.e5cdfd33.jpg&w=1920&q=75',
      },
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

  getProducts() {
    return this.products;
  }

  getSortedProducts(direction: string) {
    let sortedProducts = this.products.sort(function(a, b) {
      return Number(a.price) - Number(b.price);
    })

    if (direction === 'L2H') {
      return sortedProducts;
    } else {
      return sortedProducts.reverse();
    }
  }

  getProductByName(name: string) {
    this.products.forEach((item) => {
      if (item.name.toLowerCase().includes(name)) {
        this.product.name = item.name;
        this.product.price = item.price;
        this.product.imgSrc = item.imgSrc;
        return;
      }
    });

    return this.product;
  }
}


