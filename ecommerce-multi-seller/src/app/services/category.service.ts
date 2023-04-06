import { category } from './../common/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL:String;
  constructor(private http:HttpClient) {
    this.baseURL="http://localhost:8084/category"
   }


   getAllCategory(){
    return this.http.get<category>(`${this.baseURL}/all`)
   }

   getByName(nameCategory:string){
    return this.http.get<category>(`${this.baseURL}/find/name/${nameCategory}`)
   }

   addCategory(category:category){
    return this.http.post(`${this.baseURL}/save`,category)
   }

   updateCategory(categoryId:number,category:category){
    return this.http.put(`${this.baseURL}/update/${categoryId}`,category)
   }

   deleteCategoryByName(categoryName:string){
    return this.http.delete(`${this.baseURL}/delete/${categoryName}`)
   }
}
