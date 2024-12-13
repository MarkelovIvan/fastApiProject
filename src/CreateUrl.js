// CreateUrl.js
import React, { useState } from "react";

const CreateUrl = ({ token, onNewUrl }) => {
  const [longUrl, setLongUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      new URL(longUrl);
    } catch {
      setMessage("Invalid URL format. Please enter a valid URL.");
      return;
    }

    const response = await fetch("http://localhost:8000/api/me/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url: longUrl }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage("Shortened URL created successfully!");
      setLongUrl("");
      onNewUrl(data);
    } else {
      const data = await response.json();
      setMessage(data.detail || "Error creating URL.");
    }
  };

  return (
    <div>
      <h2>Create Shortened URL</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Long URL:
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUrl;