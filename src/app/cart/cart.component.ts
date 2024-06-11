import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Produkt } from '../produkt.model'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Produkt[] = [];
  acceptTerms: boolean = false; // Add this property
  cartId: string = '06b7911f-17b4-43cb-a227-e926f2e1da49'; // Add this property

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  decreaseQuantity(item: Produkt): void {
    if (item.AntalPaLager > 1) {
      item.AntalPaLager--;
    } else {
      this.cartService.removeFromCart(item);
    }
  }

  increaseQuantity(item: Produkt): void {
    item.AntalPaLager++;
  }

  removeItem(item: Produkt): void {
    this.cartService.removeFromCart(item);
  }

  subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.Pris * item.AntalPaLager), 0);
  }

  checkout(): void {
    console.log('Proceed to checkout');
    // Add your checkout logic here
  }
}
