import { Link } from "react-router-dom";
import "./css/callToAction.css";

function CallToAction({ info, children }) {
	const { title, description, buttonText } = info;
	return (
		<section className="call-to-action">
			<article className="call-to-action__information">
				<hgroup className="call-to-action__information--text">
					<h2>{title}</h2>
					<p>{description}</p>
				</hgroup>
				<button>
					<Link to={"/register"}>{buttonText}</Link>
				</button>
			</article>
			<figure className="call-to-action__image">{children}</figure>
		</section>
	);
}

export default CallToAction;
