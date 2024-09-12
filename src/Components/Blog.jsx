
const Blog = () => {
  // Define the blog data object inside the component
  const blogData = [
    {
      id: 1,
      imgSrc: "img/service-1.jpg",
      category: "Web Development",
      title: "Custom Web Development for Your Business",
      description: "We create custom websites tailored to your business needs, ensuring a seamless user experience and a strong online presence. Learn more about how our web development services can help you grow.",
      authorImg: "img/testimonial-1.jpg",
      authorName: "Anvika Kulkarni",
      date: "September 15, 2024",
    },
    {
      id: 2,
      imgSrc: "img/service-2.jpg",
      category: "App Development",
      title: "Mobile App Development Solutions",
      description: "Our mobile app development services provide innovative and scalable solutions to meet your business goals. Discover how we can help you reach your audience through cutting-edge mobile applications.",
      authorImg: "img/testimonial-2.jpg",
      authorName: "Priya sharma",
      date: "August 28, 2024",
    },
    {
      id: 3,
      imgSrc: "img/service-3.jpg",
      category: "E-commerce Solutions",
      title: "Building Successful E-commerce Platforms",
      description: "From small businesses to large enterprises, our e-commerce development services offer customized solutions that drive sales and customer engagement. Learn how we can elevate your online store.",
      authorImg: "img/testimonial-3.jpg",
      authorName: "Jaggnath Thakur",
      date: "July 19, 2024",
    },
    {
      id: 4,
      imgSrc: "img/service-4.jpg",
      category: "SEO Services",
      title: "Improving Your Online Visibility with SEO",
      description: "Our SEO services are designed to boost your website’s rankings on search engines, driving more traffic and conversions. Find out how our strategies can help your business thrive online.",
      authorImg: "img/testimonial-1.jpg",
      authorName: "Emily Smith",
      date: "June 10, 2024",
    },
  ];

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
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Our Blog & News</h4>
          <h1 className="display-5 mb-4">Insights Into Our Services</h1>
          <p className="mb-0">Stay updated with the latest insights, tips, and trends in web development, mobile app development, e-commerce, and more. Discover how our services can benefit your business.</p>
        </div>
        <div className="row g-4">
          {blogData.map((blog, index) => (
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 + (index % 3) * 0.2}s`} key={blog.id}>
              <div style={containerStyle} className="blog-item">
                <div style={{ height: '250px', overflow: 'hidden' }} className="blog-img">
                  <img src={blog.imgSrc} alt={blog.title} style={imageStyle} />
                </div>
                <div style={contentStyle} className="rounded-bottom">
                  <a href="#" className="btn btn-primary mb-3">{blog.category}</a>
                  <h4 className="d-inline-block mb-3">{blog.title}</h4>
                  <p className="mb-4">{blog.description}</p>
                  <div className="d-flex align-items-center">
                    <img src={blog.authorImg} className="img-fluid rounded-circle me-3" style={{ width: '60px', height: '60px' }} alt={blog.authorName} />
                    <div>
                      <h5 className="mb-0">{blog.authorName}</h5>
                      <p className="mb-0">{blog.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
