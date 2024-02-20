import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Content from './Content/Content';
import './Layout.css';

function Layout() {
  return (
    <div className='layout'>
        <Header />
        <Content />
        <Menu />
    </div>
  );
}

export default Layout;
