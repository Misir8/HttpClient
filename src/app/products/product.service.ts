import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';
import {environment} from '../../environments/environment';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.apiUrl + 'products');
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(environment.apiUrl + 'products/' + id)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(environment.apiUrl + 'products/categories')
  }
  createProduct(product){
    return this.http.post("https://localhost:5001/api/products", product);
  }
}
