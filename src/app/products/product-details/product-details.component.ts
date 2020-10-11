import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private productService: ProductService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.productService.getProductById(+this.activatedRoute.snapshot.params.id)
      .subscribe(product => this.product = product,
        error => console.log(error))
  }
}
