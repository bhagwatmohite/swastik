/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import EnquiryForm from "./EnquiryForm"

const ContactUs = () => {
  return (
    <>


      {/* <!-- Contact Start --> */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <div className="bg-light rounded p-5 mb-5">
                  <h4 className="text-primary mb-4">Get in Touch</h4>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-map-marker-alt fa-2x"></i>
                        </div>
                        <div>
                          <h4>Address</h4>
                          <p className="mb-0">
                            123 Aaiji Building ,Gurudwara chawk Akurdi, Pune India</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fas fa-envelope fa-2x"></i>
                        </div>
                        <div>
                          <h4>Mail Us</h4>
                          <p className="mb-0">swastik.agency@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fa fa-phone-alt fa-2x"></i>
                        </div>
                        <div>
                          <h4>Telephone</h4>
                          <p className="mb-0">(+91) 7057857829-Bhagwat Mohite</p>
                          <p className="mb-0">(+91) 9404279347-Abhjit Lingse</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className="fab fa-firefox-browser fa-2x"></i>
                        </div>
                        <div>
                          <h4>swastik.agency@gmail.com</h4>
                          <p className="mb-0">(+91) 7057857829 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* COntact Form /enquiry  */}
                {/* <div className="bg-light p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s">
                  <h4 className="text-primary">Send Your Message</h4>
                  <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                  <form>
                    <div className="row g-4">
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                          <label for="phone">Your Phone</label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="project" placeholder="Project" />
                          <label for="project">Your Project</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                          <label for="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                          <label for="message">Message</label>
                        </div>

                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div> */}
                <EnquiryForm></EnquiryForm>
                {/* Enquiry end */}
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="rounded h-100">
                {/* <iframe className="rounded h-100 w-100"
                  style={{ height: '400px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe className="rounded h-100 w-100" style={{ height: '400px' }} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d40908.53578886006!2d73.73038572809403!3d18.651018350016813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgurudwara%20chawk%20akurdi%20pune%20!5e0!3m2!1sen!2sin!4v1726929601501!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

    </>
  )
}

export default ContactUs