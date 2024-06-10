import { Injectable } from '@angular/core';
import { Produkt } from './produkt.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Produkt[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  getItems() {
    return this.items;
  }

  addToCart(produkt: Produkt) {
    this.items.push(produkt);
    this.cartItemCount.next(this.items.length);
  }

  getCartItemCount() {
    return this.cartItemCount.asObservable();
  }

  clearCart() {
    this.items = [];
    this.cartItemCount.next(this.items.length);
    return this.items;
  }
}
