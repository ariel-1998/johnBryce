import { useEffect, useState } from 'react';
import { ProductModel } from '../../../../Models/ProductModel';
import productService from '../../../../services/ProductService';
import Product from '../Product/Product';
import './Products.css';

function Products() {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getAllProducts().then(res => setProducts(res));
    },[]);

    function deleteProduct(product: ProductModel) {
        productService.deleteSingleProduct(product.id).then(() => {
            productService.getAllProducts().then(res => setProducts(res))
        })
    }

  return (
    <div>
        {products?.map(prdct => (
            <Product  product={prdct} key={prdct.id} deleteProd={() => deleteProduct(prdct)} />
        ))}
    </div>
    );
}

export default Products;