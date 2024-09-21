

// const Team = () => {
//   return (
//     <>
//       <div className="container-fluid team pb-5">
//         <div className="container pb-5">
//           <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
//             <h4 className="text-primary">Our Team</h4>
//             <h1 className="display-5 mb-4">Meet Our Experts</h1>
//             <p className="mb-0">Our dedicated team of professionals is here to provide the best services in web and app development. Get to know the people behind our success and how they contribute to making our projects exceptional.</p>
//           </div>
//           <div className="row g-4">
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="img/team-1.jpg" className="img-fluid" alt="David James" />
//                 </div>
//                 <div className="team-title">
//                   <h4 className="mb-0">David James</h4>
//                   <p className="mb-0">Lead Developer</p>
//                 </div>
//                 <div className="team-icon">
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://facebook.com/davidjames"><i className="fab fa-facebook-f"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://twitter.com/davidjames"><i className="fab fa-twitter"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://linkedin.com/in/davidjames"><i className="fab fa-linkedin-in"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://instagram.com/davidjames"><i className="fab fa-instagram"></i></a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="img/team-2.jpg" className="img-fluid" alt="Sarah Wilson" />
//                 </div>
//                 <div className="team-title">
//                   <h4 className="mb-0">Sarah Wilson</h4>
//                   <p className="mb-0">UX/UI Designer</p>
//                 </div>
//                 <div className="team-icon">
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://facebook.com/sarahwilson"><i className="fab fa-facebook-f"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://twitter.com/sarahwilson"><i className="fab fa-twitter"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://linkedin.com/in/sarahwilson"><i className="fab fa-linkedin-in"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://instagram.com/sarahwilson"><i className="fab fa-instagram"></i></a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="img/team-3.jpg" className="img-fluid" alt="Michael Brown" />
//                 </div>
//                 <div className="team-title">
//                   <h4 className="mb-0">Michael Brown</h4>
//                   <p className="mb-0">Project Manager</p>
//                 </div>
//                 <div className="team-icon">
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://facebook.com/michaelbrown"><i className="fab fa-facebook-f"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://twitter.com/michaelbrown"><i className="fab fa-twitter"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://linkedin.com/in/michaelbrown"><i className="fab fa-linkedin-in"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://instagram.com/michaelbrown"><i className="fab fa-instagram"></i></a>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
//               <div className="team-item">
//                 <div className="team-img">
//                   <img src="img/team-4.jpg" className="img-fluid" alt="Emily Johnson" />
//                 </div>
//                 <div className="team-title">
//                   <h4 className="mb-0">Emily Johnson</h4>
//                   <p className="mb-0">Marketing Specialist</p>
//                 </div>
//                 <div className="team-icon">
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://facebook.com/emilyjohnson"><i className="fab fa-facebook-f"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://twitter.com/emilyjohnson"><i className="fab fa-twitter"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-3" href="https://linkedin.com/in/emilyjohnson"><i className="fab fa-linkedin-in"></i></a>
//                   <a className="btn btn-primary btn-sm-square rounded-circle me-0" href="https://instagram.com/emilyjohnson"><i className="fab fa-instagram"></i></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Team



const Team = () => {
  const teamData = [
    {
      name: 'Bhagwat Mohite',
      role: 'Full Stack Developer',
      imgSrc: 'img/team-1.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/davidjames',
        twitter: 'https://twitter.com/davidjames',
        linkedin: 'https://linkedin.com/in/davidjames',
        instagram: 'https://instagram.com/davidjames'
      },
      delay: '0.2s'
    },
    {
      name: 'Abhijit Lingse',
      role: 'Java Full Stack Developer',
      imgSrc: 'img/team-2.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/sarahwilson',
        twitter: 'https://twitter.com/sarahwilson',
        linkedin: 'https://linkedin.com/in/sarahwilson',
        instagram: 'https://instagram.com/sarahwilson'
      },
      delay: '0.4s'
    },
    {
      name: 'Ashish Gaikwad',
      role: 'UI/UX Designer',
      imgSrc: 'img/team-3.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/michaelbrown',
        twitter: 'https://twitter.com/michaelbrown',
        linkedin: 'https://linkedin.com/in/michaelbrown',
        instagram: 'https://instagram.com/michaelbrown'
      },
      delay: '0.6s'
    },
    // {
    //   name: 'Emily Johnson',
    //   role: 'Full Stack Developer',
    //   imgSrc: 'img/team-4.jpg',
    //   socialLinks: {
    //     facebook: 'https://facebook.com/emilyjohnson',
    //     twitter: 'https://twitter.com/emilyjohnson',
    //     linkedin: 'https://linkedin.com/in/emilyjohnson',
    //     instagram: 'https://instagram.com/emilyjohnson'
    //   },
    //   delay: '0.8s'
    // },

    {
      name: ' Ram Kale',
      role: 'Graphics Designer',
      imgSrc: 'img/team-1.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/davidjames',
        twitter: 'https://twitter.com/davidjames',
        linkedin: 'https://linkedin.com/in/davidjames',
        instagram: 'https://instagram.com/davidjames'
      },
      delay: '1.0s'
    },
    {
      name: 'Shubham Waykar',
      role: 'App Developer',
      imgSrc: 'img/team-1.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/davidjames',
        twitter: 'https://twitter.com/davidjames',
        linkedin: 'https://linkedin.com/in/davidjames',
        instagram: 'https://instagram.com/davidjames'
      },
      delay: '1.2s'
    },
    {
      name: 'Shyam Kumar',
      role: 'Social Media Marketor',
      imgSrc: 'img/team-1.jpg',
      socialLinks: {
        facebook: 'https://facebook.com/davidjames',
        twitter: 'https://twitter.com/davidjames',
        linkedin: 'https://linkedin.com/in/davidjames',
        instagram: 'https://instagram.com/davidjames'
      },
      delay: '1.2s'
    },

  ];

  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-5 mb-4">Meet Our Experts</h1>
          <p className="mb-0">Our dedicated team of professionals is here to provide the best services in web and app development. Get to know the people behind our success and how they contribute to making our projects exceptional.</p>
        </div>
        <div className="row g-4">
          {teamData.map((member, index) => (
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={member.delay} key={index}>
              <div className="team-item">
                <div className="team-img">
                  <img src={member.imgSrc} className="img-fluid" alt={member.name} />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">{member.name}</h4>
                  <p className="mb-0">{member.role}</p>
                </div>
                <div className="team-icon">
                  {Object.entries(member.socialLinks).map(([platform, url], index) => (
                    <a
                      key={index}
                      className="btn btn-primary btn-sm-square rounded-circle me-3"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fab fa-${platform} fa-fw`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
