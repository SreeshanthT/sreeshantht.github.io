import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { emailjs_service_id, emailjs_template_id, emailjs_user_id, ABOUT } from '../../constants/constants';

// import './Contact.css'; // Uncomment if you add custom styles

const Contact = () => {
  // Placeholder data (replace with props or context as needed)
  const location = 'Malappuram, Kerala, 676317';
  const email = 'your.email@example.com'; // Replace with actual email or import
  const phone = '+91 1234567890'; // Replace with actual phone or import

  // Form state
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);
    // Simple validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }
    // Simulate sending
    // EmailJS integration
    emailjs.send(
      emailjs_service_id,      // Replace with your EmailJS service ID
      emailjs_template_id,     // Replace with your EmailJS template ID
      {
        title: "Portfolio Contact us",
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      emailjs_user_id          // Replace with your EmailJS user/public key
    )
    .then((result) => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setLoading(false);
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{ABOUT.location}</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{ABOUT.email}</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{ABOUT.phone}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form id="contact-form" role="form" className="php-email-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {loading && <div className="loading">Loading</div>}
                {error && <div className="error-message">{error}</div>}
                {sent && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>
              <div className="text-center">
                <button type="submit" disabled={loading}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 