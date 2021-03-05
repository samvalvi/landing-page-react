import React from "react";

function Header() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-4">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Services
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
