// Footer.jsx
import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", link: "#home", icon: "fa-solid fa-house" },
    { name: "About Us", link: "#about", icon: "fa-solid fa-info-circle" },
    { name: "Services", link: "#services", icon: "fa-solid fa-stethoscope" },
    { name: "Packages", link: "#packages", icon: "fa-solid fa-box" },
    { name: "Portfolio", link: "#portfolio", icon: "fa-solid fa-folder-open" },
    { name: "Contact", link: "#contact", icon: "fa-solid fa-envelope" },
  ];

  const servicesList = [
    "Medical Websites",
    "Hospital Systems",
    "Digital Marketing",
    "Appointment Systems",
    "AI Health Analytics",
    "Telemedicine",
  ];

  const contactInfo = [
    { icon: "fa-solid fa-location-dot", text: "123 Medical District, Cairo, Egypt" },
    { icon: "fa-solid fa-phone", text: "+20 123 456 7890" },
    { icon: "fa-solid fa-envelope", text: "info@medsolutions.com" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "fa-brands fa-facebook-f", link: "https://facebook.com", color: "#1877f2" },
    { name: "Twitter", icon: "fa-brands fa-twitter", link: "https://twitter.com", color: "#1da1f2" },
    { name: "Instagram", icon: "fa-brands fa-instagram", link: "https://instagram.com", color: "#e4405f" },
    { name: "WhatsApp", icon: "fa-brands fa-whatsapp", link: "https://whatsapp.com", color: "#25d366" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, #266879 0%, #0a1a2f 100%);
          color: #ffffff;
          font-family: 'Cairo', 'Inter', sans-serif;
          direction: ltr;
          overflow: hidden;
        }

        /* Wave Animation */
        .footer-wave {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          transform: rotate(180deg);
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 50px;
        }

        .shape-fill {
          fill: #ffffff;
          opacity: 0.08;
        }

        /* Footer Content */
        .footer-content {
          position: relative;
          z-index: 2;
          padding: 3rem 2rem 1.5rem;
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Footer Top Section */
        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        /* Brand Section */
        .footer-brand {
          animation: fadeInUp 0.6s ease;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .logo-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #667eea 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin: 0;
        }

        .logo-text span {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-description {
          color: #b0b7c9;
          line-height: 1.5;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .brand-stats {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.2rem;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 0.2rem;
        }

        .stat-label {
          font-size: 0.7rem;
          color: #b0b7c9;
        }

        /* Footer Titles */
        .footer-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
          color: #ffffff;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 35px;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 2px;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #b0b7c9;
          text-decoration: none;
          padding: 0.4rem 0;
          transition: all 0.3s ease;
          font-size: 0.85rem;
        }

        .link-item i {
          font-size: 0.75rem;
          transition: transform 0.3s ease;
          color: #667eea;
          width: 20px;
        }

        .link-item:hover {
          color: #667eea;
          transform: translateX(5px);
        }

        .link-item:hover i {
          transform: translateX(3px);
        }

        /* Contact List */
        .contact-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1rem 0;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
          color: #b0b7c9;
          font-size: 0.8rem;
        }

        .contact-list li i {
          width: 28px;
          height: 28px;
          background: rgba(102, 126, 234, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .contact-list li:hover i {
          background: #667eea;
          color: white;
          transform: scale(1.05);
        }

        /* Newsletter */
        .newsletter {
          margin-top: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-form input {
          flex: 1;
          padding: 0.5rem 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          color: white;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .newsletter-form input::placeholder {
          color: #6b7280;
          font-size: 0.75rem;
        }

        .newsletter-form button {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.8rem;
        }

        .newsletter-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .subscribe-success {
          margin-top: 0.5rem;
          padding: 0.3rem;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 6px;
          font-size: 0.7rem;
          color: #10b981;
          text-align: center;
          animation: fadeIn 0.5s ease;
        }

        /* Social Media Section */
        .footer-social {
          margin: 1.5rem 0;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .social-wrapper {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          font-size: 1.2rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .social-icon:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        /* Footer Bottom */
        .footer-bottom {
          padding-top: 1.2rem;
          text-align: center;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          font-size: 0.75rem;
          color: #b0b7c9;
        }

        .copyright span {
          color: #667eea;
          font-weight: 600;
        }

        .footer-bottom-links {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }

        .footer-bottom-links a {
          color: #b0b7c9;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.75rem;
        }

        .footer-bottom-links a:hover {
          color: #667eea;
        }

        .separator {
          color: #4a5568;
          font-size: 0.7rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .footer-top {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 2rem 1rem 1rem;
          }
          
          .footer-wave svg {
            height: 35px;
          }
          
          .social-wrapper {
            gap: 1rem;
          }
          
          .social-icon {
            width: 34px;
            height: 34px;
            font-size: 1rem;
          }
          
          .brand-stats {
            justify-content: space-between;
          }
          
          .stat-number {
            font-size: 1rem;
          }
          
          .logo-text {
            font-size: 1.3rem;
          }
          
          .logo-icon {
            width: 40px;
            height: 40px;
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          
          .footer-title {
            font-size: 0.95rem;
          }
          
          .link-item {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="footer-content">
          <div className="container">
            {/* Top Section */}
            <div className="footer-top">
              {/* Logo and Description */}
              <div className="footer-section footer-brand">
<div className="logo-wrapper">
  <div className="logo-icon">
    <img 
      src={require("../assets/CodiCal Logo (1).png")} 
      alt="CodiCal Logo" 
      style={{ width: "45px", height: "45px", borderRadius: "12px", objectFit: "contain" }} 
    />
  </div>
  <h2 className="logo-text">
    <span>CodiCal</span>
  </h2>
</div>
                <p className="brand-description">
                  Transforming healthcare through innovative digital solutions. 
                  We provide cutting-edge medical software and services.
                </p>
                <div className="brand-stats">
                  <div className="stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Clients</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">1000+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} className="link-item">
                        <i className={link.icon}></i>
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-section">
                <h3 className="footer-title">Our Services</h3>
                <ul className="footer-links">
                  {servicesList.map((service, index) => (
                    <li key={index}>
                      <a href="#services" className="link-item">
                        <i className="fa-solid fa-chevron-left"></i>
                        <span>{service}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Newsletter */}
              <div className="footer-section">
                <h3 className="footer-title">Contact Info</h3>
                <ul className="contact-list">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      <i className={info.icon}></i>
                      <span>{info.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Newsletter */}
                <div className="newsletter">
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                  {subscribed && (
                    <div className="subscribe-success">
                      <i className="fa-solid fa-circle-check"></i>
                      Subscribed!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="footer-social">
              <div className="social-wrapper">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ backgroundColor: social.color }}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="copyright">
                  © {currentYear} <span>CodiCal</span>. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                  <a href="#privacy">Privacy</a>
                  <span className="separator">|</span>
                  <a href="#terms">Terms</a>
                  <span className="separator">|</span>
                  <a href="#cookies">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;