import { Injectable } from '@angular/core';

export class Product {
  constructor(	public productId:number, 
  				public ProductName: string , 
				public Category: string,
				public ProductDescription: string,
				public Price:number,
				public currency: string,
				public Image: string,
				public Rating: string,
				public Review: number  ) { }
}

let PRODUCTS = [
	new Product(1, 'Ancient Echoes','Books','Very Nice book',110,'Rs.','prod1.jpg','Nice',3),
	new Product(2, 'Lenovo Yoga 3','Books','Looking for the best tablet for your money? Explore Yoga Tab 3 8, boasting a 180° rotatable camera, AnyPen technology & an HD displa',110,'Rs.','prod1.jpg','Very Nice',3),
  new Product(3, 'Hp Printer','Books','HP makes ddf printers for any situation including home and home office, small to large business and enterprise. Find the best printer for your specific needs here.',110,'Rs.','prod1.jpg','Good',3),	
  new Product(4, 'Puma Shoes','Books','Buy puma shoes for men online india. Browse all our latest collection of running shoes, training shoes and sports shoes at very affordable prices',110,'Rs.','prod1.jpg','Fine',3),
	new Product(5, 'Sparks','Books','Very Nice book',110,'Rs.','prod1.jpg','prod1.jpg',3),
	new Product(6, 'One Indian Girl','Books','Very Nice book',110,'Rs.','prod1.jpg','prod1.jpg',3),


];

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductDataService {
  getProducts() { return productsPromise; }

  getProduct(productId: number | string) {
	  console.log('Param is-->'+productId);
    return productsPromise
      .then(products => products.find(product => product.productId === +productId));
  }
}
