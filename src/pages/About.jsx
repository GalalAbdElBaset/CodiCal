// About.jsx
import React, { useContext, useState } from "react";
import { 
  FaEye, FaLightbulb, FaHandshake, FaChartLine, 
  FaShieldAlt, FaUsers, FaHeartbeat,
  FaArrowRight, 
} from "react-icons/fa";
import { TbTarget } from "react-icons/tb";
import './About.css';
import { LanguageContext } from "../context/LanguageContext";

// Language Switcher Component
const LangSwitcher = ({ lang, setLang }) => (
  <button
    className="lang-switcher-about"
    onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
  >
    {lang === "ar" ? "English" : "العربية"}
  </button>
);

const About = () => {
  const { language, toggleLanguage } = useContext(LanguageContext); // استخدام اللغة من السياق
  const [lang, setLang] = useState(language);

  // تحديث اللغة عند تغييرها
  const handleLangChange = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    toggleLanguage(); // استدعاء دالة تغيير اللغة من السياق
  };

  // ترجمة النصوص
  const texts = {
    heroBadge: lang === 'ar' ? "من نحن" : "About Us",
    heroTitle: lang === 'ar' ? "شريكك الرقمي للتميز الطبي" : "Your Digital Partner for Medical Excellence",
    heroDesc: lang === 'ar' 
      ? "نُمكّن المؤسسات الصحية من تحقيق نمو حقيقي في عصر التحول الرقمي من خلال حلول متكاملة وتقنيات ذكية"
      : "We enable healthcare institutions to achieve real growth in the digital transformation era through integrated solutions and smart technologies.",
    discoverBtn: lang === 'ar' ? "اكتشف خدماتنا" : "Discover Our Services",
    contactBtn: lang === 'ar' ? "تواصل معنا" : "Contact Us",

    companyTitle: lang === 'ar' ? "نبذة عن الشركة" : "About the Company",
    companyDesc1: lang === 'ar' 
      ? "نحن شركة متخصصة في تقديم حلول رقمية متكاملة للقطاع الطبي، نعمل على تمكين المؤسسات الصحية من تحقيق نمو حقيقي في عصر التحول الرقمي."
      : "We are a company specialized in providing integrated digital solutions for the medical sector, enabling healthcare institutions to achieve real growth in the era of digital transformation.",
    companyDesc2: lang === 'ar'
      ? "نساعد العيادات، المراكز الطبية، والمستشفيات على تطوير أعمالها من خلال دمج التكنولوجيا الذكية مع استراتيجيات تسويقية فعّالة وأنظمة تشغيل متطورة. كل ما نقدمه مبني على فهم عميق لطبيعة السوق الطبي واحتياجات المرضى، بهدف تحسين الأداء وخلق تجربة صحية أكثر كفاءة واحترافية."
      : "We help clinics, medical centers, and hospitals develop their business by integrating smart technology with effective marketing strategies and advanced operating systems. Everything we provide is built on a deep understanding of the medical market and patient needs, aiming to improve performance and create a more efficient and professional healthcare experience.",
    companyDesc3: lang === 'ar'
      ? "نؤمن أن النجاح في المجال الطبي اليوم لا يعتمد فقط على جودة الخدمة، بل على القدرة على الإدارة الذكية، والوصول الصحيح للمرضى، وبناء حضور رقمي قوي ومستدام."
      : "We believe that success in the medical field today depends not only on service quality but also on smart management, proper patient access, and building a strong and sustainable digital presence.",
    stat1: lang === 'ar' ? "أحدث التقنيات" : "Latest Technologies",
    stat2: lang === 'ar' ? "خبراء متخصصين" : "Specialized Experts",

    visionTitle: lang === 'ar' ? "رؤيتنا" : "Our Vision",
    visionDesc: lang === 'ar' 
      ? "أن نكون الشريك الرقمي الأول للقطاع الطبي في المنطقة، من خلال تقديم حلول مبتكرة تساهم في تطوير منظومة الرعاية الصحية ورفع كفاءتها."
      : "To be the leading digital partner in the medical sector in the region, providing innovative solutions that help improve the healthcare system and enhance efficiency.",

    missionTitle: lang === 'ar' ? "رسالتنا" : "Our Mission",
    missionDesc: lang === 'ar'
      ? "تمكين مقدمي الخدمات الطبية من النمو والتوسع عبر حلول رقمية وتسويقية متكاملة، تساعدهم على تحسين الأداء، زيادة عدد المرضى، وبناء أنظمة عمل أكثر تنظيمًا واحترافية."
      : "Empowering healthcare providers to grow and expand through integrated digital and marketing solutions, helping them improve performance, increase patient numbers, and build more organized and professional work systems.",

    valuesTitle: lang === 'ar' ? "قيمنا" : "Our Values",
    ctaTitle: lang === 'ar' ? "هل تريد تطوير أعمالك الطبية؟" : "Do you want to develop your medical business?",
    ctaDesc: lang === 'ar'
      ? "تواصل مع فريقنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك"
      : "Contact our team today for a free consultation and discover how we can help you achieve your goals.",
    ctaBtn: lang === 'ar' ? "تواصل معنا الآن" : "Contact Us Now",
  };

  const values = [
    { id: 1, icon: <FaShieldAlt />, title: lang === 'ar' ? "الاحترافية" : "Professionalism", description: lang === 'ar' ? "نلتزم بأعلى معايير الجودة في كل ما نقدمه" : "We adhere to the highest quality standards in everything we provide", color: "#0E74AB" },
    { id: 2, icon: <FaLightbulb />, title: lang === 'ar' ? "الابتكار" : "Innovation", description: lang === 'ar' ? "نطور حلولاً ذكية تواكب التغيرات السريعة في السوق" : "We develop smart solutions that keep pace with rapid market changes", color: "#0E74AB" },
    { id: 3, icon: <FaHandshake />, title: lang === 'ar' ? "الشفافية" : "Transparency", description: lang === 'ar' ? "نؤمن بالوضوح والثقة في جميع تعاملاتنا" : "We believe in clarity and trust in all our dealings", color: "#0E74AB" },
    { id: 4, icon: <FaChartLine />, title: lang === 'ar' ? "النتائج" : "Results", description: lang === 'ar' ? "نركز على تحقيق نتائج حقيقية وقابلة للقياس" : "We focus on achieving real and measurable results", color: "#0E74AB" },
    { id: 5, icon: <FaUsers />, title: lang === 'ar' ? "الشراكة" : "Partnership", description: lang === 'ar' ? "ننجح عندما ينجح عملاؤنا، لذلك نبني علاقات طويلة المدى" : "We succeed when our clients succeed, building long-term relationships", color: "#0E74AB" }
  ];

  const handleLearnMore = () => alert(texts.discoverBtn);
  const handleContactUs = () => alert(texts.contactBtn);
  const handleValueClick = (title) => alert(title);

  return (
    <>
      {/* Language Switcher - Floating below navbar */}
      <LangSwitcher lang={lang} setLang={handleLangChange} />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FaHeartbeat /> {texts.heroBadge}
          </div>
          <h1>{texts.heroTitle}</h1>
          <p>{texts.heroDesc}</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleLearnMore}>{texts.discoverBtn}</button>
            <button className="btn-secondary" onClick={handleContactUs}>{texts.contactBtn}</button>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="company-desc">
        <div className="container">
          <div className="desc-grid">
            <div className="desc-content">
              <h2>{texts.companyTitle}</h2>
              <p>{texts.companyDesc1}</p>
              <p>{texts.companyDesc2}</p>
              <p>{texts.companyDesc3}</p>
              <div className="desc-stats">
                <div className="stat-item"><div className="stat-label">{texts.stat1}</div></div>
                <div className="stat-item"><div className="stat-label">{texts.stat2}</div></div>
              </div>
            </div>
            <div className="desc-image">
              <img 
                src="https://media.istockphoto.com/id/904426602/photo/medical-technology-and-communication-network-concept.jpg?s=1024x1024&w=is&k=20&c=jSa0DQ40gxp4YG88QxVEUwKNgJlsnUi29BV_rQNE0jU=" 
                alt="Medical Technology"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon"><FaEye /></div>
              <h3>{texts.visionTitle}</h3>
              <p>{texts.visionDesc}</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon"><TbTarget /></div>
              <h3>{texts.missionTitle}</h3>
              <p>{texts.missionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">{texts.valuesTitle}</h2>
        <div className="values-grid">
          {values.map((value) => (
            <div key={value.id} className="value-card" onClick={() => handleValueClick(value.title)}>
              <div className="value-icon" style={{ color: value.color }}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card">
          <h3>{texts.ctaTitle}</h3>
          <p>{texts.ctaDesc}</p>
          <button className="btn-primary" onClick={handleContactUs}>
            {texts.ctaBtn} <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
        </div>
      </section>
    </>
  );
};

export default About;