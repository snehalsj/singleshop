import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { slideInDownAnimation } from '../animations';
import {Product , ProductDataService  } from './product-data.service';

@Component({
  selector: 'product-details',
 /* template: `ASasASs<div *ngIf="product">
        <h2>Test{{product.productName}}</h2>
        <img src="{{product.productId}}"/>
        <p><strong>Id: </strong>{{product.productId}}</p>
        <p><strong>Name: </strong>{{product.ProductName}}</p>
        <p><strong>Description: </strong>{{product.ProductDescription}}</p>
        <p>
          <button (click)="gotoProducts()">Back</button>
        </p>
    </div>`,*/
 templateUrl : 'product-details.component.html',
  providers: [ProductDataService],
  animations: [ slideInDownAnimation ]
})
export class ProductsDetailsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  
  product: Product;
  constructor( 
                private route: ActivatedRoute,
                private router: Router,
                private _productDataService: ProductDataService                
  ){}
   ngOnInit() {
      console.log('Hi i am here');
      this.route.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => this._productDataService.getProduct(+params['productId']))
      .subscribe((product: Product) => this.product = product);
     
  }

 
gotoProducts() {
    let productId = this.product ? this.product.productId : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/products', { productId: productId, foo: 'foo' }]);
  
  //this.router.navigate(['/products']);
}
}





 