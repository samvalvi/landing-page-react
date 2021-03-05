import React from "react";
import PropTypes from "prop-types";

function Card(props) {
	return (
		<div className="card">
			<img src={props.data.imageUrl} alt="picture" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.data.title}</h5>
				<p className="text-center m-2">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Sapiente esse necessitatibus neque.
				</p>
			</div>
			<div className="card-footer text-center">
				<a href={props.data.url} className="btn btn-primary">
					Find Out more!
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	data: {
		imageUrl: PropTypes.string,
		title: PropTypes.string,
		url: PropTypes.string
	}
};

export default Card;
