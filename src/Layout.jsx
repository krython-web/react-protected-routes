import React from "react";

import { Link, Outlet } from "react-router-dom";

// Auth Provider
import { AuthProvider } from "./AuthProvider";

const Layout = () => {
  return (
    <AuthProvider>
      <h1>Protected Routes in React using React Router v6</h1>

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/private">Private Page</Link>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </AuthProvider>
  );
};

export default Layout;
