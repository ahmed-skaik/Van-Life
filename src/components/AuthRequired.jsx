import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function AuthRequired() {
  // const authenticate = true;
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();
  // console.log(location);

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "You Must Log in First", from: location.pathname }}
      />
    );
  }
}
