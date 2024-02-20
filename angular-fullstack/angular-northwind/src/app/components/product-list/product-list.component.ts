import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/models/product.model';
import { ProductsService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products?: ProductModel[];

  constructor( private productServise: ProductsService ) { }

  async ngOnInit() {
    this.products = await this.productServise.getAllProducts()
  }
}
