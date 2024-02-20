import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import apiConfig from "../utils/config";

class ProductService {
    async getAllProducts(): Promise<ProductModel[]> {
        const products = await fetch(`${apiConfig.API_URL}/products`).then(res => res.json());
        return products;
    }

    async getSingleProduct(id: number): Promise<ProductModel> {
        const product = await fetch(`${apiConfig.API_URL}/products/${id}`).then(res => res.json());
        return product;
    }

    async postSingleProduct(product: ProductModel) {
        return await axios.post<ProductModel>(apiConfig.API_URL + `/products`, product);
    }

    async deleteSingleProduct(id: number) {
        return await axios.delete<ProductModel>(apiConfig.API_URL + `/products/${id}`);
    }

    async editProduct(id: number) {
        return await axios.delete<ProductModel>(apiConfig.API_URL + `/products/${id}`);
    }
}

const productService = new ProductService();
export default productService;