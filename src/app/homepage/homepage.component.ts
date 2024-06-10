import { Component, ElementRef, ViewChild, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  @ViewChild('carousel') carousel!: ElementRef;

  products = [
    { 
      name: 'Sød lakrids m/espresso', 
      price: '70 DKK', 
      image: '/assets/products/lproduct1.jpg', 
      description: 'SALMIAK LAKRIDS OVERTRUKKET MED MØRK CHOKOLADE',
      url: '/latte' 
    },
    { 
      name: 'Salmiak Lakrids M/mørkchokolade', 
      price: '70 DKK', 
      image: '/assets/products/lproduct2.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'Sød lakrids m/hindbær', 
      price: '70 DKK', 
      image: '/assets/products/lproduct3.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'Sød Lakrids Orginal lakrids   ', 
      price: '70 DKK', 
      image: '/assets/products/lproduct4.jpg', 
      description: 'Sød lakrids er lakridsen i den reneste from',
      url: '/latte' 
    },
    { 
      name: 'Salmiak Lakrids salmiak & lakrids', 
      price: '70 DKK', 
      image: '/assets/products/lproduct5.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'Sød lakrids m/passionfrugt', 
      price: '70 DKK', 
      image: '/assets/products/lproduct6.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
  ];

  
  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.moveCarousel();
    }, 3000); // Juster intervallet efter behov
  }

  moveCarousel() {
    const container = this.carousel.nativeElement;
    const cardWidth = container.querySelector('.product-card').clientWidth;

    this.currentIndex = (this.currentIndex + 1) % this.products.length;
    const offset = -this.currentIndex * cardWidth;

    container.style.transition = 'transform 1s ease';
    container.style.transform = `translateX(${offset}px)`;

    if (this.currentIndex === this.products.length - 1) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = `translateX(0)`;

        const lastCard = container.lastElementChild.cloneNode(true);
        container.insertBefore(lastCard, container.firstElementChild);
        container.removeChild(container.lastElementChild);

        setTimeout(() => {
          container.style.transition = 'transform 1s ease';
          container.style.transform = `translateX(-${cardWidth}px)`;
        }, 100);
      }, 1000);
    }
  }
}



 


