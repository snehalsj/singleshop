import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Product,ProductDataService  } from './product-data.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  /* template: `<h2>PRODUCTS</h2>
    <ul class="items">
      <li *ngFor="let product of products | async"
        [class.selected]="isSelected(product)"
        (click)="onSelect(product)">{{ product.productId }}
        <span class="badge">{{ product.ProductId }}</span> {{ product.ProductName }}
      </li>
    </ul>

     <button routerLink="/sidekicks">Go to sidekicks</button>
   `,*/
  providers: [ProductDataService],
})
export class ProductsComponent implements OnInit {
  //productData ;

  products:Observable<Product[]>;

  private selectedId: number;
  
  constructor( 
                private _productDataService: ProductDataService,
                private route: ActivatedRoute,
                private router: Router
   ){}
  ngOnInit() {
       this.products = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['productId'];
        return this._productDataService.getProducts();
      });

      //this.productData =  this._productDataService.getProducts();
      //this.productData = this._productDataService.getProductData1();  

  } 
  
  isSelected(product: Product) { 
    //console.log('In isselected-->'+product.productId);
    return product.productId === this.selectedId; }
  onSelect(product: Product) {
    console.log('selected product productId-->'+ product.productId);
    this.router.navigate(['/product', product.productId]);
  }

}


 