import React, { useEffect, useState } from "react";
import { 
  FaLaptopCode, FaHospitalUser, FaCalendarCheck, FaChartLine, 
  FaMobileAlt, FaCloudUploadAlt, FaShieldAlt, FaHeadset,
  FaArrowLeft, FaCheckCircle, FaTachometerAlt,
  FaDatabase, FaFileAlt, FaUserMd, FaClock, FaVideo, FaRobot,
  FaHeartbeat, FaPalette, FaFilm, FaBullhorn, FaChartBar,
  FaRegBuilding, FaInstagram, FaFacebook, 
} from "react-icons/fa";

const Services = () => {
  // Language state
  const [lang, setLang] = useState("ar"); // 'ar' or 'en'

  // Hero Slider Images
  const images = [
    "https://plus.unsplash.com/premium_photo-1682141140357-4283cd7aae8b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop",
  ];
  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Translations object
  const translations = {
    // Hero section
    hero: {
      ar: {
        title: "خدماتنا الطبية المتكاملة",
        subtitle: "نقدم حلولاً رقمية متطورة للقطاع الطبي، تجمع بين التكنولوجيا الحديثة والخبرة الطبية لتقديم أفضل الخدمات للمرضى ومقدمي الرعاية الصحية",
        btnOrder: "اطلب الخدمة الآن",
        btnLearn: "تعرف على خدماتنا"
      },
      en: {
        title: "Our Integrated Medical Services",
        subtitle: "We provide advanced digital solutions for the healthcare sector, combining modern technology with medical expertise to deliver the best services for patients and healthcare providers",
        btnOrder: "Order Service Now",
        btnLearn: "Learn About Our Services"
      }
    },

    // Section headers
    sectionHeaders: {
      ar: {
        servicesTitle: "خدماتنا المميزة",
        servicesSubtitle: "نقدم مجموعة متكاملة من الحلول الرقمية المتطورة لتلبية احتياجات القطاع الطبي",
        whyTitle: "لماذا تختار خدماتنا؟",
        whySubtitle: "نتميز بتقديم حلول متكاملة تجمع بين الخبرة التقنية والفهم العميق لاحتياجات القطاع الطبي",
        ctaTitle: "جاهز لتطوير مؤسستك الطبية؟",
        ctaSubtitle: "تواصل معنا الآن للحصول على استشارة مجانية وابدأ رحلة التحول الرقمي",
        ctaBtn: "احصل على استشارة مجانية"
      },
      en: {
        servicesTitle: "Our Featured Services",
        servicesSubtitle: "We offer a comprehensive set of advanced digital solutions to meet the needs of the healthcare sector",
        whyTitle: "Why Choose Our Services?",
        whySubtitle: "We stand out by providing integrated solutions that combine technical expertise with deep understanding of healthcare needs",
        ctaTitle: "Ready to Develop Your Medical Institution?",
        ctaSubtitle: "Contact us now for a free consultation and start your digital transformation journey",
        ctaBtn: "Get a Free Consultation"
      }
    },

    // Service categories data (translated)
    serviceCategories: {
      ar: [
        {
          title: "تصميم مواقع طبية",
          description: "تصميم مواقع احترافي للعيادات والمستشفيات",
          tags: ["clinic", "مستشفى", "عيادات"],
          features: [
            { text: "مواقع العيادات المتخصصة", icon: <FaHospitalUser /> },
            { text: "مواقع المستشفيات الكبرى", icon: <FaHospitalUser /> },
            { text: "منصات طبية متكاملة", icon: <FaRegBuilding /> },
            { text: "الحجز الإلكتروني", icon: <FaCalendarCheck /> }
          ],
          stats: [
            { number: "50+", label: "موقع تم تنفيذه" },
            { number: "30+", label: "عيادة متخصصة" }
          ]
        },
        {
          title: "تطوير أنظمة إدارة",
          description: "حلول متكاملة لإدارة الحجوزات والمرضى",
          tags: ["أنظمة إدارة", "الحجوزات", "تقارير"],
          features: [
            { text: "نظام إدارة المستشفيات", icon: <FaHospitalUser /> },
            { text: "إدارة المرضى", icon: <FaUserMd /> },
            { text: "نظام حجوزات ذكي", icon: <FaCalendarCheck /> },
            { text: "تقارير تحليلية", icon: <FaFileAlt /> }
          ],
          stats: [
            { number: "100+", label: "نظام مُدار" },
            { number: "10K+", label: "مرضى مسجلين" }
          ]
        },
        {
          title: "بوتات ذكية",
          description: "روبوتات محادثة ذكية للمساعدة في الحجوزات",
          tags: ["بوتات", "ذكاء اصطناعي", "AI"],
          features: [
            { text: "بوتات حجز مواعيد ذكية", icon: <FaRobot /> },
            { text: "مساعد طبي آلي", icon: <FaHeartbeat /> },
            { text: "إجابة على استفسارات", icon: <FaHeadset /> },
            { text: "تكامل مع الأنظمة", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "500+", label: "بوت تم تطويره" },
            { number: "95%", label: "دقة الاستجابة" }
          ]
        },
        {
          title: "براندنج وهوية بصرية",
          description: "تصميم هوية متكاملة للعلامات التجارية الطبية",
          tags: ["براندنج", "شعار", "هوية بصرية"],
          features: [
            { text: "تصميم شعارات احترافية", icon: <FaPalette /> },
            { text: "هوية بصرية متكاملة", icon: <FaRegBuilding /> },
            { text: "دليل العلامة التجارية", icon: <FaFileAlt /> },
            { text: "تصاميم للمطبوعات", icon: <FaInstagram /> }
          ],
          stats: [
            { number: "200+", label: "شعار مصمم" },
            { number: "98%", label: "رضا العملاء" }
          ]
        },
        {
          title: "تصميم جرافيك",
          description: "تصاميم جرافيك احترافية للمطبوعات والإعلانات",
          tags: ["جرافيك", "تصميم", "انفوجرافيك"],
          features: [
            { text: "تصميم منشورات طبية", icon: <FaInstagram /> },
            { text: "انفوجرافيك طبي", icon: <FaChartBar /> },
            { text: "تصاميم إعلانات", icon: <FaFacebook /> },
            { text: "تصميم بروشورات", icon: <FaFileAlt /> }
          ],
          stats: [
            { number: "1000+", label: "تصميم منفذ" },
            { number: "4.9", label: "تقييم العملاء" }
          ]
        },
        {
          title: "موشن جرافيك",
          description: "فيديوهات موشن جرافيك احترافية للتعريف بالخدمات",
          tags: ["موشن", "فيديو", "رسوم متحركة"],
          features: [
            { text: "فيديوهات تعريفية", icon: <FaFilm /> },
            { text: "رسوم متحركة طبية", icon: <FaHeartbeat /> },
            { text: "فيديوهات إعلانية", icon: <FaBullhorn /> },
            { text: "قصص موشن جرافيك", icon: <FaVideo /> }
          ],
          stats: [
            { number: "300+", label: "فيديو منفذ" },
            { number: "2M+", label: "مشاهدة" }
          ]
        },
        {
          title: "لوحات تحكم طبية",
          description: "لوحات تحكم متقدمة لإدارة المستشفيات والعيادات",
          tags: ["لوحات تحكم", "تقارير", "تحليلات"],
          features: [
            { text: "لوحة تحكم المستشفى", icon: <FaHospitalUser /> },
            { text: "تقارير فورية", icon: <FaChartLine /> },
            { text: "تحليلات الأداء", icon: <FaChartBar /> },
            { text: "إدارة الموارد", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "50+", label: "لوحة تحكم" },
            { number: "24/7", label: "متابعة" }
          ]
        },
        {
          title: "تسويق رقمي طبي",
          description: "حملات إعلانية ذكية للوصول لمرضى جدد",
          tags: ["تسويق", "إعلانات", "clinic"],
          features: [
            { text: "إعلانات ممولة", icon: <FaFacebook /> },
            { text: "إدارة وسائل التواصل", icon: <FaInstagram /> },
            { text: "تحسين محركات البحث", icon: <FaChartLine /> },
            { text: "استراتيجيات تسويق", icon: <FaBullhorn /> }
          ],
          stats: [
            { number: "500+", label: "حملة ناجحة" },
            { number: "1M+", label: "وصول شهري" }
          ]
        },
        {
          title: "استشارات طبية عن بعد",
          description: "منصة متكاملة للاستشارات الطبية بالفيديو",
          tags: ["استشارات", "فيديو", "عن بعد"],
          features: [
            { text: "مكالمات فيديو عالية الجودة", icon: <FaVideo /> },
            { text: "جدولة المواعيد", icon: <FaClock /> },
            { text: "ملفات المرضى الرقمية", icon: <FaUserMd /> },
            { text: "تكامل مع الأنظمة", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "1000+", label: "استشارة شهرياً" },
            { number: "98%", label: "رضا المرضى" }
          ]
        },
        {
          title: "تطبيقات الجوال الطبية",
          description: "تطبيقات ذكية للمرضى والأطباء للمتابعة",
          tags: ["تطبيقات", "موبايل", "صحة"],
          features: [
            { text: "تطبيقات iOS و Android", icon: <FaMobileAlt /> },
            { text: "تذكير بالمواعيد", icon: <FaClock /> },
            { text: "متابعة الحالة الصحية", icon: <FaHeartbeat /> },
            { text: "مراسلة فورية", icon: <FaHeadset /> }
          ],
          stats: [
            { number: "10K+", label: "تحميل" },
            { number: "4.8", label: "تقييم" }
          ]
        },
        {
          title: "حلول السحابة الطبية",
          description: "تخزين آمن للملفات الطبية على السحابة",
          tags: ["سحابة", "أمان", "تخزين"],
          features: [
            { text: "تخزين آمن للبيانات", icon: <FaShieldAlt /> },
            { text: "نسخ احتياطي تلقائي", icon: <FaCloudUploadAlt /> },
            { text: "وصول عن بعد", icon: <FaMobileAlt /> },
            { text: "تشفير متقدم", icon: <FaShieldAlt /> }
          ],
          stats: [
            { number: "99.9%", label: "أمان البيانات" },
            { number: "24/7", label: "توفر" }
          ]
        },
        {
          title: "تحليلات طبية متقدمة",
          description: "ذكاء اصطناعي لتحليل البيانات الطبية",
          tags: ["تحليلات", "ذكاء اصطناعي", "تقارير"],
          features: [
            { text: "تحليل أداء العيادات", icon: <FaTachometerAlt /> },
            { text: "توقعات المرضى", icon: <FaRobot /> },
            { text: "تقارير فورية", icon: <FaFileAlt /> },
            { text: "ذكاء اصطناعي", icon: <FaChartLine /> }
          ],
          stats: [
            { number: "95%", label: "دقة التحليل" },
            { number: "50+", label: "مؤشر أداء" }
          ]
        }
      ],
      en: [
        {
          title: "Medical Website Design",
          description: "Professional website design for clinics and hospitals",
          tags: ["clinic", "hospital", "clinics"],
          features: [
            { text: "Specialized Clinic Websites", icon: <FaHospitalUser /> },
            { text: "Major Hospital Websites", icon: <FaHospitalUser /> },
            { text: "Integrated Medical Platforms", icon: <FaRegBuilding /> },
            { text: "Online Booking", icon: <FaCalendarCheck /> }
          ],
          stats: [
            { number: "50+", label: "Websites Delivered" },
            { number: "30+", label: "Specialized Clinics" }
          ]
        },
        {
          title: "Management Systems Development",
          description: "Integrated solutions for booking and patient management",
          tags: ["Management Systems", "Bookings", "Reports"],
          features: [
            { text: "Hospital Management System", icon: <FaHospitalUser /> },
            { text: "Patient Management", icon: <FaUserMd /> },
            { text: "Smart Booking System", icon: <FaCalendarCheck /> },
            { text: "Analytical Reports", icon: <FaFileAlt /> }
          ],
          stats: [
            { number: "100+", label: "Systems Managed" },
            { number: "10K+", label: "Registered Patients" }
          ]
        },
        {
          title: "Smart Bots",
          description: "Intelligent chatbots to assist with bookings",
          tags: ["Bots", "AI", "Artificial Intelligence"],
          features: [
            { text: "Smart Appointment Booking Bots", icon: <FaRobot /> },
            { text: "Automated Medical Assistant", icon: <FaHeartbeat /> },
            { text: "Answer Inquiries", icon: <FaHeadset /> },
            { text: "System Integration", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "500+", label: "Bots Developed" },
            { number: "95%", label: "Response Accuracy" }
          ]
        },
        {
          title: "Branding & Visual Identity",
          description: "Complete identity design for medical brands",
          tags: ["Branding", "Logo", "Visual Identity"],
          features: [
            { text: "Professional Logo Design", icon: <FaPalette /> },
            { text: "Integrated Visual Identity", icon: <FaRegBuilding /> },
            { text: "Brand Guideline", icon: <FaFileAlt /> },
            { text: "Print Design", icon: <FaInstagram /> }
          ],
          stats: [
            { number: "200+", label: "Logos Designed" },
            { number: "98%", label: "Client Satisfaction" }
          ]
        },
        {
          title: "Graphic Design",
          description: "Professional graphic designs for print and advertising",
          tags: ["Graphic", "Design", "Infographic"],
          features: [
            { text: "Medical Post Design", icon: <FaInstagram /> },
            { text: "Medical Infographics", icon: <FaChartBar /> },
            { text: "Ad Design", icon: <FaFacebook /> },
            { text: "Brochure Design", icon: <FaFileAlt /> }
          ],
          stats: [
            { number: "1000+", label: "Designs Completed" },
            { number: "4.9", label: "Client Rating" }
          ]
        },
        {
          title: "Motion Graphics",
          description: "Professional motion graphics videos to introduce services",
          tags: ["Motion", "Video", "Animation"],
          features: [
            { text: "Intro Videos", icon: <FaFilm /> },
            { text: "Medical Animations", icon: <FaHeartbeat /> },
            { text: "Ad Videos", icon: <FaBullhorn /> },
            { text: "Motion Story Videos", icon: <FaVideo /> }
          ],
          stats: [
            { number: "300+", label: "Videos Completed" },
            { number: "2M+", label: "Views" }
          ]
        },
        {
          title: "Medical Dashboards",
          description: "Advanced dashboards for hospital and clinic management",
          tags: ["Dashboards", "Reports", "Analytics"],
          features: [
            { text: "Hospital Dashboard", icon: <FaHospitalUser /> },
            { text: "Real-time Reports", icon: <FaChartLine /> },
            { text: "Performance Analytics", icon: <FaChartBar /> },
            { text: "Resource Management", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "50+", label: "Dashboards" },
            { number: "24/7", label: "Monitoring" }
          ]
        },
        {
          title: "Medical Digital Marketing",
          description: "Smart advertising campaigns to reach new patients",
          tags: ["Marketing", "Ads", "clinic"],
          features: [
            { text: "Paid Ads", icon: <FaFacebook /> },
            { text: "Social Media Management", icon: <FaInstagram /> },
            { text: "Search Engine Optimization", icon: <FaChartLine /> },
            { text: "Marketing Strategies", icon: <FaBullhorn /> }
          ],
          stats: [
            { number: "500+", label: "Successful Campaigns" },
            { number: "1M+", label: "Monthly Reach" }
          ]
        },
        {
          title: "Telemedicine Consultations",
          description: "Integrated platform for video medical consultations",
          tags: ["Consultations", "Video", "Remote"],
          features: [
            { text: "High-quality Video Calls", icon: <FaVideo /> },
            { text: "Appointment Scheduling", icon: <FaClock /> },
            { text: "Digital Patient Records", icon: <FaUserMd /> },
            { text: "System Integration", icon: <FaDatabase /> }
          ],
          stats: [
            { number: "1000+", label: "Monthly Consultations" },
            { number: "98%", label: "Patient Satisfaction" }
          ]
        },
        {
          title: "Medical Mobile Apps",
          description: "Smart apps for patients and doctors for follow-up",
          tags: ["Apps", "Mobile", "Health"],
          features: [
            { text: "iOS & Android Apps", icon: <FaMobileAlt /> },
            { text: "Appointment Reminders", icon: <FaClock /> },
            { text: "Health Status Tracking", icon: <FaHeartbeat /> },
            { text: "Instant Messaging", icon: <FaHeadset /> }
          ],
          stats: [
            { number: "10K+", label: "Downloads" },
            { number: "4.8", label: "Rating" }
          ]
        },
        {
          title: "Medical Cloud Solutions",
          description: "Secure storage of medical records on the cloud",
          tags: ["Cloud", "Security", "Storage"],
          features: [
            { text: "Secure Data Storage", icon: <FaShieldAlt /> },
            { text: "Automatic Backup", icon: <FaCloudUploadAlt /> },
            { text: "Remote Access", icon: <FaMobileAlt /> },
            { text: "Advanced Encryption", icon: <FaShieldAlt /> }
          ],
          stats: [
            { number: "99.9%", label: "Data Security" },
            { number: "24/7", label: "Availability" }
          ]
        },
        {
          title: "Advanced Medical Analytics",
          description: "AI for analyzing medical data",
          tags: ["Analytics", "AI", "Reports"],
          features: [
            { text: "Clinic Performance Analysis", icon: <FaTachometerAlt /> },
            { text: "Patient Predictions", icon: <FaRobot /> },
            { text: "Real-time Reports", icon: <FaFileAlt /> },
            { text: "Artificial Intelligence", icon: <FaChartLine /> }
          ],
          stats: [
            { number: "95%", label: "Analysis Accuracy" },
            { number: "50+", label: "KPIs" }
          ]
        }
      ]
    },

    // Additional features
    additionalFeatures: {
      ar: [
        {
          title: "دعم فني على مدار الساعة",
          description: "فريق دعم متخصص جاهز للإجابة على استفساراتك 24/7",
          icon: <FaHeadset />,
          color: "#0E74AB"
        },
        {
          title: "أمان وحماية البيانات",
          description: "تشفير متقدم لحماية بيانات المرضى والملفات الطبية",
          icon: <FaShieldAlt />,
          color: "#0E74AB"
        },
        {
          title: "تكامل مع الأنظمة الحالية",
          description: "سهولة التكامل مع أنظمة المستشفيات والعيادات الحالية",
          icon: <FaDatabase />,
          color: "#0E74AB"
        },
        {
          title: "تقارير وتحليلات متقدمة",
          description: "تقارير تفصيلية لتحسين أداء المؤسسة الطبية",
          icon: <FaChartLine />,
          color: "#0E74AB"
        }
      ],
      en: [
        {
          title: "24/7 Technical Support",
          description: "Dedicated support team ready to answer your inquiries around the clock",
          icon: <FaHeadset />,
          color: "#0E74AB"
        },
        {
          title: "Data Security & Protection",
          description: "Advanced encryption to protect patient data and medical records",
          icon: <FaShieldAlt />,
          color: "#0E74AB"
        },
        {
          title: "Integration with Existing Systems",
          description: "Easy integration with current hospital and clinic systems",
          icon: <FaDatabase />,
          color: "#0E74AB"
        },
        {
          title: "Advanced Reports & Analytics",
          description: "Detailed reports to improve the performance of your medical institution",
          icon: <FaChartLine />,
          color: "#0E74AB"
        }
      ]
    },

    // WhatsApp tooltip
    whatsappTooltip: {
      ar: "تواصل مع بوت المساعدة 📲",
      en: "Contact Support Bot 📲"
    },

    // Button text in service cards
    orderButton: {
      ar: "اطلب الخدمة",
      en: "Order Service"
    },

    // Features section header for service card
    featuresHeader: {
      ar: "المميزات",
      en: "Features"
    }
  };

  // Get current language data
  const currentLang = lang;

  // Helper to get translated service categories
  const getServiceCategories = () => {
    return translations.serviceCategories[currentLang].map((cat, idx) => ({
      ...cat,
      id: idx + 1,
      icon: getIconForIndex(idx),
      color: "#0E74AB"
    }));
  };

  // Map icons to match original order
  const getIconForIndex = (idx) => {
    const icons = [
      <FaLaptopCode />,
      <FaDatabase />,
      <FaRobot />,
      <FaPalette />,
      <FaPalette />,
      <FaFilm />,
      <FaTachometerAlt />,
      <FaBullhorn />,
      <FaVideo />,
      <FaMobileAlt />,
      <FaCloudUploadAlt />,
      <FaChartLine />
    ];
    return icons[idx % icons.length];
  };

  const serviceCategories = getServiceCategories();
  const additionalFeatures = translations.additionalFeatures[currentLang];

  // Language switcher component
  const LangSwitcher = () => (
    <button
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      style={{
        position: "fixed",
        top: "80px",
        right: "15px",
        zIndex: 800,
        background: "#0E74AB",
        color: "white",
        border: "none",
        borderRadius: "40px",
        padding: "8px 16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontFamily: "inherit",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
    >
      {lang === "ar" ? "English" : "العربية"}
    </button>
  );

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <LangSwitcher />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* WhatsApp Button */
        .whatsapp-float {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          background: linear-gradient(135deg, #0E74AB, #153651);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(14, 116, 171, 0.3);
          animation: pulse 2s infinite;
          text-decoration: none;
        }
        
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 25px rgba(14, 116, 171, 0.4);
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(14, 116, 171, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(14, 116, 171, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(14, 116, 171, 0);
          }
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 85vh;
          overflow: hidden;
        }
        
        .hero-slider {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .hero-slider img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          top: 0;
          left: 0;
        }
        
        .hero-slider img.active {
          opacity: 1;
        }
        
        .hero-section::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(26, 27, 27, 0.34), rgba(36, 39, 41, 0.42));
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          color: white;
          max-width: 600px;
          z-index: 2;
          animation: fadeInUp 0.8s ease;
        }
        
        .hero-overlay h1 {
          font-size: 52px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .hero-overlay h1 span {
          background: linear-gradient(135deg, #FCFDFD, #DCE9EE);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hero-overlay p {
          font-size: 18px;
          margin-bottom: 30px;
          line-height: 1.6;
          opacity: 0.95;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0E74AB, #153651);
          border: none;
          padding: 12px 32px;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(14, 116, 171, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(14, 116, 171, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          border: 2px solid white;
          padding: 12px 32px;
          color: white;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s;
        }
        
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: #0E74AB;
        }

        /* Services Section */
        .services-section {
          padding: 4rem 2rem;
          background: #FCFDFD;
          direction: rtl;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0E74AB, #153651);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.8rem;
        }
        
        .section-subtitle {
          font-size: 0.9rem;
          color: #8AA5A9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .service-card {
          background: #FCFDFD;
          border: 1px solid #DCE9EE;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          border-color: #0E74AB;
          box-shadow: 0 10px 25px rgba(14, 116, 171, 0.15);
        }
        
        .service-header {
          background: #DCE9EE;
          padding: 1rem;
          text-align: center;
          border-bottom: 1px solid #DCE9EE;
        }
        
        .service-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #0E74AB, #153651);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.6rem;
          font-size: 1.6rem;
          color: white;
        }
        
        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #153651;
          margin-bottom: 0.4rem;
        }
        
        .service-description {
          font-size: 0.8rem;
          color: #8AA5A9;
          line-height: 1.4;
        }
        
        .service-tags {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.8rem;
          flex-wrap: wrap;
        }
        
        .service-tag {
          background: rgba(14, 116, 171, 0.1);
          padding: 0.15rem 0.6rem;
          border-radius: 50px;
          font-size: 0.6rem;
          color: #0E74AB;
          font-weight: 600;
        }
        
        .service-content {
          padding: 1rem;
        }
        
        .features-list {
          margin-bottom: 1rem;
        }
        
        .features-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #153651;
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
          color: #8AA5A9;
          font-size: 0.7rem;
        }
        
        .feature-item svg {
          color: #0E74AB;
          font-size: 0.7rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 1rem;
          padding: 0.6rem 0;
          border-top: 1px solid #DCE9EE;
          border-bottom: 1px solid #DCE9EE;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #0E74AB, #153651);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 0.6rem;
          color: #8AA5A9;
          margin-top: 0.2rem;
        }
        
        .service-btn {
          width: 100%;
          background: linear-gradient(135deg, #0E74AB, #153651);
          border: none;
          padding: 0.6rem;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        
        .service-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(14, 116, 171, 0.3);
          gap: 0.6rem;
        }
        
        /* Additional Features Section */
        .features-section {
          padding: 3rem 2rem;
          background: #DCE9EE;
          direction: rtl;
          border-top: 1px solid #DCE9EE;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: #FCFDFD;
          border: 1px solid #DCE9EE;
          border-radius: 1rem;
          padding: 1.2rem;
          text-align: center;
          transition: all 0.3s;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .feature-card:hover {
          transform: translateY(-3px);
          border-color: #0E74AB;
          box-shadow: 0 8px 20px rgba(14, 116, 171, 0.1);
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #0E74AB, #153651);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.8rem;
          font-size: 1.3rem;
          color: white;
        }
        
        .feature-card h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #153651;
          margin-bottom: 0.4rem;
        }
        
        .feature-card p {
          font-size: 0.75rem;
          color: #8AA5A9;
          line-height: 1.4;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 3rem 2rem;
          background: #FCFDFD;
          text-align: center;
          direction: rtl;
          border-top: 1px solid #DCE9EE;
        }
        
        .cta-content h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #153651;
          margin-bottom: 0.8rem;
        }
        
        .cta-content p {
          font-size: 0.9rem;
          color: #8AA5A9;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .cta-btn {
          background: linear-gradient(135deg, #0E74AB, #153651);
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(14, 116, 171, 0.3);
          gap: 0.8rem;
        }

        @keyframes fadeInUp { 
          from {
            opacity: 0;
            transform: translateY(30px);
          } 
          to {
            opacity: 1;
            transform: translateY(-50%);
          } 
        }

        /* Responsive */
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            height: 70vh;
          }
          .hero-overlay {
            left: 5%;
            right: 5%;
            text-align: center;
            max-width: 90%;
          }
          .hero-overlay h1 {
            font-size: 32px;
          }
          .hero-overlay p {
            font-size: 14px;
          }
          .services-section,
          .features-section,
          .cta-section {
            padding: 2rem 1rem;
          }
          .section-title {
            font-size: 1.6rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
          .service-title {
            font-size: 1.1rem;
          }
          .cta-content h2 {
            font-size: 1.3rem;
          }
          .whatsapp-float {
            width: 50px;
            height: 50px;
            font-size: 1.6rem;
            bottom: 20px;
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-overlay h1 {
            font-size: 24px;
          }
          .btn-primary,
          .btn-secondary {
            padding: 8px 20px;
            font-size: 13px;
          }
          .whatsapp-float {
            width: 45px;
            height: 45px;
            font-size: 1.4rem;
            bottom: 15px;
            right: 15px;
          }
        }
      `}</style>

      <a 
        href="https://wa.me/201234567890?text=السلام%20عليكم%20أحتاج%20استشارة%20حول%20الخدمات%20الطبية" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ fontSize: "50px" }}>🤖</span>
        <span className="tooltip" style={{
          position: "absolute",
          bottom: "70px",
          right: "0",
          backgroundColor: "#000",
          color: "#25D366",
          padding: "5px 10px",
          borderRadius: "20px",
          fontSize: "12px",
          whiteSpace: "nowrap",
          opacity: 0,
          transition: "opacity 0.3s",
          pointerEvents: "none"
        }}>
          {translations.whatsappTooltip[currentLang]}
        </span>
      </a>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Medical ${index + 1}`} 
              className={index === current ? "active" : ""} 
            />
          ))}
        </div>
        <div className="hero-overlay">
          <h1>
            {translations.hero[currentLang].title}
          </h1>
          <p>
            {translations.hero[currentLang].subtitle}
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">{translations.hero[currentLang].btnOrder}</button>
            <button className="btn-secondary">{translations.hero[currentLang].btnLearn}</button>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">{translations.sectionHeaders[currentLang].servicesTitle}</h2>
          <p className="section-subtitle">{translations.sectionHeaders[currentLang].servicesSubtitle}</p>
        </div>
        <div className="services-grid">
          {serviceCategories.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="service-content">
                <div className="features-list">
                  <div className="features-title">
                    <FaCheckCircle /> {translations.featuresHeader[currentLang]}
                  </div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      {feature.icon}
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="stats-grid">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="stat-item">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <button className="service-btn">
                  {translations.orderButton[currentLang]} <FaArrowLeft />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">{translations.sectionHeaders[currentLang].whyTitle}</h2>
          <p className="section-subtitle">{translations.sectionHeaders[currentLang].whySubtitle}</p>
        </div>
        <div className="features-grid">
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{translations.sectionHeaders[currentLang].ctaTitle}</h2>
          <p>{translations.sectionHeaders[currentLang].ctaSubtitle}</p>
          <button className="cta-btn">
            {translations.sectionHeaders[currentLang].ctaBtn} <FaArrowLeft />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;