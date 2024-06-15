import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Make sure to import Router from @angular/router
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service'; 

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
  cartItemCount: number = 0;
  isOpen = false;
  menuOpen = false;
  

  hover: boolean = false; // Used for hover state management
  constructor(
    private router: Router,
    public authService: AuthService,
    private cartService: CartService
  ) {} // Inject the Router service

  ngOnInit(): void {
    this.cartService.getCartItemCount().subscribe(count => {
      this.cartItemCount = count;
    });
  }

  navigateToProduct(productUrl: string): void {
    this.router.navigateByUrl(productUrl);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
