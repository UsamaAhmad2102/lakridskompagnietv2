import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HistoryComponent } from './history/history.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component'; // Import CartComponent
import { CarouselComponent } from './carousel/carousel.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'products', component: ShopComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: CartComponent }, // Add CartComponent route
  {path: 'carousel', component: CarouselComponent},
  { path: 'manage', component: ProductManagementComponent },
  { path: 'read-product', component: ReadProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
