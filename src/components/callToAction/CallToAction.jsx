import "./css/callToAction.css";

function CallToAction({ info, children }) {
	const { title, description, buttonText } = info;
	return (
		<section className="call-to-action">
			<article className="call-to-action__information">
				<hgroup className="call-to-action__information--text">
					{title}
					{description}
				</hgroup>
				<button>{buttonText}</button>
			</article>
			<figure className="call-to-action__image">{children}</figure>
		</section>
	);
}

export default CallToAction;
