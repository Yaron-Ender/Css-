function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with our team.</p>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-item">
            <strong>Email:</strong> info@myapp.com
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> (555) 123-4567
          </div>
          <div className="contact-item">
            <strong>Address:</strong> 123 Main St, City, State 12345
          </div>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;