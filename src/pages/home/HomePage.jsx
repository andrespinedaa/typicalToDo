import { useContext } from "react";
import { TbPhotoDown } from "react-icons/tb";

import CallToAction from "../../components/callToAction/CallToAction";
import { ctaFirst } from "../../data/ctainfo";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

function HomePage() {
	const { theme } = useContext(ThemeContext);
	return (
		<main className="homePage">
			<CallToAction info={ctaFirst}>
				<TbPhotoDown
					size={"200px"}
					color={theme === "light" ? "#000" : "#f2f2f2"}
				/>
			</CallToAction>
		</main>
	);
}

export default HomePage;
