import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="container flex justify-center m-10">
			<ul className="flex justify-center m-5 gap-5">
				<li>
					<Link to="/">Home </Link>
				</li>
				<li>
					<Link to="/alerts">Alerts </Link>
				</li>
				<li>
					<Link to="/sign_in">Login</Link>
				</li>
				<li>
					<Link to="/register">Register </Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
