// Analytics.js
import React, { useState, useEffect } from "react";

const Analytics = ({ token, urlId }) => {
  const [stats, setStats] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/urls/${urlId}/stats`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          setMessage("Failed to fetch analytics data.");
        }
      } catch (error) {
        setMessage("Error fetching analytics data.");
      }
    };

    fetchStats();
  }, [token, urlId]);

  return (
    <div>
      <h2>Analytics</h2>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Analytics;
