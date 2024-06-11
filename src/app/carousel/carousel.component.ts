import { Component, OnInit } from '@angular/core';
import { ProduktService } from '../produkt.service'; // Adjust the path as needed
import { Produkt } from '../produkt.model'; // Adjust the path as needed

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  products: Produkt[] = [];
  currentIndex: number = 0;
  interval: any;

  constructor(private productService: ProduktService) {}

  ngOnInit(): void {
    this.productService.getProdukter().subscribe((data: Produkt[]) => {
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
