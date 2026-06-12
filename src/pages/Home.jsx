import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Home.css";
import { 
  FaBullhorn, FaClipboardList, FaLaptopCode, FaStethoscope, 
  FaCalendarCheck, FaChartLine, FaCogs, FaHeadset, FaPaintBrush,
  FaExternalLinkAlt, FaHospital, FaChartBar, FaDatabase, FaWhatsapp
} from "react-icons/fa";

// Separate component for better performance
const LangSwitcher = ({ lang, setLang }) => (
  <button
    className="lang-switcher"
    onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
  >
    {lang === "ar" ? "English" : "العربية"}
  </button>
);

// Service Card Component
const ServiceCard = ({ icon, title, description, color, onClick }) => (
  <div className="service-card" onClick={onClick}>
    <div style={{ color }} className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Why Choose Us Card Component
const WhyCard = ({ icon, title, description, color, onClick }) => (
  <div className="why-card" onClick={onClick}>
    <div style={{ color }} className="why-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Portfolio Card Component
const PortfolioCard = ({ project, onClick }) => (
  <div className="portfolio-card" onClick={() => onClick(project)}>
    <div className="card-image">
      <img src={project.image} alt={project.title} loading="lazy" />
    </div>
    <div className="card-content">
      <div className="card-header">
        <div className="card-icon">{project.icon}</div>
        <h3 className="card-title">{project.title}</h3>
      </div>
      <p className="card-description">{project.description}</p>
      <div className="card-tags">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <div className="card-footer">
        <span className="project-category">{project.category}</span>
      </div>
    </div>
  </div>
);

// WhatsApp Button Component
const WhatsAppButton = ({ tooltip, onClick }) => (
  <div className="whatsapp-float" onClick={onClick}>
    <FaWhatsapp className="whatsapp-icon" />
    <div className="whatsapp-tooltip">{tooltip}</div>
  </div>
);

const Home = () => {
  const [lang, setLang] = useState("ar");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState("all");

  const images = useMemo(() => [
    "https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?q=80&w=870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1762237798221-a298c91e18a3?q=80&w=564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=580&auto=format&fit=crop",
  ], []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Translations with memoization
  const translations = useMemo(() => ({
    heroTitle: { ar: "حلول طبية متقدمة لعملك", en: "Advanced Medical Solutions for Your Business" },
    heroDescription: { ar: "نُمكّن مقدمي الرعاية الصحية من تقديم خدمات متميزة من خلال أحدث التقنيات والأنظمة الذكية", en: "We empower healthcare providers to deliver exceptional services using the latest technologies and smart systems" },
    ourServicesBtn: { ar: "خدماتنا", en: "Our Services" },
    servicesTitle: { ar: "خدماتنا المميزة", en: "Our Featured Services" },
    services: {
      ar: [
        { title: "تسويق رقمي طبي", description: "حملات إعلانية للوصول لمرضى جدد" },
        { title: "حلول إدارة الحجوزات", description: "إدارة الحجوزات والمرضى بسهولة" },
        { title: "تطوير مواقع احترافية", description: "تصميم وبرمجة مواقع لعياداتك" },
        { title: "استشارات طبية", description: "منصة متكاملة للاستشارات بالفيديو" },
        { title: "نظام مواعيد ذكي", description: "جدولة ذكية مع تنبيهات آلية" },
        { title: "تحليلات طبية متقدمة", description: "ذكاء اصطناعي لتحسين الأداء" }
      ],
      en: [
        { title: "Medical Digital Marketing", description: "Advertising campaigns to reach new patients" },
        { title: "Appointment Management", description: "Easy management of bookings and patients" },
        { title: "Professional Web Development", description: "Design and code websites for your clinics" },
        { title: "Medical Consultations", description: "Platform for video consultations" },
        { title: "Smart Scheduling System", description: "Smart scheduling with automatic reminders" },
        { title: "Advanced Medical Analytics", description: "AI to improve performance" }
      ]
    },
    whyTitle: { ar: "ليه تختارنا", en: "Why Choose Us" },
    whyItems: {
      ar: [
        { title: "حلول مخصصة", description: "نقدم حلول حسب متطلباتك" },
        { title: "دعم فني مستمر", description: "فريق دعم جاهز 24/7" },
        { title: "تصميم احترافي", description: "تصميم سريع وجذاب" },
        { title: "خبرة طبية", description: "خبرة واسعة في المجال الطبي" }
      ],
      en: [
        { title: "Custom Solutions", description: "Tailored solutions for your needs" },
        { title: "24/7 Support", description: "Support team ready around the clock" },
        { title: "Professional Design", description: "Fast and attractive design" },
        { title: "Medical Expertise", description: "Extensive experience in healthcare" }
      ]
    },
    portfolioTitle: { ar: "نماذج أعمالنا", en: "Our Work Samples" },
    portfolioSubtitle: { ar: "نقدم حلولاً رقمية مبتكرة للمؤسسات الطبية", en: "Innovative digital solutions for medical institutions" },
    categories: {
      ar: [
        { id: "all", name: "الكل" },
        { id: "تحليلات", name: "تحليلات" },
        { id: "تقارير", name: "تقارير" },
        { id: "مواقع", name: "مواقع" },
        { id: "لوحات تحكم", name: "لوحات تحكم" }
      ],
      en: [
        { id: "all", name: "All" },
        { id: "تحليلات", name: "Analytics" },
        { id: "تقارير", name: "Reports" },
        { id: "مواقع", name: "Websites" },
        { id: "لوحات تحكم", name: "Dashboards" }
      ]
    },
    viewAllBtn: { ar: "شوف كل الأعمال", en: "View All Works" },
    whatsappTooltip: { ar: "تواصل مع البوت", en: "Contact Bot" }
  }), []);

  const t = translations;

  // Services data
  const services = useMemo(() => [
    { id: 1, icon: <FaBullhorn />, color: "#0E74AB" },
    { id: 2, icon: <FaClipboardList />, color: "#0E74AB" },
    { id: 3, icon: <FaLaptopCode />, color: "#0E74AB" },
    { id: 4, icon: <FaStethoscope />, color: "#0E74AB" },
    { id: 5, icon: <FaCalendarCheck />, color: "#0E74AB" },
    { id: 6, icon: <FaChartLine />, color: "#0E74AB" }
  ], []);

  const whyIcons = useMemo(() => [
    { id: 1, icon: <FaCogs />, color: "#0E74AB" },
    { id: 2, icon: <FaHeadset />, color: "#0E74AB" },
    { id: 3, icon: <FaPaintBrush />, color: "#0E74AB" },
    { id: 4, icon: <FaStethoscope />, color: "#0E74AB" }
  ], []);

  // Portfolio projects
  const projectsData = useMemo(() => [
    { id: 1, image: "https://plus.unsplash.com/premium_photo-1726848121953-354d20f7f522?q=80&w=802&auto=format&fit=crop", icon: <FaChartBar />, category: "تحليلات", tags: ["البرمجة والتطوير"] },
    { id: 2, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop", icon: <FaDatabase />, category: "تقارير", tags: ["البرمجة والتطوير"] },
    { id: 3, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop", icon: <FaLaptopCode />, category: "مواقع", tags: ["البرمجة والتطوير"] },
    { id: 4, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop", icon: <FaChartBar />, category: "لوحات تحكم", tags: ["البرمجة والتطوير"] },
    { id: 5, image: "https://media.istockphoto.com/id/1463017783/photo/online-payment-platform.jpg?s=1024x1024&w=is&k=20&c=z6b0NyN8qiRDS1BHVQw7HU-24Ii6mFSqtpv2an_jGqQ=", icon: <FaHospital />, category: "مواقع", tags: ["البرمجة والتطوير"] },
    { id: 6, image: "https://media.istockphoto.com/id/2185857328/photo/businessman-data-analysis.jpg?s=1024x1024&w=is&k=20&c=-FCogu0v4PmYWpNihCzrCtEwYZUb1ZQYzFO49c_IbIo=", icon: <FaChartLine />, category: "تحليلات", tags: ["البرمجة والتطوير"] },
    { id: 7, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop", icon: <FaDatabase />, category: "تقارير", tags: ["البرمجة والتطوير"] },
    { id: 8, image: "https://media.istockphoto.com/id/628612368/photo/human-hand-touching-medical-button.jpg?s=1024x1024&w=is&k=20&c=Xn4_EFDtYS6MvIMo3sFnQE2dPCJZimPqENJO81TVeHE=", icon: <FaStethoscope />, category: "مواقع", tags: ["البرمجة والتطوير"] }
  ], []);

  // Merge projects with translations
  const mergedProjects = useMemo(() => {
    const projectTexts = {
      ar: [
        { title: "نظام تحليلات البيانات", description: "لوحة تحكم متقدمة لتحليل أداء العيادات والمستشفيات مع تقارير لحظية" },
        { title: "بوابة التقارير الطبية", description: "نظام متكامل لإدارة وتوليد التقارير الطبية والإحصاءات الدقيقة" },
        { title: "نظام إدارة المحتوى", description: "موقع إلكتروني متكامل لإدارة المحتوى الطبي والخدمات" },
        { title: "لوحة تحكم المستشفى", description: "نظام إدارة متكامل مع لوحات تحكم تفاعلية وتقارير فورية" },
        { title: "موقع عيادة متخصصة", description: "موقع احترافي لعيادة طبية مع نظام حجز إلكتروني" },
        { title: "نظام تحليل الأداء", description: "تحليل أداء الأطباء والمرضى مع تقارير متقدمة" },
        { title: "بوابة التقارير الذكية", description: "تقارير آلية ذكية مع إشعارات وتنبيهات فورية" },
        { title: "منصة الخدمات الطبية", description: "موقع شامل للخدمات الطبية مع نظام استشارات عن بعد" }
      ],
      en: [
        { title: "Data Analytics System", description: "Advanced dashboard for analyzing clinic and hospital performance with real-time reports" },
        { title: "Medical Reports Portal", description: "Integrated system for managing and generating medical reports and accurate statistics" },
        { title: "Content Management System", description: "Comprehensive website for managing medical content and services" },
        { title: "Hospital Dashboard", description: "Integrated management system with interactive dashboards and instant reports" },
        { title: "Specialized Clinic Website", description: "Professional website for a medical clinic with an electronic booking system" },
        { title: "Performance Analysis System", description: "Analysis of doctor and patient performance with advanced reports" },
        { title: "Smart Reports Portal", description: "Automated smart reports with instant notifications and alerts" },
        { title: "Medical Services Platform", description: "Comprehensive medical services website with a teleconsultation system" }
      ]
    };

    return projectsData.map((proj, idx) => ({
      ...proj,
      title: projectTexts[lang][idx].title,
      description: projectTexts[lang][idx].description,
      category: proj.category
    }));
  }, [lang, projectsData]);

  const filteredProjects = useMemo(() => 
    filter === "all" ? mergedProjects : mergedProjects.filter(p => p.category === filter),
    [filter, mergedProjects]
  );

  // Handlers
  const handleOurServices = useCallback(() => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    window.open("https://wa.me/201234567890", "_blank");
  }, []);

  const handleServiceClick = useCallback((serviceTitle) => {
    console.log(`Service clicked: ${serviceTitle}`);
  }, []);

  const handleWhyClick = useCallback((itemTitle) => {
    console.log(`Why item clicked: ${itemTitle}`);
  }, []);

  const handleProjectClick = useCallback((project) => {
    console.log(`Project clicked: ${project.title}`);
  }, []);

  return (
    <div className="home-container" dir={lang === "ar" ? "rtl" : "ltr"}>
      <LangSwitcher lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Medical ${index + 1}`} 
              className={index === currentSlide ? "active" : ""}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <div className="hero-overlay">
          <h1>
            <span>{t.heroTitle[lang]}</span>
          </h1>
          <p>{t.heroDescription[lang]}</p>
          <div className="hero-buttons">
            <button className="btn-secondary" onClick={handleOurServices}>
              {t.ourServicesBtn[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">{t.servicesTitle[lang]}</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={t.services[lang][idx].title}
              description={t.services[lang][idx].description}
              color={service.color}
              onClick={() => handleServiceClick(t.services[lang][idx].title)}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <h2 className="section-title">{t.whyTitle[lang]}</h2>
        <div className="why-grid">
          {whyIcons.map((item, idx) => (
            <WhyCard
              key={item.id}
              icon={item.icon}
              title={t.whyItems[lang][idx].title}
              description={t.whyItems[lang][idx].description}
              color={item.color}
              onClick={() => handleWhyClick(t.whyItems[lang][idx].title)}
            />
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h2 className="section-title">{t.portfolioTitle[lang]}</h2>
          <p className="portfolio-subtitle">{t.portfolioSubtitle[lang]}</p>
        </div>
        
        <div className="portfolio-filters">
          {t.categories[lang].map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onClick={handleProjectClick}
            />
          ))}
        </div>

        <div className="view-all">
          <button className="view-all-btn" onClick={() => setFilter("all")}>
            {t.viewAllBtn[lang]} <FaExternalLinkAlt />
          </button>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton 
        tooltip={t.whatsappTooltip[lang]}
        onClick={handleWhatsAppClick}
      />
    </div>
  );
};

export default Home;