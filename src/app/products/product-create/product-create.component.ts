import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Category} from '../../models/category';
import {Product} from '../../models/product';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categories: Category[];
  form: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      categoryId: new FormControl('')
    })
    this.getCategories();
  }

  getCategories(){
    this.productService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  onSubmit() {
    let product  = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      categoryId: +this.form.value.categoryId
    };
    this.productService.createProduct(product).subscribe(x => {
      console.log(x);
      this.router.navigate(['/products']);
    }, catchError(err => err));

  }
}

