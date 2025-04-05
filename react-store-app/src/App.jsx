import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user] = useState({ id: 1 });

  return (
    <AppRouter
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      user={user}
    />
  );
}

export default App;
