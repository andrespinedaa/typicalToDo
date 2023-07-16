import { Link } from "react-router-dom"
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
        <nav className="footer__navbar">
            <ul className="footer__navbar--menu">
                <li className="footer__navbar--item"><Link to={"/"} className="footer__navbar--link">Home</Link></li>
                <li className="footer__navbar--item"><Link to={"/aboutUs"} className="footer__navbar--link">About us</Link></li>
                <li className="footer__navbar--item"><Link to={"/contactUs"} className="footer__navbar--link">contact us</Link></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Footer
