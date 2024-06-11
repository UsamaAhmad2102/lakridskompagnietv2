import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() products: any[] = [];
  @Input() currentIndex: number = 0;
  @Output() prevSlide = new EventEmitter<void>();
  @Output() nextSlide = new EventEmitter<void>();

  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.moveCarousel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentIndex']) {
      this.moveCarousel();
    }
  }

  moveCarousel(): void {
    if (this.carouselContainer && this.carouselContainer.nativeElement) {
      const container = this.carouselContainer.nativeElement;
      const offset = -this.currentIndex * container.offsetWidth;
      container.style.transform = `translateX(${offset}px)`;
    }
  }

  onNextSlide(): void {
    this.nextSlide.emit();
  }

  onPrevSlide(): void {
    this.prevSlide.emit();
  }
}
