import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
	const logIn = () => {
		fetch("http://localhost:3000/auth/sign_in", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: document.getElementById("login_email").value,
				password: document.getElementById("login_password").value,
			}),
		})
			.then((response) => {
				for (let pair of response.headers) {
					if (
						pair[0] === "access-token" ||
						pair[0] === "client" ||
						pair[0] === "uid"
					) {
						console.log(pair[1]);
						localStorage.setItem(pair[0], pair[1]);
					}
				}
				return response.json();
			})
			.then((data) => {
				if (data.success == false) {
					document.getElementById(
						"error_invalid_credentials"
					).innerHTML = data["errors"][0];
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleSubmit = () => {
		//const navigate = useNavigate();
		// navigate("/alerts");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex justify-center mb-4">Login page</div>
			<label className="flex gap-3 justify-center flex-row">
				<p>Email</p>
				<input type="text" className="ml-7" id="login_email" />
			</label>
			<label className="flex gap-3 justify-center flex mt-2">
				<p>Password</p>
				<input type="password" id="login_password" />
			</label>
			<div className="flex justify-center">
				<button type="button" onClick={logIn}>
					Sign in
				</button>
			</div>
			<div
				className="flex justify-center"
				id="error_invalid_credentials"
			></div>
		</form>
	);
};

export default Login;
