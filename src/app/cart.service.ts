import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { Produkt } from './produkt.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<Produkt[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Produkt): void {
    const currentItems = this.cartItemsSubject.getValue();
    const itemIndex = currentItems.findIndex(item => item.ProduktID === product.ProduktID);

    if (itemIndex > -1) {
      currentItems[itemIndex].AntalPaLager += 1;
    } else {
      currentItems.push({ ...product, AntalPaLager: 1 });
    }

    this.cartItemsSubject.next(currentItems);
  }

  removeFromCart(product: Produkt): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.ProduktID !== product.ProduktID);
    this.cartItemsSubject.next(updatedItems);
  }

  getCartItems(): Produkt[] {
    return this.cartItemsSubject.getValue();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItems$.pipe(
      map((items: Produkt[]) => items.reduce((count: number, item: Produkt) => count + item.AntalPaLager, 0))
    );
  }
}
