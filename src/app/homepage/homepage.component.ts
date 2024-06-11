import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProduktService } from '../produkt.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  products: any[] = [];
  currentIndex = 0;
  interval: any;

  constructor(private productService: ProduktService) {}

  ngOnInit(): void {
    this.productService.getProdukter().subscribe((data: any[]) => {
      this.products = data;
      this.startAutoSlide();
    });
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }
}
