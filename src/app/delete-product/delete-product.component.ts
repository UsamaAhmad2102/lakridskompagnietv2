import { Component } from '@angular/core';
import { ProductService } from 'product.service';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productId: string = '';
  message: string = '';

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(
      response => {
        this.message = 'Product deleted successfully!';
      },
      error => {
        this.message = 'Error deleting product: ' + error.message;
      }
    );
  }
}
