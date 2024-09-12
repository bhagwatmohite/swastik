

// const Features = () => {
//   return (
//     <>
//       <div className="container-fluid feature pb-5">
//         <div className="container pb-5">
//           <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
//             <h4 className="text-primary">Our Features</h4>
//             <h1 className="display-5 mb-4">Innovative Solutions for Your Digital Needs</h1>
//             <p className="mb-0">
//               We specialize in connecting businesses, ideas, and technology to create impactful digital solutions. Whether you need a dynamic website, a powerful app, or custom software development, we’re here to make it happen.
//             </p>
//           </div>
//           <div className="row g-4">
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
//               <div className="feature-item p-4">
//                 <div className="feature-icon p-4 mb-4">
//                   <i className="fas fa-laptop-code fa-4x text-primary"></i>
//                 </div>
//                 <h4>Web Development</h4>
//                 <p className="mb-4">
//                   We build responsive and user-friendly websites tailored to your business needs, ensuring a seamless experience for your customers.
//                 </p>
//                 <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
//               <div className="feature-item p-4">
//                 <div className="feature-icon p-4 mb-4">
//                   <i className="fas fa-mobile-alt fa-4x text-primary"></i>
//                 </div>
//                 <h4>App Development</h4>
//                 <p className="mb-4">
//                   Our team develops high-quality mobile applications that offer exceptional performance and a great user experience across all devices.
//                 </p>
//                 <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
//               <div className="feature-item p-4">
//                 <div className="feature-icon p-4 mb-4">
//                   <i className="fas fa-server fa-4x text-primary"></i>
//                 </div>
//                 <h4>Custom Software Development</h4>
//                 <p className="mb-4">
//                   We provide custom software solutions that are scalable, efficient, and tailored to meet your business goals, whether for web or mobile platforms.
//                 </p>
//                 <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
//               <div className="feature-item p-4">
//                 <div className="feature-icon p-4 mb-4">
//                   <i className="fas fa-chart-bar fa-4x text-primary"></i>
//                 </div>
//                 <h4>Digital Marketing</h4>
//                 <p className="mb-4">
//                   Our digital marketing services help you reach a wider audience, enhance your brand visibility, and drive more conversions with effective strategies.
//                 </p>
//                 <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { Link } from "react-router-dom";

// export default Features;




const Features = () => {
  const featuresData = [
    {
      title: 'Web Development',
      description: 'We build responsive and user-friendly websites tailored to your business needs, ensuring a seamless experience for your customers.',
      icon: 'fas fa-laptop-code',
      link: '#',
      delay: '0.2s'
    },
    {
      title: 'App Development',
      description: 'Our team develops high-quality mobile applications that offer exceptional performance and a great user experience across all devices.',
      icon: 'fas fa-mobile-alt',
      link: '#',
      delay: '0.4s'
    },
    {
      title: 'Custom Software Development',
      description: 'We provide custom software solutions that are scalable, efficient, and tailored to meet your business goals, whether for web or mobile platforms.',
      icon: 'fas fa-server',
      link: '#',
      delay: '0.6s'
    },
    {
      title: 'Digital Marketing',
      description: 'Our digital marketing services help you reach a wider audience, enhance your brand visibility, and drive more conversions with effective strategies.',
      icon: 'fas fa-chart-bar',
      link: '#',
      delay: '0.8s'
    }
  ];

  return (
    <div className="container-fluid feature pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-5 mb-4">Innovative Solutions for Your Digital Needs</h1>
          <p className="mb-0">
            We specialize in connecting businesses, ideas, and technology to create impactful digital solutions. Whether you need a dynamic website, a powerful app, or custom software development, we’re here to make it happen.
          </p>
        </div>
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={feature.delay} key={index}>
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className={`${feature.icon} fa-4x text-primary`}></i>
                </div>
                <h4>{feature.title}</h4>
                <p className="mb-4">
                  {feature.description}
                </p>
                <Link className="btn btn-primary rounded-pill py-2 px-4" to='/enquiry'>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
