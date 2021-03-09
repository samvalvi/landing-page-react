import React, { Fragment } from "react";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Deck from "./deck";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<Fragment>
			<Header />
			<Jumbotron />
			<Deck />
			<Footer />
		</Fragment>
	);
}
