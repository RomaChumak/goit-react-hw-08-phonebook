import { Link } from "react-router-dom";


export const AuthNav = () => {
  return (
    <div>
      <Link className="nav-link" to="/register">
        Register
      </Link>
      <Link className="nav-link" to="/login">
        Log In
      </Link>
    </div>
  );
};