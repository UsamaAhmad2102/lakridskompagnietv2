import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  message: string = '';

  constructor(private router: Router) { }

  navigateToReadProduct() {
    this.router.navigate(['/read-product']);
  }

  navigateToCreateProduct() {
    this.router.navigate(['/create-product']);
  }

  deleteProduct() {
    this.router.navigate(['/delete-product']);
  }




}