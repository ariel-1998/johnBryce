import { Link } from 'react-router-dom';
import { ProductModel } from '../../../../Models/ProductModel';
import apiConfig from '../../../../utils/config';
import './Product.css';

interface ProductProps {
    product: ProductModel;
    deleteProd: () => void;
}

function Product({ product, deleteProd }: ProductProps) {
    return (
        <div className='product'>
            <Link to={`/products/${product.id}`}>
                <div className='inProduct'>
                    <h3>{product.name}</h3>
                    <p>PRICE: {product.price}</p>
                    <p>STOCKE: {product.stock}</p>
                </div>
                <div><img src={apiConfig.API_IMG + product.imageName} /></div>
            </Link>
            <div className='edit'>
                <button onClick={deleteProd}>DELETE</button>
            </div>

        </div>
    );
}

export default Product;