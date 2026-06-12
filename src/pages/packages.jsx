// pages/Packages.jsx
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// ==================== Animations ====================

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulseRing = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(30, 111, 142, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(30, 111, 142, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(30, 111, 142, 0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const robotWave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// ==================== Styled Components ====================

const PageContainer = styled.div`
  font-family: 'Cairo', 'Segoe UI', 'Tahoma', sans-serif;
  background: #d8e4e7d7;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(79, 163, 199, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 70px 0 50px;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(30, 111, 142, 0.15);
  backdrop-filter: blur(10px);
  padding: 8px 24px;
  border-radius: 60px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #1E6F8E;
  margin-bottom: 24px;
  border: 1px solid rgba(30, 111, 142, 0.3);
  letter-spacing: 0.5px;
  
  &:hover {
    background: rgba(30, 111, 142, 0.25);
    transform: scale(1.02);
    transition: all 0.3s ease;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1E6F8E, #0F4C5C, #1E6F8E);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.05);

  @media (max-width: 800px) {
    font-size: 2.3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #2C5A6E;
  max-width: 800px;
  margin: 0 auto 20px;
  font-weight: 500;
  line-height: 1.7;
  text-align: ${props => props.dir === 'rtl' ? 'right' : 'left'};
`;

const BotHighlight = styled.span`
  background: linear-gradient(135deg, #1E6F8E, #0F4C5C);
  padding: 4px 12px;
  border-radius: 40px;
  font-weight: 700;
  display: inline-block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #FFFFFF;
`;

const PackagesSection = styled.section`
  padding: 50px 0 80px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: #1E6F8E;
  position: relative;
  text-shadow: 0 2px 4px rgba(0,0,0,0.05);

  &:after {
    content: "";
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #1E6F8E, #4FA3C7, #1E6F8E);
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 4px;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 750px;
  margin: 25px auto 0;
  color: #2C5A6E;
  font-size: 1.1rem;
`;

const PackagesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 70px;
`;

const PackageCard = styled.div`
  background: ${props => props.popular ? 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%)' : '#FFFFFF'};
  border-radius: 48px;
  padding: 32px 28px;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  box-shadow: 0 25px 45px -18px rgba(0, 0, 0, 0.15);
  border: 1px solid ${props => props.popular ? 'rgba(30, 111, 142, 0.5)' : 'rgba(30, 111, 142, 0.2)'};
  position: relative;
  animation: ${scaleIn} 0.5s ease-out backwards;
  animation-delay: ${props => props.delay || '0s'};
  
  &:hover {
    transform: translateY(-16px) scale(1.02);
    box-shadow: 0 40px 60px -20px rgba(0, 0, 0, 0.25);
    border-color: ${props => props.popular ? '#1E6F8E' : '#4FA3C7'};
  }
`;

const PopularRibbon = styled.div`
  position: absolute;
  top: -14px;
  ${props => props.dir === 'rtl' ? 'left: 24px;' : 'right: 24px;'}
  background: linear-gradient(135deg, #1E6F8E, #0F4C5C);
  color: #FFFFFF;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 6px 16px;
  border-radius: 60px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '🤖';
    font-size: 0.85rem;
  }
`;

const PackageIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 16px;
  text-align: center;
`;

const PackageName = styled.h3`
  font-size: 1.7rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: linear-gradient(120deg, #1E6F8E, #4FA3C7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const PackageDesc = styled.div`
  font-size: 0.85rem;
  color: #666666;
  margin-bottom: 20px;
  border-bottom: 2px solid #F2F4F7;
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
`;

const Price = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #1E6F8E;
  margin: 20px 0 8px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
`;

const PriceSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #666666;
`;

const PriceNote = styled.div`
  font-size: 0.7rem;
  color: #1E6F8E;
  background: #F2F4F7;
  padding: 6px 12px;
  border-radius: 40px;
  display: inline-block;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 24px 0 28px;
  padding: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 0.85rem;
  color: #333333;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateX(5px);
  }

  span {
    width: 22px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #1E6F8E, #4FA3C7);
    border-radius: 50%;
    color: white;
    font-size: 0.7rem;
    flex-shrink: 0;
  }
`;

const ButtonStart = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  background: #F2F4F7;
  padding: 12px 0;
  border-radius: 60px;
  font-weight: 800;
  font-size: 0.95rem;
  color: #1E6F8E;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid #E0E6ED;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(30, 111, 142, 0.15), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #1E6F8E, #0F4C5C);
    color: white;
    border-color: #1E6F8E;
    transform: translateY(-2px);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ExtraFeaturesBox = styled.div`
  background: linear-gradient(135deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95));
  border-radius: 48px;
  padding: 32px 36px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 60px;
  transition: all 0.4s ease;
  border: 1px solid rgba(30, 111, 142, 0.2);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 50px -16px rgba(0, 0, 0, 0.2);
  }
`;

const ExtraFeaturesTitle = styled.h3`
  margin: 12px 0 8px;
  font-size: 1.7rem;
  background: linear-gradient(135deg, #1E6F8E, #4FA3C7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
`;

const FeaturesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
  margin-top: 20px;
`;

const FeatureTag = styled.span`
  background: #F2F4F7;
  border-radius: 60px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1E6F8E;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    background: linear-gradient(135deg, #1E6F8E, #4FA3C7);
    color: white;
    transform: translateY(-3px);
  }
`;

const CTAContainer = styled.div`
  background: linear-gradient(135deg, #1E6F8E, #0F4C5C, #1E6F8E);
  background-size: 200% 200%;
  border-radius: 56px;
  padding: 56px 40px;
  text-align: center;
  margin: 50px 0 60px;
  color: white;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.2);
  animation: ${shimmer} 8s ease infinite;
  
  &:hover {
    transform: scale(1.01);
    transition: transform 0.4s ease;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  opacity: 0.95;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  background: #FFFFFF;
  color: #1E6F8E;
  padding: 14px 42px;
  border-radius: 60px;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.05rem;
  
  &:hover {
    background: #F2F4F7;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 40px 0 50px;
  border-top: 1px solid rgba(30, 111, 142, 0.2);
  color: #2C5A6E;
  font-size: 0.85rem;
  margin-top: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const FooterLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    color: #1E6F8E;
  }
`;

// Robot-shaped WhatsApp button - Fixed and never disappears
const RobotButton = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #1c7b81, #2b787e);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  animation: ${pulseRing} 2s infinite;
  
  &:hover {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 35px rgba(37, 211, 102, 0.5);
  }
`;

const RobotIcon = styled.div`
  font-size: 42px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  animation: ${robotWave} 3s ease-in-out infinite;
  transform-origin: center;
`;

const RobotTooltip = styled.span`
  position: absolute;
  bottom: 85px;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  color: #25D366;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  font-family: 'Cairo', sans-serif;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: translateX(15px);
  transition: all 0.3s ease;
  pointer-events: none;
  letter-spacing: 0.3px;
  border: 1px solid rgba(37, 211, 102, 0.5);
  z-index: 1000;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 28px;
    border-width: 8px 8px 0 8px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.9) transparent transparent transparent;
  }
  
  ${RobotButton}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Language Switcher Button
const LangSwitcher = styled.button`
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 800;
  background: #1E6F8E;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  
  &:hover {
    background: #0F4C5C;
    transform: scale(1.05);
  }
`;

// ==================== Translations ====================

const translations = {
  // Hero
  badge: {
    ar: '🤖 رواد التكنولوجيا في القطاع الطبي',
    en: '🤖 Technology Pioneers in Healthcare'
  },
  title: {
    ar: 'حلول والتحول الرقمي',
    en: 'Digital Solutions & Transformation'
  },
  subtitle: {
    ar: `نحن شركة متخصصة في تقديم حلول رقمية متكاملة للقطاع الطبي، نعمل على تمكين المؤسسات الصحية من تحقيق نمو حقيقي في عصر التحول الرقمي.

نساعد العيادات، المراكز الطبية، والمستشفيات على تطوير أعمالها من خلال دمج التكنولوجيا الذكية مع استراتيجيات تسويقية فعّالة وأنظمة تشغيل متطورة.
كل ما نقدمه مبني على فهم عميق لطبيعة السوق الطبي واحتياجات المرضى، بهدف تحسين الأداء وخلق تجربة صحية أكثر كفاءة واحترافية.

نؤمن أن النجاح في المجال الطبي اليوم لا يعتمد فقط على جودة الخدمة، بل على القدرة على الإدارة الذكية، والوصول الصحيح للمرضى، وبناء حضور رقمي قوي ومستدام.

رؤيتنا`,
    en: `We are a company specialized in providing integrated digital solutions for the healthcare sector. We empower healthcare institutions to achieve real growth in the era of digital transformation.

We help clinics, medical centers, and hospitals develop their businesses by integrating smart technology with effective marketing strategies and advanced operating systems.
Everything we offer is built on a deep understanding of the medical market and patient needs, aiming to improve performance and create a more efficient and professional healthcare experience.

We believe that success in the medical field today depends not only on service quality, but also on smart management, proper patient outreach, and building a strong and sustainable digital presence.

Our Vision`
  },
  botHighlight: {
    ar: '🤖 نقدم تجربة رائعة في المجال الطبي | دعم فوري 24/7',
    en: '🤖 Excellent experience in healthcare | 24/7 Instant Support'
  },
  // Packages section
  packagesTitle: {
    ar: 'باقات الذكية للقطاع الطبي',
    en: 'Smart Packages for Healthcare'
  },
  packagesDesc: {
    ar: 'اختر البوت المناسب لعيادتك – أنظمة محادثة ذكية تعمل بالذكاء الاصطناعي لتسهيل التواصل مع المرضى وتحسين تجربة الحجز والمتابعة',
    en: 'Choose the right bot for your clinic – AI-powered smart conversation systems to facilitate communication with patients and improve booking and follow-up experience.'
  },
  extraFeaturesTitle: {
    ar: 'جميع باقات تشمل',
    en: 'All Packages Include'
  },
  extraTags: {
    ar: ['دعم فني 24/7', 'تحديثات مستمرة', 'تدريب على الاستخدام', 'تسليم خلال 3 أيام', 'تكامل مع أنظمة العيادات'],
    en: ['24/7 Technical Support', 'Continuous Updates', 'Usage Training', 'Delivery within 3 Days', 'Integration with Clinic Systems']
  },
  ctaText: {
    ar: 'انضم إلى أكثر من 250 عيادة ومركز طبي يستخدمون خبرتنا في المجال الطبي. وفر وقت المرضى، زود كفاءة الحجز، وحسن تجربة العملاء بنسبة تصل إلى 90%',
    en: 'Join over 250 clinics and medical centers using our expertise in healthcare. Save patients’ time, increase booking efficiency, and improve customer experience by up to 90%.'
  },
  ctaButton: {
    ar: 'احصل على استشارة مجانية ←',
    en: 'Get a Free Consultation ←'
  },
  footerLinks: {
    ar: ['🤖 بوتات ذكية للقطاع الطبي', '🎧 دعم فني على مدار الساعة', '📊 تحليلات ذكية وتقارير', '🔒 أمان وخصوصية طبية'],
    en: ['🤖 Smart Bots for Healthcare', '🎧 24/7 Technical Support', '📊 Smart Analytics & Reports', '🔒 Medical Security & Privacy']
  },
  footerText: {
    ar: '© 2025 جميع الحقوق محفوظة | شركة متخصصة في تطوير والحلول الرقمية المتكاملة للقطاع الطبي',
    en: '© 2025 All Rights Reserved | A Company Specialized in Development & Integrated Digital Solutions for the Healthcare Sector'
  },
  robotTooltip: {
    ar: 'تواصل مع بوت المساعدة 📲',
    en: 'Contact Support Bot 📲'
  },
  // Package fields (will be mapped per package)
  packageName: {
    ar: [
      'بوت المحادثة الأساسي',
      'الباقة القياسية + نظام حجز',
      'الباقة الاساسية',
      'بوت متعدد القنوات',
      'بوت المتابعة والعناية',
      'الباقة البريميم',
      'الباقة القياسية'
    ],
    en: [
      'Basic Chatbot',
      'Standard Package + Booking System',
      'Basic Package',
      'Multi-Channel Bot',
      'Follow-up & Care Bot',
      'Premium Package',
      'Standard Package'
    ]
  },
  packageDesc: {
    ar: [
      'بوت دردشة ذكي للرد على الاستفسارات',
      'نظام حجز مواعيد بالكامل',
      'استشارات أولية بالذكاء الاصطناعي',
      'بوت موحد لجميع المنصات',
      'متابعة المرضى بعد الخدمة',
      'منصات طبية متكامله',
      'باقة متوسطه + نظام متابعه'
    ],
    en: [
      'Smart chatbot to answer inquiries',
      'Complete appointment booking system',
      'Initial AI consultations',
      'Unified bot for all platforms',
      'Patient follow-up after service',
      'Integrated medical platforms',
      'Medium package + follow-up system'
    ]
  },
  packageFeatures: {
    ar: [
      ['ردود تلقائية على الأسئلة الشائعة', 'توجيه المرضى للأقسام المناسبة', 'دعم فني لمدة شهر', 'سهل التثبيت على الموقع', 'تقارير أسبوعية'],
      ['حجز مواعيد تلقائي 24/7', 'موقع + داش بورد', '5 صفحات', 'إدارة قوائم الانتظار', 'SEO أساسي'],
      ['موقع بسيط', '3 صفحات', 'دعم شهر'],
      ['يعمل على واتساب وفيسبوك وانستجرام', 'موقع وتطبيق موحد', 'مركز تحكم واحد', 'ردود ذكية متقدمة', 'تقارير وتحليلات'],
      ['تذكيرات بالمتابعة والعلاج', 'استبيانات رضا المرضى', 'تقييم جودة الخدمة', 'متابعة الالتزام بالعلاج', 'إشعارات دورية'],
      ['داش بورد', '4 صفحات', 'مؤشرات الأداء الرئيسية', 'لوحة تحكم متقدمة'],
      ['لاندنج بيج', 'تكامل مع أنظمة الذكاء الاصطناعي', 'دعم صوتي ومحادثة نصية', 'تكون واجه لعياداتك الكترونيه']
    ],
    en: [
      ['Automatic answers to FAQs', 'Guide patients to appropriate departments', 'One month technical support', 'Easy website installation', 'Weekly reports'],
      ['24/7 automatic appointment booking', 'Website + dashboard', '5 pages', 'Queue management', 'Basic SEO'],
      ['Simple website', '3 pages', 'One month support'],
      ['Works on WhatsApp, Facebook, Instagram', 'Unified website & app', 'Single control center', 'Advanced smart replies', 'Reports & analytics'],
      ['Follow-up & treatment reminders', 'Patient satisfaction surveys', 'Service quality evaluation', 'Treatment adherence monitoring', 'Periodic notifications'],
      ['Dashboard', '4 pages', 'Key performance indicators', 'Advanced control panel'],
      ['Landing page', 'Integration with AI systems', 'Voice & text chat support', 'Digital interface for your clinics']
    ]
  },
  packagePrice: ['1,500', '2,500', '3,200', '4,200', '2,800', '3,500', '5,900'],
  packagePeriod: {
    ar: 'EGP / شهر',
    en: 'EGP / month'
  },
  packageNote: {
    ar: [
      'بدون رسوم إضافية',
      'يقلل وقت الانتظار بنسبة 70%',
      'مدرب على آلاف الحالات الطبية',
      'تغطية كاملة لكل القنوات',
      'يزيد رضا المرضى بنسبة 85%',
      'منصه طبية تساعدك علي متابعه كل حاجه في عيادتك او معملك',
      ''
    ],
    en: [
      'No additional fees',
      'Reduces waiting time by 70%',
      'Trained on thousands of medical cases',
      'Complete coverage for all channels',
      'Increases patient satisfaction by 85%',
      'Medical platform to help you follow everything in your clinic or lab',
      ''
    ]
  },
  popularRibbon: {
    ar: 'الأكثر طلباً',
    en: 'Most Popular'
  },
  buttonText: {
    ar: 'اطلب الباقة الآن ←',
    en: 'Order Now ←'
  }
};

// ==================== Components ====================

const HeroSectionComponent = ({ lang }) => {
  return (
    <HeroSection>
      <Badge>{translations.badge[lang]}</Badge>
      <Title>{translations.title[lang]}</Title>
      <Subtitle dir={lang === 'ar' ? 'rtl' : 'ltr'}>{translations.subtitle[lang]}</Subtitle>
      <BotHighlight>{translations.botHighlight[lang]}</BotHighlight>
    </HeroSection>
  );
};

const PackagesSectionComponent = ({ lang }) => {
  const packagesData = translations.packageName[lang].map((name, idx) => ({
    name,
    icon: ['💬', '📅', '📊', '📱', '📊', '📊', '📊'][idx],
    desc: translations.packageDesc[lang][idx],
    features: translations.packageFeatures[lang][idx],
    price: translations.packagePrice[idx],
    period: translations.packagePeriod[lang],
    note: translations.packageNote[lang][idx],
    popular: idx === 1, // second package is popular
    delay: `${0.05 + idx * 0.05}s`
  }));

  return (
    <PackagesSection>
      <SectionTitle>{translations.packagesTitle[lang]}</SectionTitle>
      <SectionDescription>{translations.packagesDesc[lang]}</SectionDescription>

      <PackagesGrid>
        {packagesData.map((pkg, index) => (
          <PackageCard key={index} popular={pkg.popular} delay={pkg.delay}>
            {pkg.popular && <PopularRibbon dir={lang === 'ar' ? 'rtl' : 'ltr'}>{translations.popularRibbon[lang]}</PopularRibbon>}
            <PackageIcon>{pkg.icon}</PackageIcon>
            <PackageName>{pkg.name}</PackageName>
            <PackageDesc>
              <span>🤖</span> {pkg.desc}
            </PackageDesc>
            <FeaturesList>
              {pkg.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <span>✓</span> {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <Price>
              {pkg.price} <PriceSpan>{pkg.period}</PriceSpan>
            </Price>
            {pkg.note && <PriceNote>⏱️ {pkg.note}</PriceNote>}
            <ButtonStart to="/contact">{translations.buttonText[lang]}</ButtonStart>
          </PackageCard>
        ))}
      </PackagesGrid>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ExtraFeaturesBox>
          <div style={{ fontSize: '2.5rem', color: '#1E6F8E' }}>🤖</div>
          <ExtraFeaturesTitle>{translations.extraFeaturesTitle[lang]}</ExtraFeaturesTitle>
          <FeaturesTags>
            {translations.extraTags[lang].map((tag, i) => (
              <FeatureTag key={i}>{tag}</FeatureTag>
            ))}
          </FeaturesTags>
        </ExtraFeaturesBox>
      </div>
    </PackagesSection>
  );
};

const CTASection = ({ lang }) => {
  return (
    <CTAContainer>
      <CTAText>{translations.ctaText[lang]}</CTAText>
      <CTAButton to="/contact">{translations.ctaButton[lang]}</CTAButton>
    </CTAContainer>
  );
};

const PageFooter = ({ lang }) => {
  return (
    <FooterContainer>
      <FooterLinks>
        {translations.footerLinks[lang].map((link, i) => (
          <FooterLink key={i}>{link}</FooterLink>
        ))}
      </FooterLinks>
      <p>{translations.footerText[lang]}</p>
    </FooterContainer>
  );
};

const FloatingRobotWhatsApp = ({ lang }) => {
  return (
    <RobotButton 
      href="https://wa.me/201234567890?text=السلام%20عليكم%20أحتاج%20استشارة%20حول%20البوتات%20الذكية"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RobotIcon>🤖</RobotIcon>
      <RobotTooltip>{translations.robotTooltip[lang]}</RobotTooltip>
    </RobotButton>
  );
};

// ==================== Main Component ====================

const Packages = () => {
  const [lang, setLang] = useState('ar'); // 'ar' or 'en'

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <PageContainer dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <LangSwitcher onClick={toggleLang}>
        {lang === 'ar' ? 'English' : 'العربية'}
      </LangSwitcher>
      <Container>
        <HeroSectionComponent lang={lang} />
        <PackagesSectionComponent lang={lang} />
        <CTASection lang={lang} />
        <PageFooter lang={lang} />
      </Container>
      <FloatingRobotWhatsApp lang={lang} />
    </PageContainer>
  );
};

export default Packages;