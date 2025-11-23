import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item-detail',
  standalone: false,
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: ProductModel | null | undefined;

  constructor(private _route: ActivatedRoute,
private _productService: ProductService,
private _router: Router) { }

  ngOnInit() {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    this._productService.getProductById(id).subscribe(p =>{
      this.product = p;
    });
  }

  addToCart() { 
    if(this.product && this.product.quantity > 0) { 
      this._productService.addProductToCart(this.product, this.product.quantity);
      window.alert("Added To Cart");
    }
    else{
      window.alert("Please Choose Proper Quantity");
    } 
}


}
