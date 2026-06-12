// pages/Portfolio.jsx
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import './Portfolio.css';

const Portfolio = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const translations = {
    ar: {
      hero: {
        badge: "✨ تحول رقمي في الرعاية الصحية",
        titlePart1: "حلول تقنية متطورة",
        titlePart2: " للقطاع الطبي",
        description: "نقدم أنظمة وتطبيقات ذكية تساعد المؤسسات الصحية على التحول الرقمي بكل احترافية"
      },
      servicesSection: {
        tag: "خدماتنا",
        title: "حلولنا ",
        highlight: "التقنية"
      },
      services: [
        { icon: '🏥', title: 'أنظمة المستشفيات', description: 'حلول متكاملة لإدارة المستشفيات والمراكز الطبية', color: '#0E74AB' },
        { icon: '📱', title: 'تطبيقات صحية', description: 'تطبيقات موبايل ذكية للمرضى والأطباء', color: '#0E74AB' },
        { icon: '🤖', title: 'الذكاء الاصطناعي', description: 'حلول AI للتشخيص والتحليل الطبي', color: '#0E74AB' },
        { icon: '💻', title: 'منصات إلكترونية', description: 'بوابات إلكترونية متكاملة للخدمات الصحية', color: '#0E74AB' },
        { icon: '🔒', title: 'أمن المعلومات', description: 'حماية البيانات الطبية وفق أعلى المعايير', color: '#0E74AB' },
        { icon: '☁️', title: 'الحلول السحابية', description: 'بنية تحتية سحابية آمنة وقابلة للتوسع', color: '#0E74AB' }
      ],
      projectsSection: {
        tag: "أعمالنا",
        title: "أحدث ",
        highlight: "المشاريع"
      },
      projects: [
        {
          id: 1,
          title: 'نظام إدارة المستشفيات الذكي',
          categoryName: 'أنظمة طبية',
          description: 'نظام متكامل لإدارة المستشفيات يشمل إدارة المرضى، المواعيد، السجلات الطبية الإلكترونية، والفواتير.',
          image: 'https://media.istockphoto.com/id/1445262079/photo/doctor-in-the-control-roomperforming-a-medical-scan.jpg?s=1024x1024&w=is&k=20&c=h1THWTA5x8HZvwRyJyBzphY3CHi4vWHMDfV9a8FO9Lc=',
          metrics: ['كفاءة 70%', 'توفير وقت 45%']
        },
        {
          id: 2,
          title: 'تطبيق حجز المواعيد الطبية',
          categoryName: 'تطبيقات الموبايل',
          description: 'تطبيق ذكي لحجز المواعيد الطبية مع إشعارات فورية وتذكيرات للمرضى.',
          image: 'https://media.istockphoto.com/id/1409380261/photo/asian-woman-appointment-consulting-doctor-visit-on-mobile-app-at-home-telemedicine.jpg?s=1024x1024&w=is&k=20&c=aVSrGblPF8odOtT-HiSI_lh8Dv9HmbYIzlCngY0tsYo=',
          metrics: ['+150% حجوزات', '4.9 تقييم']
        },
        {
          id: 3,
          title: 'منصة الاستشارات عن بعد',
          categoryName: 'منصه الكترونيه',
          description: 'منصة متكاملة للاستشارات الطبية عن بعد مع مكالمات فيديو وسجلات طبية مشفرة.',
          image: 'https://media.istockphoto.com/id/1593105479/photo/doctor-using-technology-document-management-on-computer-system-management-for-cardiologist.jpg?s=1024x1024&w=is&k=20&c=w7WaAsiYD-m2azqXDorPjjM5zT945u789ZSjnBg1mwU=',
          metrics: ['10K+ مريض', '99.9% وقت تشغيل']
        },
        {
          id: 4,
          title: 'موقع الكتروني لعيادتك',
          categoryName: 'البرمجه',
          description: 'موقع الكتروني يساعدك في متابعة عيادتك ويساعد الأشخاص في معرفة عيادتك',
          image: 'https://media.istockphoto.com/id/1249041768/photo/woman-using-mobile-phone-and-looking-at-digital-dental-site.jpg?s=1024x1024&w=is&k=20&c=FwfKaQPiWFu3kf1JZzeOzmEQFHpAIh9sR-iTL-Raw1o=',
          metrics: ['95% دقة', 'موقع احترافي']
        },
        {
          id: 5,
          title: 'بوابة المرضى الإلكترونية',
          categoryName: 'بوابات إلكترونية',
          description: 'بوابة متكاملة للمرضى لمتابعة التقارير الطبية والنتائج والمواعيد.',
          image: 'https://media.istockphoto.com/id/1062511150/photo/middle-aged-woman-consults-with-doctor-over-the-internet.jpg?s=1024x1024&w=is&k=20&c=gKMEfu7OsM1tkrFfk_mh3crHGcBlZnWI1BNX3McOxXM=',
          metrics: ['98% رضا', '500K+ سجل']
        },
        {
          id: 6,
          title: 'نظام إدارة الصيدليات',
          categoryName: 'إدارة صيدلانية',
          description: 'نظام متكامل لإدارة المخزون والمبيعات والوصفات الطبية في الصيدليات.',
          image: 'https://media.istockphoto.com/id/1666053622/photo/unreconized-two-male-and-female-pharmacists-looking-at-prescription-management-system-from.jpg?s=1024x1024&w=is&k=20&c=LVBmJSQcPi3QkIeJrEyo-OUhcqwDIFOC1B3EgRqfY0s=',
          metrics: ['85% كفاءة', 'توفير 60%']
        }
      ]
    },
    en: {
      hero: {
        badge: "✨ Digital Transformation in Healthcare",
        titlePart1: "Advanced Tech Solutions",
        titlePart2: " for Healthcare",
        description: "We provide smart systems and applications to help healthcare institutions undergo digital transformation professionally"
      },
      servicesSection: {
        tag: "Our Services",
        title: "Our ",
        highlight: "Solutions"
      },
      services: [
        { icon: '🏥', title: 'Hospital Systems', description: 'Complete solutions for hospital management', color: '#0E74AB' },
        { icon: '📱', title: 'Mobile Apps', description: 'Smart apps for patients and doctors', color: '#0E74AB' },
        { icon: '🤖', title: 'AI Solutions', description: 'AI for medical analysis and diagnostics', color: '#0E74AB' },
        { icon: '💻', title: 'Digital Platforms', description: 'Integrated portals for healthcare services', color: '#0E74AB' },
        { icon: '🔒', title: 'Data Security', description: 'Protect medical data at the highest standards', color: '#0E74AB' },
        { icon: '☁️', title: 'Cloud Solutions', description: 'Secure and scalable cloud infrastructure', color: '#0E74AB' }
      ],
      projectsSection: {
        tag: "Our Work",
        title: "Latest ",
        highlight: "Projects"
      },
      projects: [
        {
          id: 1,
          title: 'Smart Hospital Management System',
          categoryName: 'Medical Systems',
          description: 'Integrated system managing patients, appointments, electronic records, and billing.',
          image: 'https://media.istockphoto.com/id/1445262079/photo/doctor-in-the-control-roomperforming-a-medical-scan.jpg?s=1024x1024&w=is&k=20&c=h1THWTA5x8HZvwRyJyBzphY3CHi4vWHMDfV9a8FO9Lc=',
          metrics: ['70% Efficiency', '45% Time Saved']
        },
        {
          id: 2,
          title: 'Medical Appointment App',
          categoryName: 'Mobile Apps',
          description: 'Smart app for booking medical appointments with instant notifications and reminders.',
          image: 'https://media.istockphoto.com/id/1409380261/photo/asian-woman-appointment-consulting-doctor-visit-on-mobile-app-at-home-telemedicine.jpg?s=1024x1024&w=is&k=20&c=aVSrGblPF8odOtT-HiSI_lh8Dv9HmbYIzlCngY0tsYo=',
          metrics: ['+150% Bookings', '4.9 Rating']
        },
        {
          id: 3,
          title: 'Remote Consultation Platform',
          categoryName: 'Digital Platform',
          description: 'Complete platform for remote medical consultations with video calls and encrypted medical records.',
          image: 'https://media.istockphoto.com/id/1593105479/photo/doctor-using-technology-document-management-on-computer-system-management-for-cardiologist.jpg?s=1024x1024&w=is&k=20&c=w7WaAsiYD-m2azqXDorPjjM5zT945u789ZSjnBg1mwU=',
          metrics: ['10K+ Patients', '99.9% Uptime']
        },
        {
          id: 4,
          title: 'Your Clinic Website',
          categoryName: 'Web Development',
          description: 'Website to manage your clinic and allow patients to know about your services.',
          image: 'https://media.istockphoto.com/id/1249041768/photo/woman-using-mobile-phone-and-looking-at-digital-dental-site.jpg?s=1024x1024&w=is&k=20&c=FwfKaQPiWFu3kf1JZzeOzmEQFHpAIh9sR-iTL-Raw1o=',
          metrics: ['95% Accuracy', 'Professional Site']
        },
        {
          id: 5,
          title: 'Patient Portal',
          categoryName: 'Web Portals',
          description: 'Comprehensive portal for patients to follow reports, results, and appointments.',
          image: 'https://media.istockphoto.com/id/1062511150/photo/middle-aged-woman-consults-with-doctor-over-the-internet.jpg?s=1024x1024&w=is&k=20&c=gKMEfu7OsM1tkrFfk_mh3crHGcBlZnWI1BNX3McOxXM=',
          metrics: ['98% Satisfaction', '500K+ Records']
        },
        {
          id: 6,
          title: 'Pharmacy Management System',
          categoryName: 'Pharmacy Management',
          description: 'Complete system for managing inventory, sales, and prescriptions in pharmacies.',
          image: 'https://media.istockphoto.com/id/1666053622/photo/unreconized-two-male-and-female-pharmacists-looking-at-prescription-management-system-from.jpg?s=1024x1024&w=is&k=20&c=LVBmJSQcPi3QkIeJrEyo-OUhcqwDIFOC1B3EgRqfY0s=',
          metrics: ['85% Efficiency', '60% Time Saved']
        }
      ]
    }
  };

  const current = translations[language];

  return (
    <div className="portfolio">
      <button className="lang-toggle" onClick={toggleLanguage}>
        {language === "ar" ? "EN" : "AR"}
      </button>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{current.hero.badge}</span>
            </div>
            <h1 className="hero-title">
              {current.hero.titlePart1}
              <span className="gradient-text">{current.hero.titlePart2}</span>
            </h1>
            <p className="hero-description">{current.hero.description}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{current.servicesSection.tag}</span>
            <h2 className="section-title">
              {current.servicesSection.title}
              <span className="gradient-text">{current.servicesSection.highlight}</span>
            </h2>
          </div>
          <div className="services-grid">
            {current.services.map((service, index) => (
              <div key={index} className="service-card" style={{ '--service-color': service.color }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{current.projectsSection.tag}</span>
            <h2 className="section-title">
              {current.projectsSection.title}
              <span className="gradient-text">{current.projectsSection.highlight}</span>
            </h2>
          </div>
          <div className="projects-grid">
            {current.projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.categoryName}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-metrics">
                    {project.metrics.map((metric, i) => (
                      <span key={i} className="metric">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;