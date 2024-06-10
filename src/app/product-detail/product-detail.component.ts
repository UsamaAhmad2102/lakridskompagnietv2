import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduktService } from '../produkt.service';
import { CartService } from '../cart.service'; // Import CartService
import { Produkt } from '../produkt.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  produkt: Produkt | undefined;

  constructor(
    private route: ActivatedRoute,
    private produktService: ProduktService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.produktService.getProduktById(+productId).subscribe(
        (data: Produkt) => {
          this.produkt = data;
        },
        (error) => {
          console.error('Fejl ved hentning af produkt:', error);
        }
      );
    }
  }

  addToCart(produkt: Produkt) {
    this.cartService.addToCart(produkt);
    window.alert('Dit produkt er blevet tilføjet til kurven!');
  }
}
