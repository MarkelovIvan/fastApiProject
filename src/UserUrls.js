// UserUrls.js
import React, { useState, useEffect } from "react";
import CreateUrl from "./CreateUrl";

const UserUrls = ({ token, setSelectedUrlId }) => {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    const response = await fetch("http://localhost:8000/api/me/urls", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      setUrls(data);
    } else {
      console.error("Failed to fetch URLs");
    }
  };

  useEffect(() => {
    fetchUrls();
  }, [token]);

  const handleNewUrl = (newUrl) => {
    setUrls((prevUrls) => [...prevUrls, newUrl]);
  };

  return (
    <div>
      <h2>Your URLs</h2>
      {urls.length > 0 ? (
        <ul>
          {urls.map((url) => (
            <li key={url.short}>
              <span>{url.url}</span> - <span>{url.short}</span> - Redirects: {url.redirects}
              <button onClick={() => setSelectedUrlId(url.short)}>View Analytics</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No URLs found.</p>
      )}
      <CreateUrl token={token} onNewUrl={handleNewUrl} />
    </div>
  );
};

export default UserUrls;