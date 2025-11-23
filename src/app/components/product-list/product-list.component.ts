import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(p =>{
      for (let index = 0; index < p.length; index++) {
        const post = p[index];
        post["quantity"] = 1;
      }
      this.products = p;
    }
       );
  }

  addToCart(product: ProductModel): void { 
      this._productService.addProductToCart(product, product.quantity);
      window.alert("Added To Cart");

}

}
