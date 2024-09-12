import { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';

    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';

    if (!formData.project) newErrors.project = 'Project is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      // Handle form submission, e.g., send data to an API or server
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container my-5">
      <div className="bg-light p-4 rounded shadow-sm">
        <h4 className="text-primary mb-4">Send Your Message</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                <label htmlFor="name">Your Name</label>
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
                <label htmlFor="email">Your Email</label>
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                <label htmlFor="phone">Your Phone</label>
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Project"
                />
                <label htmlFor="project">Which service provide you</label>
                {errors.project && <div className="text-danger">{errors.project}</div>}
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
                <label htmlFor="subject">Subject</label>
                {errors.subject && <div className="text-danger">{errors.subject}</div>}
              </div>
            </div>

            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message here"
                  style={{ height: '160px' }}
                ></textarea>
                <label htmlFor="message">Message</label>
                {errors.message && <div className="text-danger">{errors.message}</div>}
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
