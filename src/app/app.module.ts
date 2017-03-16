import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule }     from './products/product.module';
import { LoginModule }   from './login/login.module';


import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent }   from './not-found.component';
import { LoginComponent }   from './login/login.component';


import { DialogService }           from './dialog.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ProductModule,
    AppRoutingModule,
    LoginModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    PageNotFoundComponent,
    LoginComponent,
    
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

