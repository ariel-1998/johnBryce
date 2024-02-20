import { Route, Routes } from 'react-router-dom';
import Adidas from '../Content/Adidas/Adidas';
import NewProduct from '../Content/AllProducts/NewProduct/NewProduct';
import Products from '../Content/AllProducts/Products/Products';
import SingleProduct from '../Content/AllProducts/SingleProduct/SingleProduct';
import Frame from '../Content/Frame/Frame';
import Nike from '../Content/Nike/Nike';
import './Unite.css';

function Unite() {
    return (
        <Routes>
            <Route path='/' element={<h1 className='homeTitle'>welcome</h1>}/>
            <Route path='/frame' element={<Frame />} />
            <Route path='/adidas' element={<Adidas />} />
            <Route path='/nike' element={<Nike />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:prodId' element={<SingleProduct />} />
            <Route path='/newproduct' element={<NewProduct />} />
            <Route path='*' element={<h1 className='homeTitle'>404 NOT FOUND</h1>}/>
        </Routes>
    )
}

export default Unite;