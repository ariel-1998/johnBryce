import './Header.css';

function Header() {
    let date = new Date().getFullYear()
    return (
      <header>
        <h1>WELLCOME TO REACT {date}</h1>
      </header>
    );
  }

export default Header;
