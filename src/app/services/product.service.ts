import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModel } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private _cartProducts: ProductModel[] = [];
confirmationData = {
    name: '',
    total: 0
  };


constructor(private http: HttpClient) { }

getProducts() : Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>("assets/data.json");
}

getProductById(id: number) : Observable<ProductModel | null> {
  return this.getProducts().pipe(
    map(products => products.find(p => p.id === id) || null)
  );
  }

addProductToCart(product: ProductModel, qty: number): void {
const found = this._cartProducts.find(i => i.id === product.id);
if (found) found.quantity = qty; else this._cartProducts.push(product);
}

removeProductFromCart(product: ProductModel) {
this._cartProducts = this._cartProducts.filter(i => i.id !== product.id);
}


getTotalPrice(): number {
return this._cartProducts.reduce((s, i) => s + i.price * i.quantity, 0);
}

getCartProducts(): ProductModel[]{
  return this._cartProducts;
}

clearCartData(): void{
  this._cartProducts = [];
}

setOrderData(name: string, total: number) {
    this.confirmationData.name = name;
    this.confirmationData.total = total;
  }

}
