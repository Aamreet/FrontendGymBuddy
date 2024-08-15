import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <>
      <div className="header-container flex">
        <Link to="/">
          <h1 className="header">WORKOUT BUDDY</h1>
        </Link>
        <div className="flex header-links-container">
          {user && (
            <>
              <p>{user.email}</p>
              <button className="btn logout-btn" onClick={logout}>
                Logout
              </button>
            </>
          )}

          {!user && (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
