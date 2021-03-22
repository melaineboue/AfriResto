import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImagesPresentationRestaurantComponent } from './components/images-presentation-restaurant/images-presentation-restaurant.component';
import { from } from 'rxjs';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PagePrincipaleComponent } from './components/page-principale/page-principale.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesPresentationRestaurantComponent,
    NavBarComponent,
    PagePrincipaleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
