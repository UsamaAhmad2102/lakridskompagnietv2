import { Component } from '@angular/core';
import { ProductService } from 'product.service';


@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent {

  productId: number = 0;
  product: any;
  message: string = '';

  constructor(private productService: ProductService) { }

  getProduct() {
    this.productService.getProductById(this.productId).subscribe(
      product => {
        this.product = product;
        this.message = '';
      },
      error => {
        this.product = null;
        this.message = 'Error fetching product details.';
      }
    );
  }
}
