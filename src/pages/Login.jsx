import React from "react";

import { useNavigate } from "react-router-dom";

// Auth Provider
import { useAuth } from "../AuthProvider";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const { email, password } = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    login(email, password, () => {
      // Redirect after login
      navigate("/private", { replace: true });
    });
  };

  return (
    <div>
      <p>You must log in to view the private page</p>

      <form onSubmit={handleSubmit}>
        <label>
          Email: <input name="email" type="text" />
        </label>

        <label>
          Password: <input name="password" type="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
