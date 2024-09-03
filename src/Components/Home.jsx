import About from "./About"
import Blog from "./Blog"
import Curousell from "./Curousel"
import Faqs from "./Faqs"
import Features from "./Features"
import Offer from "./Offer"
import Services from "./Services"
import Team from "./Team"
import Testimonial from "./Testimonial"


const Home = () => {
  return (
    <>

      {/* <!-- Spinner Start --> */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Topbar Start --> */}
      {/* <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-muted small me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
              <a href="tel:+01234567890" className="text-muted small me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
              <a href="mailto:example@gmail.com" className="text-muted small me-0"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a href="#"><small className="me-3 text-dark"><i className="fa fa-user text-primary me-2"></i>Register</small></a>
              <a href="#"><small className="me-3 text-dark"><i className="fa fa-sign-in-alt text-primary me-2"></i>Login</small></a>
              <div className="dropdown">
                <a href="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown"><small><i className="fa fa-home text-primary me-2"></i> My Dashboard</small></a>
                <div className="dropdown-menu rounded">
                  <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2"></i> My Profile</a>
                  <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2"></i> Inbox</a>
                  <a href="#" className="dropdown-item"><i className="fas fa-bell me-2"></i> Notifications</a>
                  <a href="#" className="dropdown-item"><i className="fas fa-cog me-2"></i> Account Settings</a>
                  <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2"></i> Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar & Hero Start --> */}
      {/* <Navbar></Navbar> */}
      {/* <!-- Navbar & Hero End --> */}

      {/* <!-- Carousel Start --> */}
      <Curousell></Curousell>
      {/* <!-- Carousel End --> */}



      {/* <!-- Abvout Start --> */}
      <About></About>
      {/* <!-- About End --> */}

      {/* <!-- Services Start --> */}
      <Services></Services>
      {/* <!-- Services End --> */}

      {/* <!-- Features Start --> */}
      <Features></Features>
      {/* <!-- Features End --> */}


      {/* <!-- Offer Start --> */}
      <Offer></Offer>
      {/* <!-- Offer End --> */}

      {/* <!-- Blog Start --> */}
      <Blog></Blog>
      {/* <!-- Blog End --> */}


      {/* <!-- FAQs Start --> */}

      {/* <!-- FAQs End --> */}

      <Faqs></Faqs>
      {/* <!-- Team Start --> */}
      <Team></Team>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <Testimonial></Testimonial>
      {/* <!-- Testimonial End --> */}
      {/* 
        <!-- Footer Start --> */}
      {/* <Footer></Footer> */}
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}

      {/* <!-- Copyright End --> */}


      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>



    </>
  )
}

export default Home