import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Make sure to import Router from @angular/router
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideDown', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*', // or you can use a specific height e.g., '500px'
        opacity: 1
      })),
      transition('closed <=> open', animate('500ms ease-in-out'))
    ])
  ]

})
export class NavbarComponent {

  isOpen = false;
  

  hover: boolean = false; // Used for hover state management
  constructor(private router: Router) {} // Inject the Router service

  products = [
    { 
      name: 'DIN Kjævsjijd! ', 
      price: '70 DKK', 
      image: '/assets/products/product1.jpg', 
      description: 'SALMIAK LAKRIDS OVERTRUKKET MED MØRK CHOKOLADE',
      url: '/latte' 
    },
    { 
      name: 'får i sjøddad nad?  ', 
      price: '70 DKK', 
      image: '/assets/products/product2.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'jylkatt  ', 
      price: '70 DKK', 
      image: '/assets/products/product3.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'ded e då livæl hondans   ', 
      price: '70 DKK', 
      image: '/assets/products/product4.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'det rabber Â   ', 
      price: '70 DKK', 
      image: '/assets/products/product5.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },
    { 
      name: 'FÔrder   ', 
      price: '70 DKK', 
      image: '/assets/products/product6.jpg', 
      description: 'SALMIAK LAKRIDS',
      url: '/latte' 
    },

    
  ];

  navigateToProduct(productUrl: string): void {
    this.router.navigateByUrl(productUrl);
  }


}
