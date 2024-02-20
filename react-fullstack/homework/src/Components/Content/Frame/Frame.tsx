import ShoesCardsList from '../ShoesCardsList/ShoesCardsList';
import './Frame.css';

function Frame() {
  const date = new Date().getDate();
  const shoesList = [
    {id: "nike", brand: "NIKE"},
    {id: "adidas", brand: "ADIDAS"},
    {id: "puma", brand: "PUMA"}
  ]
  return (
    <div className='frame'>
      {date === 1 && <p className='sale'>SALE 50% OFF!</p>}
      <iframe className='brandImg' src="https://www.youtube.com/embed/oH3tpbBdGaU" title="4 Cool Ways How to Lace Nike Air Force 1 Nike Air Force 1 Lacing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <ShoesCardsList />
      <ul className="shoesList">
        {shoesList.map(shoe => <li className='shoesLi' key={shoe.id}>{shoe.brand}</li>)}
      </ul>
    </div>
    );
}

export default Frame;