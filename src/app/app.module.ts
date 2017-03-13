import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

import { RouterModule }   from '@angular/router';
import { HeaderComponentsComponent } from './header-components/header-components.component';
import { FooterComponentsComponent } from './footer-components/footer-components.component';
import { NavComponentsComponent } from './nav-components/nav-components.component';
import { ArticeComponentsComponent } from './artice-components/artice-components.component';
import { Artice2ComponentsComponent } from './artice2-components/artice2-components.component';
import { ChildComponent } from './child/child.component';
import { CheckModule } from './check/check.module'
// import { ValidateDirective } from './check/validate.directive';

import { AlertModule,ModalModule } from 'ng2-bootstrap';
import {xm } from './app.component';


const appRoutes = [
      {
        path: 'h',
        loadChildren:'app/lazy/lazy.module#LazyModule'
      },{
        path: 'a',
        component: Artice2ComponentsComponent
      }
    ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentsComponent,
    FooterComponentsComponent,
    NavComponentsComponent,
    ArticeComponentsComponent,
    Artice2ComponentsComponent,
    ChildComponent,
    xm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CheckModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  entryComponents:[
    xm
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
