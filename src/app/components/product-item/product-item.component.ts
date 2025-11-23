import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models/Product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addToCartClicked = new EventEmitter<ProductModel>();

  constructor(private _router: Router, private _productService: ProductService) { }

  ngOnInit() {
  }

  viewDetails() { this._router.navigate(['/product', this.product.id]); }

  addToCart(product: ProductModel){
      this.addToCartClicked.emit(product);
  }

  

}
