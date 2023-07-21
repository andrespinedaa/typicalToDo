import { TbPhotoDown } from "react-icons/tb";

import CallToAction from "../../components/callToAction/CallToAction";
import { ctaFirst } from "../../data/ctainfo";

function HomePage() {
	return (
		<main className="homePage">
			<CallToAction info={ctaFirst}>
				<TbPhotoDown size={"200px"} />
			</CallToAction>
		</main>
	);
}

export default HomePage;
