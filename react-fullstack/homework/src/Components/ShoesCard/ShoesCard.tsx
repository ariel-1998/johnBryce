import './ShoesCard.css';

interface ShoesCardProps {
    brand: string;
    size: number;
    price: number;
    image: string;
} 

function ShoesCard({brand, size, price, image}: ShoesCardProps) {
  return (
    <div className='shoeCard card'>
        <span>brand: { brand }</span>
        <span>size: { size }</span>
        <span>price: { price }</span>
        { image && <img className='cardImage' src={ image } />}
    </div>
    );
}

export default ShoesCard;