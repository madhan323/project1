

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* ===== Header Section ===== */}
      <nav className="navbar">

        <div className="first-row">
          {/* Left Logo */}
          <div className="logo-section">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.NDPE5YmBAwFg3Jav0x8WEAHaHa?pid=Api&P=0&h=180"
              alt="logo"
              className="logo-img"
            />
          </div>

          {/* Center Title */}
          <div className="title-section">
            <h1 className="main-title">वसुधैव कुटुम्बकम्</h1>
            <p className="sub-title">THE UNIVERSAL FAMILY</p>
          </div>

          {/* Profile Icon */}
          <div className="profile-icon">
            👤
          </div>
        </div>
        <nav>
          <div className="navbar-container">
            <div className="nav-pill">

              <NavLink to="/" end className="nav-item">
                Home
              </NavLink>

              <NavLink to="/Dreamer" className="nav-item">
                The Dream
              </NavLink>

              <NavLink to="/ZenAbodes" className="nav-item">
                Zen Abodes
              </NavLink>

              <NavLink to="/GetInvolved" className="nav-item">
                Get Involved
              </NavLink>

              {/* <NavLink to="/Memberlogin" className="nav-item">
          Member Login
        </NavLink> */}

            </div>
          </div>

        </nav>
      </nav>

    </>
  );
}
export default Navbar;