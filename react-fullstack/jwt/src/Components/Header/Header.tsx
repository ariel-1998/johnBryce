import { useSelector } from 'react-redux';
import './Header.css';

function Header() {
  const user = useSelector((state: any) => state.auth);
  return (
    <div className='header'>
      
    </div>
  );
}

export default Header;
