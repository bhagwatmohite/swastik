

// const Services = () => {
//   return (
//     <>
//       <div className="container-fluid service pb-5">
//         <div className="container pb-5">
//           <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
//             <h4 className="text-primary">Our Services</h4>
//             <h1 className="display-5 mb-4">We Services provided best offer</h1>
//             <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
//             </p>
//           </div>
//           <div className="row g-4">
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4"> Strategy Consulting</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4">Financial Advisory</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4">Managements</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4">Supply Optimization</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-5.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4">Hr Consulting</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
//               <div className="service-item">
//                 <div className="service-img">
//                   <img src="img/service-6.jpg" className="img-fluid rounded-top w-100" alt="Image" />
//                 </div>
//                 <div className="rounded-bottom p-4">
//                   <a href="#" className="h4 d-inline-block mb-4">Marketing Consulting</a>
//                   <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
//                   </p>
//                   <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Services




const serviceData = [
  {
    title: 'Web Application Development',
    description: 'Transform your business with our top-notch web application development services. We create scalable, secure, and high-performance web solutions tailored to your needs.',
    image: 'img/webappservice.jpg',
    link: '/web-development'
  },
  {
    title: 'Mobile Application Development',
    description: 'Reach your customers on the go with our mobile app development services. We design and build intuitive and engaging mobile applications for both iOS and Android platforms.',
    image: 'img/mobileappservice.jpg',
    link: '/mobile-development'
  },
  {
    title: 'Graphics Design Services',
    description: 'Enhance your brand’s visual identity with our professional graphic design services. From logos to marketing materials, we create stunning visuals that capture your brand’s essence.',
    image: 'img/graphicsdesignservice.jpeg',
    link: '/graphics-design'
  },
  {
    title: 'Social Media Marketing',
    description: 'Boost your online presence with our expert social media marketing services. We develop and execute strategies that increase engagement, drive traffic, and grow your brand’s audience.',
    image: 'img/socialmediaservice.jpg',
    link: '/social-media-marketing'
  },
  {
    title: 'HR Consulting',
    description: 'Streamline your human resources operations with our HR consulting services. We provide strategic guidance on recruitment, employee management, and organizational development.',
    image: 'img/service-5.jpg',
    link: '/hr-consulting'
  },
  {
    title: 'Marketing Consulting',
    description: 'Unlock your business’s potential with our marketing consulting services. We offer insights and strategies to enhance your marketing efforts, optimize campaigns, and achieve your business goals.',
    image: 'img/service-6.jpg',
    link: '/marketing-consulting'
  }
];

const Services = () => {
  const imageStyle = {
    height: '250px',
    width: '100%',
    objectFit: 'cover'
  };

  const containerStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px'
  };

  const contentStyle = {
    padding: '1rem'
  };

  return (
    <div className="container-fluid service pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-5 mb-4">Exceptional Services to Meet Your Needs</h1>
          <p className="mb-0">At [Your Company], we offer a wide range of services designed to help you achieve your business goals. Our team of experts is dedicated to providing high-quality solutions tailored to your unique needs.</p>
        </div>
        <div className="row g-4">
          {serviceData.map((service, index) => (
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 + (index % 3) * 0.2}s`} key={index}>
              <div style={containerStyle} className="service-item">
                <div style={{ height: '250px', overflow: 'hidden' }} className="service-img">
                  <img src={service.image} alt={service.title} style={imageStyle} />
                </div>
                <div style={contentStyle} className="rounded-bottom">
                  <a href={service.link} className="h4 d-inline-block mb-4">{service.title}</a>
                  <p className="mb-4">{service.description}</p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href={service.link}>Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
