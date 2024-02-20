import { NavLink } from 'react-router-dom';
import './Shoes.css';

function Shoes() {
  return (
    <div className='shoes'>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/frame">FRAME</NavLink>
        <NavLink to="/nike">NIKE</NavLink>
        <NavLink to="/adidas">ADIDAS</NavLink>
        <NavLink to="/products">PRODUCTS</NavLink>
        <NavLink to="/newproduct">Add Product</NavLink>
    </div>
    );
}

export default Shoes;