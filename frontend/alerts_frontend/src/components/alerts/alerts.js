import React, { useEffect, useState } from 'react';
import Table from '../table/table'

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3000/alerts")
        .then((response) => response.json())
        .then((data) => {
          setAlerts(data)
        });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return <Table alerts={alerts}/>
}

export default Alerts