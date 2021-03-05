import React from "react";
import Card from "./card";
import PropTypes from "prop-types";

function Deck(props) {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<Card data={data} />
				</div>

				<div className="col-md-3">
					<Card data={data} />
				</div>

				<div className="col-md-3">
					<Card data={data} />
				</div>

				<div className="col-md-3">
					<Card data={data} />
				</div>
			</div>
		</div>
	);
}

export default Deck;
