import './footer.css';

function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>All rights reserved.{date.toString()}</p>
        </footer>
    )
}

export default Footer;
