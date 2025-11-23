import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/Product';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts: ProductModel[] = [];
  name = '';
  address = '';
  card = 0;


  constructor(private _productService: ProductService, private _router: Router) { }

  ngOnInit() {
    this.cartProducts = this._productService.getCartProducts();
  }

  totalPrice(): number { return this._productService.getTotalPrice(); }

  updateQty(product:ProductModel, qty:number): void{ 
    this._productService.addProductToCart(product, qty); 
  }

  removeProduct(product: ProductModel): void{
    this._productService.removeProductFromCart(product);
    this.cartProducts = this._productService.getCartProducts();
    window.alert("Product "+product.name+" is removed");
  }

  checkout(f: NgForm) {
    if(f.valid){
      this._productService.setOrderData(this.name, this.totalPrice());
      this._productService.clearCartData();
      this._router.navigate(['/confirmation']);
    }
}


}
