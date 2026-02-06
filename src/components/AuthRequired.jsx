import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const authenticate = false;
  if (authenticate) {
    return <Outlet />;
  } else {
    return (
      <Navigate to="/login" state={{ message: "You Must Log in First" }} />
    );
  }
}
