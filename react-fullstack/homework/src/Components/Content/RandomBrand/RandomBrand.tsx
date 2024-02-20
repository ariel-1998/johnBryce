import { useEffect, useState } from 'react';
import './RandomBrand.css';

function RandomBrand() {
const brands = ["NIKE", "ADIDAS", "AIR JORDAN", "PUMA", "NEW BALANCE"];
    const [brand, setBrand] = useState(brands[Math.floor(Math.random() * brands.length)]);

    useEffect(() => {
        setInterval(() => {
            let randomBrand = brands[Math.floor(Math.random() * brands.length)]
            setBrand(randomBrand);
            console.log(randomBrand)
        },1000)
    },[])

  return (
    <div>
        <span className='randomBrand'>{brand}</span>
    </div>
    );
}

export default RandomBrand;