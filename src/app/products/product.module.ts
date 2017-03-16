import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

//import { ProductsComponent }    from './products.component';
import { ProductsDetailsComponent }  from './product-details.component';

import { ProductDataService } from './product-data.service';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
  //  ProductsComponent,
    ProductsDetailsComponent
  ],
  providers: [ ProductDataService ]
})
export class ProductModule {}