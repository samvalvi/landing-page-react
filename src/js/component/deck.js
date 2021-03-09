import React from "react";
import Card from "./card";

const data = {
	imageUrl: "http://placehold.it/500x325.jpg",
	title: "Card title",
	url: "https://www.lipsum.com/feed/html"
};

function Deck() {
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
