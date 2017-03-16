import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { LoginComponent }    from './login/login.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { CanDeactivateGuard }       from './can-deactivate-guard.service';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'login',  component: LoginComponent   },

  { path: '**', component: PageNotFoundComponent }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )    
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }