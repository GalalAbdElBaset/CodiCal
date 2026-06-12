// pages/Contact.jsx
import React, { useState, useContext } from 'react';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCheckCircle,
  FaRobot
} from 'react-icons/fa';
import './Contact.css';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const translations = {
    ar: {
      headerTitle: "تواصل معنا",
      headerDesc: "نسعد بتواصلك معنا! فريقنا جاهز للرد على استفساراتك",
      contactInfoTitle: "معلومات التواصل",
      workingHoursTitle: "ساعات العمل",
      workingHours: "السبت - الخميس: 9ص - 9م",
      formTitle: "أرسل لنا رسالة",
      formPlaceholders: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        subject: "اختر الموضوع",
        message: "رسالتك..."
      },
      subjectOptions: {
        inquiry: "استفسار عام",
        service: "طلب خدمة",
        complaint: "شكوى أو اقتراح"
      },
      submitBtn: "إرسال",
      submitting: "جاري الإرسال...",
      successMsg: "تم الإرسال بنجاح!",
      chatBotTitle: "شات بوت MedSolutions الذكي",
      chatBotDesc: "اسألني أي حاجة عن خدماتنا الطبية أو خطط الدفع",
      chatInputPlaceholder: "اكتب سؤالك هنا...",
      chatSendBtn: "إرسال",
      contactInfo: [
        { icon: <FaPhone />, title: "اتصل بنا", info: "+20 123 456 7890", link: "tel:+201234567890" },
        { icon: <FaWhatsapp />, title: "واتساب", info: "+20 123 456 7890", link: "https://wa.me/201234567890" },
        { icon: <FaEnvelope />, title: "البريد الإلكتروني", info: "info@medsolutions.com", link: "mailto:info@medsolutions.com" },
        { icon: <FaMapMarkerAlt />, title: "موقعنا", info: "مصر، القاهرة", link: "#" }
      ]
    },
    en: {
      headerTitle: "Contact Us",
      headerDesc: "We are happy to hear from you! Our team is ready to answer your inquiries",
      contactInfoTitle: "Contact Information",
      workingHoursTitle: "Working Hours",
      workingHours: "Sat - Thu: 9AM - 9PM",
      formTitle: "Send Us a Message",
      formPlaceholders: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Select Subject",
        message: "Your Message..."
      },
      subjectOptions: {
        inquiry: "General Inquiry",
        service: "Service Request",
        complaint: "Complaint or Suggestion"
      },
      submitBtn: "Send",
      submitting: "Sending...",
      successMsg: "Message sent successfully!",
      chatBotTitle: "MedSolutions Smart Chatbot",
      chatBotDesc: "Ask me anything about our medical services or payment plans",
      chatInputPlaceholder: "Type your question here...",
      chatSendBtn: "Send",
      contactInfo: [
        { icon: <FaPhone />, title: "Call Us", info: "+20 123 456 7890", link: "tel:+201234567890" },
        { icon: <FaWhatsapp />, title: "WhatsApp", info: "+20 123 456 7890", link: "https://wa.me/201234567890" },
        { icon: <FaEnvelope />, title: "Email", info: "info@medsolutions.com", link: "mailto:info@medsolutions.com" },
        { icon: <FaMapMarkerAlt />, title: "Location", info: "Cairo, Egypt", link: "#" }
      ]
    }
  };

  const current = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    let response = '';
    const msg = chatMessage.toLowerCase();

    if (msg.includes('موعد') || msg.includes('حجز')) {
      response = '📅 يمكنك حجز موعد عبر الضغط على أيقونة الواتساب أو الاتصال بنا على الرقم الموحد.';
    } else if (msg.includes('سيستم') || msg.includes('نظام') || msg.includes('ادارة')) {
      response = '💻 نظام MedSolutions يدعم إدارة العيادات والمواعيد والفواتير بكل سهولة.';
    } else if (msg.includes('تسويق') || msg.includes('عروض') || msg.includes('اعلانات')) {
      response = '📢 لدينا خطط تسويقية متكاملة للمراكز الطبية. تواصل مع فريق المبيعات لمزيد من التفاصيل.';
    } else if (msg.includes('دفع') || msg.includes('تقسيط') || msg.includes('سعر')) {
      response = '💰 نوفر خطط دفع مرنة وتقسيط ميسر. تواصل مع خدمة العملاء لمعرفة التفاصيل.';
    } else if (msg.includes('موقع') || msg.includes('تصميم')) {
      response = '🌐 نقدم تصميم مواقع احترافية للعيادات والمستشفيات مع أحدث التقنيات.';
    } else if (msg.includes('تطبيق') || msg.includes('موبايل')) {
      response = '📱 لدينا تطبيقات ذكية للمرضى والأطباء لتسهيل التواصل والمتابعة.';
    } else {
      response = '🤖 شكراً لتواصلك! الرجاء توضيح سؤالك أكثر أو التواصل عبر واتساب للحصول على رد سريع.';
    }

    setChatResponse(response);
    setChatMessage('');
    setTimeout(() => setChatResponse(''), 8000);
  };

  return (
    <div className="contact-page" dir={language === "ar" ? "rtl" : "ltr"}>
      {/* Language Toggle */}
      <button className="lang-toggle" onClick={toggleLanguage}>
        {language === "ar" ? "EN" : "AR"}
      </button>

      {/* Fixed WhatsApp Button */}
      <a 
        href="https://wa.me/201234567890?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A7%D8%B3%D8%D8%B4%D8%A7%D8%B1%D8%A9"
        className="whatsapp-fixed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaRobot />
      </a>

      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <h1>{current.headerTitle}</h1>
          <p>{current.headerDesc}</p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <h2 className="section-title">{current.contactInfoTitle}</h2>
            <div className="info-cards">
              {current.contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="info-card" target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h3>{item.title}</h3>
                    <p>{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
            {/* Working Hours */}
            <div className="info-card info-card-hours">
              <div className="info-icon"><FaClock /></div>
              <div className="info-content">
                <h3>{current.workingHoursTitle}</h3>
                <p>{current.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2 className="section-title">{current.formTitle}</h2>
            {submitSuccess && (
              <div className="success-message">
                <FaCheckCircle />
                <span>{current.successMsg}</span>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder={current.formPlaceholders.name} value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder={current.formPlaceholders.email} value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder={current.formPlaceholders.phone} value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <select name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">{current.formPlaceholders.subject}</option>
                  <option value="inquiry">{current.subjectOptions.inquiry}</option>
                  <option value="service">{current.subjectOptions.service}</option>
                  <option value="complaint">{current.subjectOptions.complaint}</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder={current.formPlaceholders.message} value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? current.submitting : <> {current.submitBtn} <FaPaperPlane /> </>}
              </button>
            </form>
          </div>
        </div>

        {/* Chatbot Section */}
        <div className="chatbot-section">
          <div className="chatbot-card">
            <div className="chatbot-header">
              <FaRobot className="chatbot-icon" />
              <h3>{current.chatBotTitle}</h3>
            </div>
            <p>{current.chatBotDesc}</p>

            {chatResponse && (
              <div className="chat-response">
                <FaRobot className="chatbot-icon-small" />
                <p>{chatResponse}</p>
              </div>
            )}

            <form onSubmit={handleChatSubmit} className="chat-form">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder={current.chatInputPlaceholder}
                className="chat-input"
              />
              <button type="submit" className="chat-send">
                <FaPaperPlane /> {current.chatSendBtn}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-placeholder">
            <p>📍 Cairo, Egypt - Nile Tower, Floor 15</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;