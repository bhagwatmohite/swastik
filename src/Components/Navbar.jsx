

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary">
              <i className="fas fa-search-dollar me-3"></i>Swastik
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <NavLink
                to="/"
                className="nav-item nav-link"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-item nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Services
              </NavLink>
              <NavLink
                to="/team"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Our Team
              </NavLink>
              <NavLink
                to="/clients"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Our Clients
              </NavLink>
              <NavLink
                to="/blogs"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-item nav-link"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
