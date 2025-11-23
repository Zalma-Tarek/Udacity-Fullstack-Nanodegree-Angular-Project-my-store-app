import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  userName: string = '';
  totalPrice: number = 0;
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.userName = this._productService.confirmationData.name;
    this.totalPrice = this._productService.confirmationData.total;
  }

}
