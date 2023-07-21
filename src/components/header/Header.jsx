import { useState } from "react";

import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeButton from "../themebutton/ThemeButton";
import "./header.css";

function Header() {
	const [open, setOpen] = useState(false);

	const handleBurgerMenu = () => {
		setOpen(!open);
	};

	return (
		<header className="header">
			<RxHamburgerMenu
				className={"burgerMenu"}
				size={"30px"}
				onClick={() => handleBurgerMenu()}
			/>
			<nav className={"header__navbar " + (open ? "open" : "close")}>
			<ThemeButton />
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
		</header>
	);
}

export default Header;
