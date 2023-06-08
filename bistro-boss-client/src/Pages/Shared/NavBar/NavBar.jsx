import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const {user, logOut, loading} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(err => console.log(err));
  }

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        loading || (user ? <li><Link onClick={handleLogOut}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>)
      }
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white
    max-w-screen-xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-50 rounded-box w-52"
          >
            {
                navOptions
            }
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Bistro Boss</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navOptions
          }
        </ul>
      </div>
      <div className="navbar-end">
      {
        user ? <Link className="btn btn-outline text-secondary text-xl"><FaShoppingCart />
          <div className="badge ms-2">+99</div>
        </Link> : <></>
      }
      </div>
    </div>
  );
};

export default NavBar;
