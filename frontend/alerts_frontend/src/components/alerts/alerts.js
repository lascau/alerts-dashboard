import React, { useEffect, useState } from "react";
import Table from "../table/table";

const Alerts = () => {
	const [alerts, setAlerts] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsAuthenticated(true);
		setIsLoading(true);
		const interval = setInterval(() => {
			fetch("http://localhost:3000/alerts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"access-token": localStorage.getItem("access-token"),
					uid: localStorage.getItem("uid"),
					client: localStorage.getItem("client"),
				},
			})
				.then((response) => response.json())
				.then((data) => {
					if (data["errors"]) {
						clearInterval(interval);
						setIsAuthenticated(false);
					} else {
						setAlerts(data);
					}
					setIsLoading(false);
				});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return isLoading ? (
		<div className="flex justify-center m-10 text-xl">Loading...</div>
	) : isAuthenticated ? (
		<Table alerts={alerts} />
	) : (
		<div className="flex justify-center m-10 text-xl">
			Please sign in to view alerts!
		</div>
	);
};

export default Alerts;
