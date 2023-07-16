import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme/ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

import "./themeButton.css";

function ThemeButton() {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleThemeChange = () => {
		setTheme(() => {
			if (theme === "light") {
				return "dark";
			} else {
				return "light";
			}
		});
	};

	return (
		<div className="themeButtons">
			<MdDarkMode
				size={"40px"}
				className={theme === "dark" ? "invisible" : "visible"}
				onClick={() => handleThemeChange()}
			/>
			<MdOutlineDarkMode
				size={"40px"}
				className={theme === "light" ? "invisible" : "visible"}
				onClick={() => handleThemeChange()}
				color="#F2F2F2"
			/>
		</div>
	);
}

export default ThemeButton;
