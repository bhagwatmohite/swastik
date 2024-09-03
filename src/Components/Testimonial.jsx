
import './Testimonial.css'; // Import custom styles for the testimonials

const testimonials = [
  {
    imgSrc: 'img/testimonial-1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    name: 'Person Name',
    profession: 'Profession',
    stars: 5
  },
  {
    imgSrc: 'img/testimonial-2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    name: 'Person Name',
    profession: 'Profession',
    stars: 5
  },
  {
    imgSrc: 'img/testimonial-3.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi quisquam temporibus voluptatum reprehenderit culpa, quasi corrupti laborum accusamus.',
    name: 'Person Name',
    profession: 'Profession',
    stars: 5
  }
];

const Testimonial = () => {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-4">Our Clients Reviews</h1>
          <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.</p>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-quote-left">
                <i className="fas fa-quote-left fa-2x"></i>
              </div>
              <div className="testimonial-img">
                <img src={testimonial.imgSrc} className="img-fluid" alt="Testimonial" />
              </div>
              <div className="testimonial-text">
                <p className="mb-0">{testimonial.text}</p>
              </div>
              <div className="testimonial-title">
                <div>
                  <h4 className="mb-0">{testimonial.name}</h4>
                  <p className="mb-0">{testimonial.profession}</p>
                </div>
                <div className="d-flex text-primary">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <div className="testimonial-quote-right">
                <i className="fas fa-quote-right fa-2x"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
