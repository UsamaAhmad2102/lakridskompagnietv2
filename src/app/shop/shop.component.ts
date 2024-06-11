import { Component, OnInit } from '@angular/core';
import { ProduktService } from '../produkt.service';
import { CartService } from '../cart.service';
import { Produkt } from '../produkt.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  produkter: Produkt[] = [];

  constructor(
    private produktService: ProduktService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produktService.getProdukter().subscribe(
      (data: Produkt[]) => {
        this.produkter = data;
        console.log('Produkter:', this.produkter); // Log fetched data
      },
      (error) => {
        console.error('Fejl ved hentning af produkter:', error); // Log errors
      }
    );
  }

  navigateToProductDetail(produktID: number): void {
    this.router.navigate(['/product', produktID]);
  }

  addToCart(produkt: Produkt) {
    this.cartService.addToCart(produkt);
   
  }
}
