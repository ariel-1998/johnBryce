import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="border"></div>
			<p className="string">my website {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
