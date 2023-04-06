import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product | undefined;
  ngOnInit(): void {
    this.productService.getProductsBySubCategory()
      .subscribe(response => {
        this.products = response;
      });
  }
  constructor(private productService:ProductService) {
  }



}
