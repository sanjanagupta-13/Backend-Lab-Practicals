import React from "react";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <section id="contact" className="section contact">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to plan your next adventure or commission a custom photography session?
              We'd love to hear from you and bring your vision to life.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-form">
              <form id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or adventure plans..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Studio Location</h4>
                  <p>
                    Rocky Mountain National Park <br />
                    Colorado, USA 80424
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone & WhatsApp</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>hello@sleeky.photography</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div className="contact-details">
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM <br />
                    Weekend tours by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
