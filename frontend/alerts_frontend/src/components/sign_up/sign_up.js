import React from "react";

const SignUp = () => {
	const signUp = () => {
		fetch("http://localhost:3000/auth", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: document.getElementById("sign_up_email").value,
				password: document.getElementById("sign_up_password").value,
				password_confirmation:
					document.getElementById("sign_up_password").value,
			}),
		});
	};

	return (
		<form className="">
			<div className="flex justify-center mb-4">Registration page</div>
			<label className="flex gap-3 justify-center flex-row">
				<p>Email</p>
				<input type="text" className="ml-7" id="sign_up_email" />
			</label>
			<label className="flex gap-3 justify-center flex mt-2">
				<p>Password</p>
				<input type="password" id="sign_up_password" />
			</label>
			<div className="flex justify-center">
				<button type="button" onClick={signUp}>
					Sign up
				</button>
			</div>
		</form>
	);
};

export default SignUp;