import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';

const Contact = () => {
  return (
    <div style={{ background: '#22303C', minHeight: '100vh', color: 'white' }}>
      <div className="container py-5">
        <h1 className="fs-2 text-light text-center mb-4">Contact Details</h1>
        
        <div className="row">
          {/* Image Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img 
              src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_640.jpg" 
              alt="Contact Us" 
              className="img-fluid shadow-lg rounded" 
            />
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-6 col-md-12">
            <h2 className="fs-4 text-white mb-3">Get in Touch</h2>
            
            <div className="mb-3">
              <span className="fs-5 fw-bold">Mobile No:</span>
              <p className="fs-4">+91 63938 078</p>
            </div>
            
            <div className="mb-3">
              <span className="fs-5 fw-bold">Email Id:</span>
              <p className="fs-4">daskumarjit2004@gmail.com</p>
            </div>
            
            <div className="mb-3">
              <span className="fs-5 fw-bold">Address:</span>
              <p className="fs-4">29 No Bahiragoto Colony, Kolkata 700030</p>
            </div>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="row mt-5">
          <h3 className="fs-4 text-light mb-3 text-center">Follow Us</h3>
          <div className="col-12 text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mx-2">Instagram</a>
          </div>
        </div>

        {/* Operating Hours Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="fs-4 text-light mb-3">Operating Hours</h3>
            <p className="fs-5">Monday to Friday: 9 AM - 6 PM</p>
            <p className="fs-5">Saturday: 10 AM - 4 PM</p>
            <p className="fs-5">Sunday: Closed</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="row mt-5">
          <h3 className="fs-4 text-light mb-3 text-center">Frequently Asked Questions (FAQ)</h3>
          <div className="col-12">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is the best way to reach you?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="faqOne" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    The best way to reach us is through email, or you can give us a call. We aim to respond to all queries within 24 hours.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqTwo">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I visit your office?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faqTwo" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Yes, our office is located at 29 No Bahiragoto Colony, Kolkata 700030. Please schedule an appointment before visiting.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqThree">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do you provide support after hours?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqThree" data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Unfortunately, we only provide support during operating hours. However, we will get back to you as soon as possible after hours.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
