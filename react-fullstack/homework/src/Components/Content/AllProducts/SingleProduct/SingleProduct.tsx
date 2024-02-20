import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductModel } from '../../../../Models/ProductModel';
import productService from '../../../../services/ProductService';
import apiConfig from '../../../../utils/config';
import './SingleProduct.css';

function SingleProduct() {
    const { prodId } = useParams();
    const [newProd, setNewProd] = useState<ProductModel>();

    useEffect(() =>{
        productService.getSingleProduct(prodId? +prodId: 0)
            .then(obj => setNewProd(obj))
    },[prodId]);

  return (
    <div className='product'>
        <div className='inProduct'>
        <h3>{newProd?.name}</h3>
        <p>PRICE: {newProd?.price}</p>
        <p>STOCKE: {newProd?.stock}</p>
        </div>
        <div><img src={apiConfig.API_IMG + newProd?.imageName} /></div>
        <Link to='/products'>BACK</Link>
    </div>
    );
}

export default SingleProduct;