import React from "react";

function Jumbotron() {
	return (
		<div className="container mt-5 p-3">
			<div className="jumbotron mb-3 mt-3">
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Aperiam in hic sint repellendus culpa nulla consequuntur
					dolore magni, blanditiis tempora voluptatem, sequi repellat
					rerum deserunt enim illum nemo fugit. Consequatur!
				</p>
				<a className="btn btn-lg btn-primary" role="button">
					Call to action!
				</a>
			</div>
		</div>
	);
}

export default Jumbotron;
