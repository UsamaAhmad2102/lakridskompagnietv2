import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Produkt } from '../produkt.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Produkt[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
    window.alert('Kurven er tømt!');
  }
}
