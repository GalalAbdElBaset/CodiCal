// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Packages from "./pages/packages";
import Portfolio from "./pages/portfolio";
import Dashboard from "./pages/Dashboard"; // استيراد Dashboard.jsx
import SignIn from "./pages/SignIn"; // استيراد SignIn.jsx
import SignUp from "./pages/SignUp"; // استيراد SignUp.jsx
import ChatBot from "./components/ChatBot"; // استيراد ChatBot

// ملف App.js نفسه لا يمكن استخدام useLocation مباشرة، لذلك نلفه في AppWrapper
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  // تحديد الصفحات اللي يظهر فيها البوت فقط
  const showBot = location.pathname === "/about" || location.pathname === "/portfolio";

  return (
    <>
      <Navbar />

      {/* اظهار البوت فقط في About و Portfolio */}
      {showBot && <ChatBot />}

      <Routes>
        {/* الصفحة الرئيسية دائمًا أول ما يدخل أي زائر */}
        <Route path="/" element={<Home />} />

        {/* صفحات الموقع الأخرى */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* رابط Dashboard */}

        {/* صفحات تسجيل الدخول والتسجيل */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* أي رابط غير موجود يرجع للصفحة الرئيسية */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default AppWrapper;