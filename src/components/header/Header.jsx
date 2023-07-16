import { Link } from "react-router-dom";
import ThemeButton from "../themebutton/ThemeButton";
import "./header.css";

function Header() {
	return (
		<header className="header">
			<nav className="header__navbar">
				<ul className="header__navbar--menu">
					<li className="header__navbar--item">
						<Link to={"/"} className="header__navbar--link">
							Home
						</Link>
					</li>
					<li className="header__navbar--item">
						<Link to={"/aboutUs"} className="header__navbar--link">
							About Us
						</Link>
					</li>
					<li className="header__navbar--item">
						<Link to={"/features"} className="header__navbar--link">
							Features
						</Link>
					</li>
				</ul>
				<div className="header__navbar--buttons">
					<button>
						<Link to={"/register"} className="header__navbar--link">
							Sign In
						</Link>
					</button>
					<button>
						<Link to={"logIn"} className="header__navbar--link">
							Log In
						</Link>
					</button>
				</div>
			</nav>
			<ThemeButton />
		</header>
	);
}

export default Header;
