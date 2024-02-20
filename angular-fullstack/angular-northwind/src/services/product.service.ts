import { Injectable } from "@angular/core";
import axios from "axios";
import { ProductModel } from "src/models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {
    getAllProducts(): Promise<ProductModel[]> {
        return fetch('http://localhost:3030/api/products').then(res => res.json());
    }

    creatNewProduct(product: ProductModel) {
        return axios.post('http://localhost:3030/api/products', product);
    }
}