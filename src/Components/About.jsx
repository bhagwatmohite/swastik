

// const About = () => {
//   return (
//     <>

import { Link } from "react-router-dom";

//       <div className="container-fluid about py-5">
//         <div className="container py-5">
//           <div className="row g-5 align-items-center">
//             <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
//               <div>
//                 <h4 className="text-primary">About Us</h4>
//                 <h1 className="display-5 mb-4">Meet our company unless miss the opportunity</h1>
//                 <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit temporibus repudiandae ipsa, eaque perspiciatis cumque incidunt tenetur sequi reiciendis.
//                 </p>
//                 <div className="row g-4">
//                   <div className="col-md-6 col-lg-6 col-xl-6">
//                     <div className="d-flex">
//                       <div><i className="fas fa-lightbulb fa-3x text-primary"></i></div>
//                       <div className="ms-4">
//                         <h4>Business Consuluting</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-6 col-lg-6 col-xl-6">
//                     <div className="d-flex">
//                       <div><i className="bi bi-bookmark-heart-fill fa-3x text-primary"></i></div>
//                       <div className="ms-4">
//                         <h4>Year Of Expertise</h4>
//                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-6">
//                     <a href="#" className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">Discover Now</a>
//                   </div>
//                   <div className="col-sm-6">
//                     <div className="d-flex">
//                       <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
//                       <div>
//                         <h4>Call Us</h4>
//                         <p className="mb-0 fs-5" style={{ letterSpacing: '1px' }} >+01234567890</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
//               <div className="bg-primary rounded position-relative overflow-hidden">
//                 <img src="img/about-2.png" className="img-fluid rounded w-100" alt="" />

//                 <div className="" style={{ position: 'absolute', top: '-15px', right: '-15px' }}  >
//                   <img src="img/about-3.png" className="img-fluid" style={{ width: '150px', height: '150px', opacity: '0.7' }} alt="" />
//                 </div>
//                 <div className="" style={{ position: 'absolute', top: '-20px', left: '10px', transform: 'rotate(90deg)' }}>
//                   <img src="img/about-4.png" className="img-fluid" alt="" style={{ width: '100px', height: '150px', opacity: '0.9' }} />
//                 </div>
//                 <div className="rounded-bottom">
//                   <img src="img/about-5.jpg" className="img-fluid rounded-bottom w-100" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About


const About = () => {
  return (
    <>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h4 className="text-primary">About Us</h4>
                <h1 className="display-5 mb-4">
                  Transforming Ideas into Digital Solutions
                </h1>
                <p className="mb-4">
                  We specialize in web and app development, helping businesses
                  bring their ideas to life in the digital world. Our team is
                  dedicated to providing innovative and scalable solutions that
                  meet the unique needs of our clients. With years of experience
                  and a passion for technology, we are committed to delivering
                  exceptional results that drive success.
                </p>
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex">
                      <div>
                        <i className="fas fa-code fa-3x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <h4>Web Development</h4>
                        <p>
                          Crafting responsive, user-friendly websites that
                          enhance your online presence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <div className="d-flex">
                      <div>
                        <i className="fas fa-mobile-alt fa-3x text-primary"></i>
                      </div>
                      <div className="ms-4">
                        <h4>App Development</h4>
                        <p>
                          Building mobile applications that provide seamless
                          experiences across all devices.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Link to='/enquiry' className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0">
                      Discover Now
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex">
                      <i className="fas fa-phone-alt fa-2x text-primary me-4"></i>
                      <div>
                        <h4>Call Us</h4>
                        <p className="mb-0 fs-5" style={{ letterSpacing: '1px' }}>+01234567890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary rounded position-relative overflow-hidden">
                <img src="img/about-2.png" className="img-fluid rounded w-100" alt="Web Development" />
                <div style={{ position: 'absolute', top: '-15px', right: '-15px' }}>
                  <img src="img/about-3.png" className="img-fluid" style={{ width: '150px', height: '150px', opacity: '0.7' }} alt="App Development" />
                </div>
                <div style={{ position: 'absolute', top: '-20px', left: '10px', transform: 'rotate(90deg)' }}>
                  <img src="img/about-4.png" className="img-fluid" alt="Digital Solutions" style={{ width: '100px', height: '150px', opacity: '0.9' }} />
                </div>
                <div className="rounded-bottom">
                  <img src="img/about-5.jpg" className="img-fluid rounded-bottom w-100" alt="Our Team" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
