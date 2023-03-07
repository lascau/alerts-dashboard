import "./App.css";
import Alerts from "./components/alerts/alerts";
import SignUp from "./components/sign_up/sign_up";
import Login from "./components/login/login";
import HomePage from "./components/home_page/homePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/alerts" element={<Alerts />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/sign_in" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;
