import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { FooterComponent } from './footer/footer.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactComponent,
    ShopComponent,
    FooterComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    GoogleMapsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
