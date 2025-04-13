import React from "react";
import AppRouter from "./routes/AppRouter";
import { useAuth } from "./features/auth/hooks/useAuth";

function App() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return <AppRouter isAuthenticated={isAuthenticated} currentUser={user} />;
}

export default App;
