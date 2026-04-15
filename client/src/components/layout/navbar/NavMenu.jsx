import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router";
import { getUserData } from "../../../redux/actions/authActions";

const NavMenu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallary">
                  Gallary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-outline-success" to="/doctors">
              Book A Appointment
            </NavLink>
            {/*login user*/}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {user ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user/profile">
                    My Account
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    LOGIN
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMenu;
