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

 

 
}



 


