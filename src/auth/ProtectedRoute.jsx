import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user }) {
  if (!user) {
    return (
      <div>
        <h1>Protected Route</h1>
        <h2>Not logged in</h2>
        <Navigate to="/login" />
      </div>
    );
  }

  return (
    <div>
      <h1>Protected Route</h1>
    </div>
  );
}

export default ProtectedRoute;
