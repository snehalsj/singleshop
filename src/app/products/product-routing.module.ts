import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }    from './products.component';
import { ProductsDetailsComponent }    from './product-details.component';

// Route Configuration
export const ProductRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product/:productId', component: ProductsDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }

