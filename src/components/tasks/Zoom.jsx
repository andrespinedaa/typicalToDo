import { useContext } from "react";

import { ThemeContext } from "../../contexts/theme/ThemeContext";
import {
	BsFillArrowDownRightSquareFill,
	BsArrowDownRightSquare,
	BsArrowUpLeftSquare,
	BsFillArrowUpLeftSquareFill,
} from "react-icons/bs";
import "./css/zoom.css";

function Zoom({ zoom, handleZoom }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div>
			{zoom ? (
				<>
					<BsArrowUpLeftSquare
						size={"20px"}
						className={theme === "light" ? "visible" : "invisible"}
						onClick={() => handleZoom()}
					/>
					<BsFillArrowUpLeftSquareFill
						size={"20px"}
						className={theme === "dark" ? "visible" : "invisible"}
						onClick={() => handleZoom()}
					/>
				</>
			) : (
				<>
					<BsArrowDownRightSquare
						size={"20px"}
						className={theme === "light" ? "visible" : "invisible"}
						onClick={() => handleZoom()}
					/>
					<BsFillArrowDownRightSquareFill
						size={"20px"}
						className={theme === "dark" ? "visible" : "invisible"}
						onClick={() => handleZoom()}
					/>
				</>
			)}
		</div>
	);
}

export default Zoom;
