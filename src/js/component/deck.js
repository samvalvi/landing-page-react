import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function Deck(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<Card data={props.data} />
				</div>

				<div className="col-md-3">
					<Card data={props.data} />
				</div>

				<div className="col-md-3">
					<Card data={props.data} />
				</div>

				<div className="col-md-3">
					<Card data={props.data} />
				</div>
			</div>
		</div>
	);
}

Deck.propTypes = {
	data: {
		imageUrl: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string
	}
};

export default Deck;
