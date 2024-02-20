import { useForm } from 'react-hook-form';
import { ProductModel } from '../../../../Models/ProductModel';
import productService from '../../../../services/ProductService';
import './NewProduct.css';

function NewProduct() {
    const { register, reset, handleSubmit, formState } = useForm<ProductModel>();

    function newProd(product: ProductModel) {
        productService.postSingleProduct(product);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(newProd)}>
                <label htmlFor="">Product Name:</label>
                <input type="text" {...register("name")} />
                <label htmlFor="">Price:</label>
                <input type="number" {...register("price", { min: 20, required: true })} />
                <label htmlFor="">Stock:</label>
                <input type="number" {...register("stock", { min: 1 })} />
                <button disabled={!formState.isValid}>SEND</button>
                <button type='reset'>RESET</button>
            </form>
        </div>
    );
}

export default NewProduct;