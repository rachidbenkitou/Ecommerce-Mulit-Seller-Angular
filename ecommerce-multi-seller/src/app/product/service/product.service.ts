import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiUrl="http://localhost:8081/product";

  constructor(private http:HttpClient) { }
  getProductsBySubCategory(): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}//subGategory/book`);
  }
}
