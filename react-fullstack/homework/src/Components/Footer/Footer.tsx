import './Footer.css';

function Footer() {
    const date = new Date().getFullYear();
  return (
    <div className='footer'>
        <span onClick={() => alert("ARIEL KASHANI")}>ALL RIGHTS RESERVED {date}</span>
    </div>
    );
}

export default Footer;