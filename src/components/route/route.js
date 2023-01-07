import { Navigate } from "react-router-dom";

export function PublickRoute({ isAuth, to = "/chat", children }) {
  return !isAuth ? children : <Navigate to={to} replace />;
}

export function PrivateRoute({ isAuth, to = "/login", children }) {
  return !!isAuth ? children : <Navigate to={to} replace />;
}
