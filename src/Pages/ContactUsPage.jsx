
import ContactUs from "../Components/ContactUs"

const ContactUsPage = () => {
  return (
    <>

      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
          {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol> */}
        </div>
      </div>
      {/* <!-- Header End --> */}

      <ContactUs></ContactUs>


    </>
  )
}

export default ContactUsPage