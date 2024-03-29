import "./Navbar.css";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { Mycontext } from "../../Authcontext/Authcontext";

const Navbar = () => {
  const { user, logOut } = useContext(Mycontext);
  const userImg =
    user?.photoURL ||
    "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
  return (
    <nav>
      {/* <div className="logo">
                <h2 title="logo"><TiWeatherWindyCloudy></TiWeatherWindyCloudy>Alpaago Weather</h2>
            </div> */}

      <div className="nav_links">
        <NavLink to={"/"}>Home</NavLink>
      </div>

      <div className="dynamic">
        {user ? (
          <div className="userBox">
            <div className="nav_links">
              <NavLink to={"/manage_user"}>User Management</NavLink>
            </div>
            <button onClick={() => logOut()}>Logout</button>
          </div>
        ) : (
          <div className="login_btn">
            <Link to={"/login"}>Login</Link>
            <p>/</p>
            <Link to={"/signup"}>Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
