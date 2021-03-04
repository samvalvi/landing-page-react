import React from "react";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
import PropTypes from "prop-types";

const obj = {
	imageUrl:
		"https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png",
	title: "Yoda",
	description:
		"Yoda (/ˈjoʊdə/) is a fictional character in the Star Wars universe, first appearing in the 1980 film The Empire Strikes Back. He is a small, green humanoid alien who is powerful with the Force and served as Grandmaster of the Jedi Order."
};
//create your first component
export function Home(props) {
	return (
		<div>
			<Header />
			<Jumbotron />
			<Card props={obj} />
			<Footer />
		</div>
	);
}
