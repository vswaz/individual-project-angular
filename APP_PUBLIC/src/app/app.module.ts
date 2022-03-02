import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DetailsPageComponent } from './details-page/details-page.component';

@NgModule({
  declarations: [
    
    HomeListComponent,
    FrameworkComponent,
    HomepageComponent,
    CreateComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'list',
        component: HomeListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'books/:bookid',
        component: DetailsPageComponent
      }
      
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
