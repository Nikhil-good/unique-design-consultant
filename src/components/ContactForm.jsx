import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${form.name}. We'll contact you shortly.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
