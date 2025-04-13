import React from "react";
import AppRouter from "./routes/AppRouter";
import { useAuth } from "./features/auth/hooks/useAuth";

function App() {
  const { user, isAuthenticated, login, logout } = useAuth();
  return (
    <AppRouter
      isAuthenticated={isAuthenticated}
      currentUser={user}
      onLogin={login}
      onLogout={logout}
    />
  );
}

export default App;
