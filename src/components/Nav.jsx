import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { GiEgyptianProfile } from "react-icons/gi";
import Profile from "../pages/Profile";

const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <>
      <div className="header-container flex">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <Link to="/">
          <h1 className="header  lapi:text-3xl tab:text-xl">WORKOUT BUDDY</h1>
        </Link>
        <div className="flex header-links-container text-[0.6rem] lapi:text-[1rem] tab:text-[0.9rem] ph1:text-[0.7rem]">
          {user && (
            <>
              {/* <p>{user.email}</p> */}
              <Link to="/profile"><GiEgyptianProfile size={42} color="darkblue"/></Link>
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
