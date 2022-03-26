import React from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, seIsAuthenticated] = React.useState(false);

  const login = (email, password, callback) => {
    // Do something to login

    seIsAuthenticated(true);

    // Simulate a delay
    setTimeout(() => {
      callback();
    }, 500);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
