import React, { Fragment } from "react";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Deck from "./deck";
import Footer from "./footer";
import PropTypes from "prop-types";

const data = {
	imageUrl: "http://placehold.it/500x325.jpg",
	title: "Card title",
	url: "https://www.lipsum.com/feed/html"
};
//create your first component
export function Home() {
	return (
		<Fragment>
			<Header />
			<Jumbotron />
			<Deck data={data} />
			<Footer />
		</Fragment>
	);
}
