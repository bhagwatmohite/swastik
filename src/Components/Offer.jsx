

// const Offer = () => {
//   return (
//     <>
//       <div className="container-fluid offer-section pb-5">
//         <div className="container pb-5">
//           <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
//             <h4 className="text-primary">Our Offer</h4>
//             <h1 className="display-5 mb-4">Benefits We Offer</h1>
//             <p className="mb-0">
//               We provide comprehensive web and app development services tailored to meet your business needs. Our solutions are designed to help you grow and succeed in the digital landscape.
//             </p>
//           </div>
//           <div className="row g-5 align-items-center">
//             <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
//               <div className="nav nav-pills bg-light rounded p-5">
//                 <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
//                   <h5 className="mb-0">Custom Web Development</h5>
//                 </a>
//                 <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
//                   <h5 className="mb-0">Mobile App Development</h5>
//                 </a>
//                 <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
//                   <h5 className="mb-0">Secure Payment Integration</h5>
//                 </a>
//                 <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
//                   <h5 className="mb-0">Ongoing Maintenance and Support</h5>
//                 </a>
//               </div>
//             </div>
//             <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
//               <div className="tab-content">
//                 <div id="collapseOne" className="tab-pane fade show p-0 active">
//                   <div className="row g-4">
//                     <div className="col-md-7">
//                       <img src="img/offer-1.jpg" className="img-fluid w-100 rounded" alt="" />
//                     </div>
//                     <div className="col-md-5">
//                       <h1 className="display-5 mb-4">Custom Web Development</h1>
//                       <p className="mb-4">
//                         We create tailored websites that align with your brand and business goals, ensuring a seamless user experience and optimal performance.
//                       </p>
//                       <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="collapseTwo" className="tab-pane fade show p-0">
//                   <div className="row g-4">
//                     <div className="col-md-7">

import { Link } from "react-router-dom";

//                       <img src="img/offer-2.jpg" className="img-fluid w-100 rounded" alt="" />
//                     </div>
//                     <div className="col-md-5">
//                       <h1 className="display-5 mb-4">Mobile App Development</h1>
//                       <p className="mb-4">
//                         Our team specializes in building responsive and intuitive mobile apps that engage users and drive business growth across all devices.
//                       </p>
//                       <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="collapseThree" className="tab-pane fade show p-0">
//                   <div className="row g-4">
//                     <div className="col-md-7">
//                       <img src="img/offer-3.jpg" className="img-fluid w-100 rounded" alt="" />
//                     </div>
//                     <div className="col-md-5">
//                       <h1 className="display-5 mb-4">Secure Payment Integration</h1>
//                       <p className="mb-4">
//                         We integrate secure payment gateways into your website or app, ensuring that transactions are smooth, reliable, and secure.
//                       </p>
//                       <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div id="collapseFour" className="tab-pane fade show p-0">
//                   <div className="row g-4">
//                     <div className="col-md-7">
//                       <img src="img/offer-2.jpg" className="img-fluid w-100 rounded" alt="" />
//                     </div>
//                     <div className="col-md-5">
//                       <h1 className="display-5 mb-4">Ongoing Maintenance and Support</h1>
//                       <p className="mb-4">
//                         We provide continuous support and maintenance to ensure that your website or app is always up-to-date and running smoothly.
//                       </p>
//                       <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Offer;




const Offer = () => {
  const offerData = [
    {
      id: 'collapseOne',
      title: 'Custom Web Development',
      description: 'We create tailored websites that align with your brand and business goals, ensuring a seamless user experience and optimal performance.',
      image: 'img/offer-1.jpg',
      delay: '0.2s'
    },
    {
      id: 'collapseTwo',
      title: 'Mobile App Development',
      description: 'Our team specializes in building responsive and intuitive mobile apps that engage users and drive business growth across all devices.',
      image: 'img/offer-2.jpg',
      delay: '0.4s'
    },
    {
      id: 'collapseThree',
      title: 'Secure Payment Integration',
      description: 'We integrate secure payment gateways into your website or app, ensuring that transactions are smooth, reliable, and secure.',
      image: 'img/offer-3.jpg',
      delay: '0.6s'
    },
    {
      id: 'collapseFour',
      title: 'Ongoing Maintenance and Support',
      description: 'We provide continuous support and maintenance to ensure that your website or app is always up-to-date and running smoothly.',
      image: 'img/offer-2.jpg',
      delay: '0.8s'
    }
  ];

  return (
    <div className="container-fluid offer-section pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Offer</h4>
          <h1 className="display-5 mb-4">Benefits We Offer</h1>
          <p className="mb-0">
            We provide comprehensive web and app development services tailored to meet your business needs. Our solutions are designed to help you grow and succeed in the digital landscape.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="nav nav-pills bg-light rounded p-5">
              {offerData.map((offer, index) => (
                <a
                  key={index}
                  className={`accordion-link p-4 ${index === 0 ? 'active' : ''} mb-4`}
                  data-bs-toggle="pill"
                  href={`#${offer.id}`}
                >
                  <h5 className="mb-0">{offer.title}</h5>
                </a>
              ))}
            </div>
          </div>
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="tab-content">
              {offerData.map((offer, index) => (
                <div
                  key={index}
                  id={offer.id}
                  className={`tab-pane fade ${index === 0 ? 'show active' : ''} p-0`}
                >
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img src={offer.image} className="img-fluid w-100 rounded" alt="" />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">{offer.title}</h1>
                      <p className="mb-4">
                        {offer.description}
                      </p>
                      <Link className="btn btn-primary rounded-pill py-2 px-4" to='/enquiry'>Learn More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
