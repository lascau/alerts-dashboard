import React, { useEffect, useState } from "react";
import Table from "../table/table";

const Alerts = () => {
	const [alerts, setAlerts] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		setIsAuthenticated(true);
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
				});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return isAuthenticated ? (
		<Table alerts={alerts} />
	) : (
		<div className="flex justify-center m-10 text-xl">
			Please sign in to view alerts!
		</div>
	);
};

export default Alerts;
