// Navbar.jsx
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// 👇 استيراد الكونتكست
import { LanguageContext } from "../context/LanguageContext";

// 👇 استيراد اللوجو
import logo from "../assets/CodiCal Logo (1).png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { language, toggleLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
      alert(language === "ar" ? "تم تسجيل الخروج" : "Logged out");
      setMenuOpen(false);
    } else {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      alert(language === "ar" ? "تم تسجيل الدخول بنجاح" : "Logged in successfully");
      setMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          background: #dadee9;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
        }

        .logo-icon img {
          height: 100%;
          width: auto;
          display: block;
        }

        .logo-text {
          font-size: 22px;
          font-weight: bold;
          color: #0E74AB;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }

        .nav-links li a {
          text-decoration: none;
          color: black;
          font-size: 16px;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links li a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          background: #0E74AB;
          left: 0;
          bottom: -5px;
          transition: 0.3s;
        }

        .nav-links li a:hover {
          color: #0E74AB;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        /* Button Styles */
        .btn {
          background: #0E74AB;
          border: none;
          padding: 10px 24px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 14px;
        }

        .btn:hover {
          background: #0a5a85;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(14, 116, 171, 0.3);
        }

        .auth-btn {
          padding: 8px 20px;
          border: 1.5px solid #0E74AB;
          background: white;
          color: #0E74AB;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 14px;
        }

        .auth-btn:hover {
          background: #0E74AB;
          color: white;
          transform: translateY(-2px);
        }

        .lang-btn {
          padding: 8px 20px;
          border: none;
          background: #1E6F8E;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .lang-btn:hover {
          background: #0e4a62;
          transform: translateY(-2px);
        }

        .right-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .menu-icon {
          display: none;
          font-size: 28px;
          cursor: pointer;
          z-index: 1001;
        }

        /* Desktop Styles */
        @media (min-width: 969px) {
          .mobile-menu,
          .menu-overlay {
            display: none;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 968px) {
          .navbar {
            padding: 15px 30px;
          }

          .nav-links {
            gap: 20px;
          }

          .nav-links li a {
            font-size: 14px;
          }

          .btn {
            padding: 8px 18px;
            font-size: 13px;
          }

          .auth-btn {
            padding: 6px 16px;
            font-size: 13px;
          }

          .lang-btn {
            padding: 6px 16px;
            font-size: 13px;
          }

          .right-buttons {
            gap: 8px;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 12px 20px;
          }

          .nav-links {
            display: none;
          }

          .right-buttons {
            display: none;
          }

          .menu-icon {
            display: block;
          }

          .logo-text {
            font-size: 18px;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
          }

          /* Mobile Menu */
          .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 85%;
            max-width: 380px;
            height: 100vh;
            background: #dadee9;
            z-index: 1002;
            transition: right 0.3s ease-in-out;
            box-shadow: -5px 0 20px rgba(0, 0, 0, 0.15);
            overflow-y: auto;
          }

          .mobile-menu.active {
            right: 0;
          }

          .mobile-menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            background: #dadee9;
          }

          .mobile-menu-logo {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .mobile-menu-logo img {
            width: 35px;
            height: auto;
          }

          .mobile-menu-logo span {
            font-size: 20px;
            font-weight: bold;
            color: #0E74AB;
          }

          .close-menu {
            font-size: 28px;
            cursor: pointer;
            color: #333;
            transition: transform 0.3s ease;
          }

          .close-menu:hover {
            transform: rotate(90deg);
          }

          /* Mobile Navigation Links */
          .mobile-nav-links {
            list-style: none;
            padding: 20px;
          }

          .mobile-nav-links li {
            margin-bottom: 5px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          }

          .mobile-nav-links li a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            font-weight: 500;
            display: block;
            padding: 12px 10px;
            transition: all 0.3s ease;
          }

          .mobile-nav-links li a:hover {
            color: #0E74AB;
            padding-left: 20px;
            background: rgba(14, 116, 171, 0.05);
          }

          /* Mobile Buttons Section */
          .mobile-buttons {
            padding: 20px;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .mobile-buttons .btn {
            width: 100%;
            margin: 0;
            padding: 12px;
            text-align: center;
            font-size: 16px;
          }

          .mobile-buttons .auth-btn {
            width: 100%;
            margin: 0;
            padding: 12px;
            text-align: center;
            font-size: 16px;
            background: white;
            color: #0E74AB;
            border: 1.5px solid #0E74AB;
          }

          .mobile-buttons .auth-btn:hover {
            background: #0E74AB;
            color: white;
          }

          .mobile-buttons .lang-btn {
            width: 100%;
            margin: 0;
            padding: 12px;
            text-align: center;
            font-size: 16px;
            background: #1E6F8E;
            color: white;
          }

          /* Overlay */
          .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1001;
            display: none;
            backdrop-filter: blur(2px);
          }

          .menu-overlay.active {
            display: block;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .navbar {
            padding: 10px 15px;
          }

          .logo-text {
            font-size: 16px;
          }

          .logo-icon {
            width: 28px;
            height: 28px;
          }

          .mobile-menu {
            width: 90%;
          }

          .mobile-nav-links li a {
            font-size: 16px;
            padding: 10px 10px;
          }

          .mobile-buttons .btn,
          .mobile-buttons .auth-btn,
          .mobile-buttons .lang-btn {
            padding: 10px;
            font-size: 14px;
          }
        }

        /* Animation for mobile menu */
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .mobile-menu.active {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>

      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <img src={logo} alt="CodiCal Logo" />
          </div>
          <div className="logo-text">
            <span>CodiCal</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">{language === "ar" ? "الرئيسية" : "Home"}</Link></li>
          <li><Link to="/about">{language === "ar" ? "من نحن" : "About Us"}</Link></li>
          <li><Link to="/services">{language === "ar" ? "الخدمات" : "Services"}</Link></li>
          <li><Link to="/packages">{language === "ar" ? "الباقات" : "Packages"}</Link></li>
          <li><Link to="/portfolio">{language === "ar" ? "اعمالنا" : "Portfolio"}</Link></li>
          <li><Link to="/contact">{language === "ar" ? "تواصل معنا" : "Contact"}</Link></li>
        </ul>

        {/* Desktop Buttons - Each Button Separately */}
        <div className="right-buttons">
          <button className="btn">
            {language === "ar" ? "احجز استشارة" : "Book Consultation"}
          </button>

          {isLoggedIn ? (
            <button className="auth-btn" onClick={handleAuth}>
              {language === "ar" ? "تسجيل خروج" : "Logout"}
            </button>
          ) : (
            <>
              <Link to="/signin">
                <button className="auth-btn">
                  {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                </button>
              </Link>
              <Link to="/signup">
                <button className="auth-btn">
                  {language === "ar" ? "إنشاء حساب" : "Sign Up"}
                </button>
              </Link>
            </>
          )}

          <button className="lang-btn" onClick={toggleLanguage}>
            {language === "ar" ? "EN" : "AR"}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Overlay Background */}
        <div 
          className={`menu-overlay ${menuOpen ? "active" : ""}`} 
          onClick={closeMenu}
        />

        {/* Mobile Menu - Contains All Links and Buttons */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              <img src={logo} alt="CodiCal Logo" />
              <span>CodiCal</span>
            </div>
            <div className="close-menu" onClick={closeMenu}>
              ✕
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={closeMenu}>{language === "ar" ? "الرئيسية" : "Home"}</Link></li>
            <li><Link to="/about" onClick={closeMenu}>{language === "ar" ? "من نحن" : "About Us"}</Link></li>
            <li><Link to="/services" onClick={closeMenu}>{language === "ar" ? "الخدمات" : "Services"}</Link></li>
            <li><Link to="/packages" onClick={closeMenu}>{language === "ar" ? "الباقات" : "Packages"}</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu}>{language === "ar" ? "اعمالنا" : "Portfolio"}</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>{language === "ar" ? "تواصل معنا" : "Contact"}</Link></li>
          </ul>

          {/* Mobile Buttons - Each Button Separately */}
          <div className="mobile-buttons">
            <button className="btn" onClick={closeMenu}>
              {language === "ar" ? "احجز استشارة" : "Book Consultation"}
            </button>

            {isLoggedIn ? (
              <button className="auth-btn" onClick={handleAuth}>
                {language === "ar" ? "تسجيل خروج" : "Logout"}
              </button>
            ) : (
              <>
                <Link to="/signin" onClick={closeMenu}>
                  <button className="auth-btn">
                    {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                  </button>
                </Link>
                <Link to="/signup" onClick={closeMenu}>
                  <button className="auth-btn">
                    {language === "ar" ? "إنشاء حساب" : "Sign Up"}
                  </button>
                </Link>
              </>
            )}

            <button className="lang-btn" onClick={() => {
              toggleLanguage();
              closeMenu();
            }}>
              {language === "ar" ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;