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
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/12/14/landscape_red_balloo.2393912c.jpg',
    },
    {
      name: '야인시대 [Rustic Period]',
      price: '9.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/7/29/landscape_the_wild_d.b29cedf3.jpg',
    },
    {
      name: '오 마이 비너스 [Oh My Venus]',
      price: '19.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/10/7/oh_my_venus_kr.e5cdfd33.jpg',
    },
    {
      name: '치얼업 [Cheer Up]',
      price: '19.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/9/30/landscape_cheer_up_k.0e5da47c.jpg',
    },
    {
      name: '일지매 [Iljimae]',
      price: '9.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2023/2/4/landscape_il_ji_mae_.848d77b0.jpg',
    },
    {
      name: '모범택시 II [Taxi Driver 2]',
      price: '19.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2023/2/23/landscape_Taxi_Drive.61f64a85.jpg',
    },
    {
      name: '트레이서 [Tracer]',
      price: '19.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/8/3/landscape_tracer_sea.6903b125.jpeg',
    },
    {
      name: '바람이 분다 [The Wind Blows]',
      price: '14.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/10/12/landscape_the_wind_b.b01acd81.jpg',
    },
    {
      name: '황금 가면 [Gold Mask]',
      price: '14.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/5/21/landscape_gold_mask_.21f5bf6a.jpg',
    },
    {
      name: '피아노 [Piano]',
      price: '4.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2022/7/27/landscape_piano_kr.1a5d6566.jpg',
    },
  ];

  constructor() { }

  getTopProducts() {
    return [
      {
        name: '빨간 풍선 [Red Balloon]',
        price: '19.99',
        imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/168x238/media-io/2022/12/14/portrait_red_balloon.78f2bdc6.jpg',
      },
      {
        name: '모범택시 II [Taxi Driver 2]',
        price: '19.99',
        imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/168x238/media-io/2023/2/23/portrait_Taxi_Driver.58563f52.jpg',
      },
      {
        name: '일지매 [Iljimae]',
        price: '9.99',
        imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/168x238/media-io/2023/2/4/poster_il_ji_mae_kr.7bf3f2ab.jpg',
      },
      {
        name: '오 마이 비너스 [Oh My Venus]',
        price: '19.99',
        imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/168x238/media-io/2022/10/7/oh_my_venus_poster_k.34dff2e8.jpg',
      },
    ];
  }

  getNewRelease() {
    return {
      name: '비밀의 여자 [Woman in a Veil]',
      price: '19.99',
      imgSrc: 'https://d2y2efdi5wgkcl.cloudfront.net/fit-in/1024x0/filters:format(webp)/media-io/2023/3/14/landscape_woman_in_a.627c5410.jpg',
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


