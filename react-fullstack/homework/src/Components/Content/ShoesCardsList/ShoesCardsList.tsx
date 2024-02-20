import ShoesCard from '../../ShoesCard/ShoesCard';
import RandomBrand from '../RandomBrand/RandomBrand';
import './ShoesCardsList.css';

const nike = "https://cdn-images.farfetch-contents.com/17/12/84/92/17128492_35782851_1000.jpg"
const adidas = "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ef8b31b8c8504990823dae830130f1ff_9366/GW2044_01_standard.jpg"
const puma = "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/365215/04/sv01/fnd/GLOBAL/fmt/png/Smash-v2-Trainers"
const newBalance = "https://images.beta.azrieli.com/_images_/e/9/9/a/e99a85287c181685c53b226d4da12c50d229f710_cf2ab1ed93de4df796d9cdd8cefd7bf4?width=700&height=947.7366255144033&func=bound&bg_color=auto&trim=5&fit_enlarge=1"
const airJordan = "https://zolpo.co.il/wp-content/uploads/2021/08/80-21.jpg"

function ShoesCardsList() {
  return (
    <div className='shoesCardsList'>
        <ShoesCard brand={'NIKE'} size={42} price={600} image={nike}/>
        <ShoesCard brand={'ADIDAS'} size={40} price={500} image={adidas}/>
        <ShoesCard brand={'PUMA'} size={44} price={300} image={puma}/>
        <ShoesCard brand={'NEW BALANCE'} size={39} price={400} image={newBalance}/>
        <ShoesCard brand={'AIR JORDAN'} size={37} price={650} image={airJordan}/>
        <RandomBrand />
    </div>
    );
}

export default ShoesCardsList;