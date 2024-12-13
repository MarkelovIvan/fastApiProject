// App.js
import React, { useState } from "react";
import Register from ".//Register";
import Login from ".//Login";
import UserUrls from ".//UserUrls";
import Analytics from ".//Analytics";

const App = () => {
  const [token, setToken] = useState("");
  const [selectedUrlId, setSelectedUrlId] = useState("");

  return (
    <div>
      <h1>URL Shortener</h1>
      {!token ? (
        <>
          <Register />
          <Login setToken={setToken} />
        </>
      ) : (
        <>
          <UserUrls token={token} setSelectedUrlId={setSelectedUrlId} />
          {selectedUrlId && <Analytics token={token} urlId={selectedUrlId} />}
        </>
      )}
    </div>
  );
};

export default App;