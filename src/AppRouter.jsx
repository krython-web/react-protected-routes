import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./Layout";

// Pages
import PublicPage from "./pages/Public";
import LoginPage from "./pages/Login";
import PrivatePage from "./pages/Private";

// Auth Provider
import { useAuth } from "./AuthProvider";

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <PrivatePage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;
