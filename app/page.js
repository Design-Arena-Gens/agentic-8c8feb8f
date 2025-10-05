'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">Luxe Hair Salon</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Welcome to Luxe Hair Salon</h1>
        <p>Where Beauty Meets Perfection</p>
        <a href="#contact" className="cta-button">Book Appointment</a>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">✂️</div>
            <h3>Haircut & Styling</h3>
            <p>Professional cuts and styles tailored to your unique look</p>
            <div className="price">From $45</div>
          </div>
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>Hair Coloring</h3>
            <p>Expert color treatments, highlights, and balayage</p>
            <div className="price">From $80</div>
          </div>
          <div className="service-card">
            <div className="service-icon">💆</div>
            <h3>Hair Treatment</h3>
            <p>Deep conditioning and keratin treatments</p>
            <div className="price">From $60</div>
          </div>
          <div className="service-card">
            <div className="service-icon">👰</div>
            <h3>Bridal Services</h3>
            <p>Special occasion styling and makeup</p>
            <div className="price">From $150</div>
          </div>
          <div className="service-card">
            <div className="service-icon">✨</div>
            <h3>Extensions</h3>
            <p>Natural-looking hair extensions and volume</p>
            <div className="price">From $200</div>
          </div>
          <div className="service-card">
            <div className="service-icon">🌟</div>
            <h3>Blowout</h3>
            <p>Professional blow-dry styling service</p>
            <div className="price">From $35</div>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>About Luxe Hair Salon</h2>
            <p>
              With over 15 years of experience, Luxe Hair Salon has been the premier
              destination for hair care and styling in the community. Our team of
              expert stylists is dedicated to bringing out the best in every client.
            </p>
            <p>
              We use only the finest products and latest techniques to ensure you
              leave our salon looking and feeling your absolute best. From classic
              cuts to the latest trends, we have the expertise to make your hair
              dreams a reality.
            </p>
            <p>
              Our comfortable, modern salon provides a relaxing atmosphere where
              you can unwind and enjoy a premium beauty experience.
            </p>
          </div>
          <div className="about-image">
            💇‍♀️
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <h2>Our Work</h2>
        <div className="gallery-grid">
          <div className="gallery-item">💇</div>
          <div className="gallery-item">💅</div>
          <div className="gallery-item">✨</div>
          <div className="gallery-item">🌺</div>
          <div className="gallery-item">🎀</div>
          <div className="gallery-item">👑</div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message / Appointment Request"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="cta-button">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Address</strong><br />
                123 Beauty Avenue, Suite 100<br />
                New York, NY 10001
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Phone</strong><br />
                (555) 123-4567
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Email</strong><br />
                info@luxehairsalon.com
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🕐</span>
              <div>
                <strong>Hours</strong><br />
                Mon-Fri: 9:00 AM - 8:00 PM<br />
                Sat: 9:00 AM - 6:00 PM<br />
                Sun: 10:00 AM - 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Luxe Hair Salon. All rights reserved.</p>
      </footer>
    </>
  );
}
