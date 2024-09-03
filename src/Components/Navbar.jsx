

// import { Link } from "react-router-dom";

// const Navbar = () => {

//   return (
//     <>
//       <div className="container-fluid position-relative p-0">
//         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
//           <a href="" className="navbar-brand p-0">
//             <h1 className="text-primary"><i className="fas fa-search-dollar me-3"></i>Swastik</h1>
//             {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
//           </a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="fa fa-bars"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto py-0">

//               <Link to="/" className="nav-item nav-link active">Home</Link>
//               <Link to="/about" className="nav-item nav-link">About</Link>
//               <Link to="/services" className="nav-item nav-link">Services</Link>
//               <Link to="/team" className="nav-item nav-link">Our Team</Link>
//               <Link to="/clients" className="nav-item nav-link">Our Clients</Link>
//               <Link to="/blogs" className="nav-item nav-link">Blogs</Link>
//               {/* <div className="nav-item dropdown">
//                 <a href="#" className="nav-link" data-bs-toggle="dropdown">
//                   <span className="dropdown-toggle">Pages</span>
//                 </a>
//                 <div className="dropdown-menu m-0">
//                   <a href="feature.html" className="dropdown-item">Our Features</a>
//                   <a href="team.html" className="dropdown-item">Our team</a>
//                   <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                   <a href="offer.html" className="dropdown-item">Our offer</a>
//                   <a href="FAQ.html" className="dropdown-item">FAQs</a>
//                   <a href="404.html" className="dropdown-item">404 Page</a>
//                 </div>
//               </div> */}
//               <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
//             </div>
//             {/* <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a> */}
//           </div>
//         </nav>


//       </div>
//     </>
//   )
// }

// export default Navbar


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
