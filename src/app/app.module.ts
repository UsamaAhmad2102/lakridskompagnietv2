import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CarouselComponent } from './carousel/carousel.component';

// Import PaymentService if not using providedIn: 'root'
import { PaymentService } from './PaymentService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ContactComponent,
    ShopComponent,
    FooterComponent,
    HistoryComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    GoogleMapsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    PaymentService  // If using providedIn: 'root' in the service, this line can be omitted.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
