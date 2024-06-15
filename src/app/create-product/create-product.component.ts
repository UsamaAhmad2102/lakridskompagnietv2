import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product = {
    Titel: '',
    Beskrivelse: '',
    Pris: 0,
    AntalPaLager: 0,
    Indhold: '',
    ImageUrl: ''
  };
  message: string = '';

  constructor(private productService: ProductService, private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.product).subscribe(
      response => {
        this.message = 'Product created successfully.';
        this.router.navigate(['/products']); // Navigate back to product management
      },
      error => {
        this.message = 'Error creating product.';
      }
    );
  }
}
