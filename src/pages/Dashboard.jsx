// Dashboard.jsx - Fully Functional Version with Bilingual Support
import React, { useState, useEffect, useCallback } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaBell,
  FaTasks,
  FaCreditCard,
  FaChartLine,
  FaWallet,
  FaFileInvoice,
  FaSyncAlt,
  FaExclamationTriangle,
  FaSpinner,
  FaRegCheckCircle,
  FaShieldAlt,
  FaDownload,
  FaEye,
  FaArrowRight,
  FaCrown,
} from "react-icons/fa";
import { MdPendingActions, MdRefresh, MdWarning, MdPayment } from "react-icons/md";

const SmartDashboard = () => {
  // ==================== LANGUAGE STATE ====================
  const [lang, setLang] = useState("ar");

  // ==================== TRANSLATIONS ====================
  const translations = {
    sidebar: {
      ar: { logo: "SmartPanel", menuDashboard: "لوحة التحكم", menuSubscription: "الاشتراك", menuPayments: "المدفوعات", menuNotifications: "الإشعارات", menuPortfolio: "الأعمال", autoCheckLabel: "تحديث تلقائي", lastCheck: "آخر تحديث" },
      en: { logo: "SmartPanel", menuDashboard: "Dashboard", menuSubscription: "Subscription", menuPayments: "Payments", menuNotifications: "Notifications", menuPortfolio: "Portfolio", autoCheckLabel: "Auto Check", lastCheck: "Last check" }
    },
    navbar: {
      ar: { welcome: "مرحباً بعودتك، أحمد! 👋", subText: "لوحة تحكم ذكية مع مراقبة تلقائية للحالة" },
      en: { welcome: "Welcome Back, Ahmed! 👋", subText: "Smart dashboard with automatic status monitoring" }
    },
    cards: {
      ar: { subscription: "حالة الاشتراك", projects: "نظرة عامة على المشاريع", paymentHealth: "صحة الدفع", inProgress: "قيد التنفيذ", pending: "قيد المراجعة", completed: "مكتمل", projectNeedsAttention: "مشروع(مشاريع) تحتاج اهتمام", lastPayment: "آخر دفعة", nextPayment: "الدفعة القادمة", renews: "التجديد", daysLeft: "أيام متبقية" },
      en: { subscription: "Subscription Status", projects: "Projects Overview", paymentHealth: "Payment Health", inProgress: "In Progress", pending: "Pending", completed: "Completed", projectNeedsAttention: "project(s) need attention", lastPayment: "Last Payment", nextPayment: "Next Payment", renews: "Renews", daysLeft: "days left" }
    },
    projectTable: {
      ar: { title: "جميع المشاريع", checkStatus: "تحديث الحالة", projectName: "اسم المشروع", status: "الحالة", progress: "التقدم", dueDate: "تاريخ الاستحقاق", lastUpdate: "آخر تحديث", actions: "إجراءات", view: "عرض", overdue: "متأخر" },
      en: { title: "All Projects Status", checkStatus: "Check Status", projectName: "Project Name", status: "Status", progress: "Progress", dueDate: "Due Date", lastUpdate: "Last Update", actions: "Actions", view: "View", overdue: "Overdue" }
    },
    paymentTable: {
      ar: { title: "سجل المدفوعات والفواتير", refresh: "تحديث", invoice: "رقم الفاتورة", date: "التاريخ", amount: "المبلغ", method: "طريقة الدفع", status: "الحالة", action: "إجراء", download: "تحميل", retry: "إعادة المحاولة", processing: "قيد المعالجة", paid: "مدفوع", pendingReview: "قيد المراجعة", failed: "فشل" },
      en: { title: "Payment History & Invoices", refresh: "Refresh", invoice: "Invoice #", date: "Date", amount: "Amount", method: "Method", status: "Status", action: "Action", download: "PDF", retry: "Retry", processing: "Processing", paid: "Paid", pendingReview: "Pending Review", failed: "Failed" }
    },
    buttons: {
      ar: { payNow: "ادفع الآن", upgradePlan: "ترقية الباقة", viewAllInvoices: "عرض جميع الفواتير", markAllRead: "تحديد الكل كمقروء" },
      en: { payNow: "Pay Now", upgradePlan: "Upgrade Plan", viewAllInvoices: "View All Invoices", markAllRead: "Mark all as read" }
    },
    notifications: {
      ar: { title: "إشعارات وتنبيهات ذكية", noNotifications: "لا توجد إشعارات جديدة" },
      en: { title: "Smart Notifications & Alerts", noNotifications: "No new notifications" }
    },
    statusMessages: {
      ar: {
        projectOverdue: (name, days) => `مشروع "${name}" متأخر ${days} يومًا!`,
        noUpdates: (name, days) => `⚠️ لا توجد تحديثات على "${name}" منذ ${days} أيام. يرجى التحقق من التقدم.`,
        subscriptionExpiring: (days) => `⚠️ اشتراكك ينتهي بعد ${days} أيام! يرجى التجديد لتجنب انقطاع الخدمة.`,
        subscriptionExpired: "❌ انتهى اشتراكك! يرجى التجديد فورًا لاستعادة الخدمات.",
        paymentOverdue: (amount, days) => `⚠️ دفعة ${amount} متأخرة ${Math.abs(days)} أيام!`,
        upcomingPayment: (amount, days) => `💳 دفعة قادمة بقيمة ${amount} بعد ${days} أيام`,
        failedPayments: (count) => `⚠️ لديك ${count} دفعة فاشلة في السجل. يرجى تحديث طريقة الدفع.`,
        paymentProcessing: "🔄 جاري معالجة الدفع...",
        paymentSuccess: "✓ تمت معالجة الدفع بنجاح! شكراً لك.",
        downloadingInvoice: (inv) => `📄 جاري تحميل الفاتورة ${inv}...`,
        invoiceDownloaded: (inv) => `✓ تم تحميل الفاتورة ${inv} بنجاح!`,
        retryingPayment: (amount) => `🔄 إعادة محاولة الدفع بقيمة ${amount}...`,
        retrySuccess: (amount) => `✓ تمت معالجة الدفع بقيمة ${amount} بنجاح!`,
        openingProject: (name) => `📂 فتح المشروع: ${name}`,
        refreshingHistory: "🔄 تحديث سجل المدفوعات...",
        historyUpdated: "✓ تم تحديث سجل المدفوعات!",
        markedRead: "✓ تم تحديد جميع الإشعارات كمقروءة",
        systemCheck: "✓ اكتمل الفحص الآلي. جميع الحالات محدثة.",
        loadingUpgrade: "🔄 جاري تحميل خيارات الترقية...",
        upgradeAvailable: "✨ الخطط المميزة متاحة! اتصل بالمبيعات للحصول على عرض مخصص.",
      },
      en: {
        projectOverdue: (name, days) => `Project "${name}" is ${days} day(s) overdue!`,
        noUpdates: (name, days) => `⚠️ No updates on "${name}" for ${days} days. Please check progress.`,
        subscriptionExpiring: (days) => `⚠️ Your subscription expires in ${days} days! Please renew to avoid service interruption.`,
        subscriptionExpired: "❌ Your subscription has expired! Please renew immediately to restore services.",
        paymentOverdue: (amount, days) => `⚠️ Payment of ${amount} is overdue by ${Math.abs(days)} days!`,
        upcomingPayment: (amount, days) => `💳 Upcoming payment of ${amount} in ${days} days`,
        failedPayments: (count) => `⚠️ You have ${count} failed payment(s) in your history. Please update your payment method.`,
        paymentProcessing: "🔄 Processing payment...",
        paymentSuccess: "✓ Payment processed successfully! Thank you for your business.",
        downloadingInvoice: (inv) => `📄 Downloading invoice ${inv}...`,
        invoiceDownloaded: (inv) => `✓ Invoice ${inv} downloaded successfully!`,
        retryingPayment: (amount) => `🔄 Retrying payment for ${amount}...`,
        retrySuccess: (amount) => `✓ Payment of ${amount} processed successfully!`,
        openingProject: (name) => `📂 Opening project: ${name}`,
        refreshingHistory: "🔄 Refreshing payment history...",
        historyUpdated: "✓ Payment history updated!",
        markedRead: "✓ All notifications marked as read",
        systemCheck: "✓ System check completed successfully. All statuses are up to date.",
        loadingUpgrade: "🔄 Loading upgrade options...",
        upgradeAvailable: "✨ Premium plans are available! Contact sales for a custom quote.",
      }
    }
  };

  // ==================== STATE MANAGEMENT ====================
  const [subscription, setSubscription] = useState({
    plan: "Website Package Pro",
    services: ["Custom Website Design", "SEO Optimization", "Monthly Maintenance", "24/7 Support"],
    startDate: "2024-01-15",
    expiryDate: "2025-05-15",
    price: "$299/month",
    isActive: true,
    daysRemaining: 20,
    autoRenew: true,
  });

  const [projects, setProjects] = useState([
    { id: 1, name: "Company Website Redesign", status: "in-progress", progress: 65, currentTask: "Frontend Development - Homepage", lastUpdate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), dueDate: "2025-05-20", priority: "high", daysOverdue: 0, needsAttention: false },
    { id: 2, name: "SEO Optimization Campaign", status: "pending-review", progress: 95, currentTask: "Final Report Generation", lastUpdate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), dueDate: "2025-05-05", priority: "medium", daysOverdue: 0, needsAttention: false },
    { id: 3, name: "Mobile App Integration", status: "completed", progress: 100, currentTask: "Project Delivered", lastUpdate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), dueDate: "2025-04-30", priority: "low", daysOverdue: 0, needsAttention: false },
  ]);

  const [payments, setPayments] = useState({
    currentStatus: "paid",
    lastPayment: { amount: "$299", date: "2025-04-15", method: "VISA •••• 4242" },
    nextPayment: { amount: "$299", date: "2025-05-15" },
    history: [
      { id: 1, date: "2025-04-15", amount: "$299", status: "paid", invoice: "INV-2025-001", method: "VISA" },
      { id: 2, date: "2025-03-15", amount: "$299", status: "paid", invoice: "INV-2025-002", method: "VISA" },
      { id: 3, date: "2025-02-15", amount: "$299", status: "pending-review", invoice: "INV-2025-003", method: "Bank Transfer" },
      { id: 4, date: "2025-01-15", amount: "$299", status: "failed", invoice: "INV-2025-004", method: "VISA" },
      { id: 5, date: "2024-12-15", amount: "$299", status: "paid", invoice: "INV-2024-005", method: "VISA" },
    ],
    failedAlertShown: false,
  });

  const [notifications, setNotifications] = useState([
    { id: 1, type: "project", message: "Your homepage design is ready for review", time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), read: false, priority: "high" },
    { id: 2, type: "payment", message: "Payment of $299 received successfully", time: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), read: false, priority: "medium" },
    { id: 3, type: "project", message: "SEO report for March is now available", time: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), read: true, priority: "low" },
    { id: 4, type: "subscription", message: "Your subscription renews in 20 days", time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), read: false, priority: "high" },
    { id: 5, type: "system", message: "New feature: Real-time analytics dashboard available", time: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), read: true, priority: "medium" },
  ]);

  const [autoCheckEnabled, setAutoCheckEnabled] = useState(true);
  const [lastChecked, setLastChecked] = useState(new Date());
  const [isChecking, setIsChecking] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [upgradingPlan, setUpgradingPlan] = useState(false);

  // Helper function
  const getStatusMessage = useCallback((key, ...args) => {
    const msgFn = translations.statusMessages[lang][key];
    if (typeof msgFn === 'function') {
      return msgFn(...args);
    }
    return msgFn;
  }, [lang, translations.statusMessages]);

  const addNotification = useCallback((type, message, priority = "medium") => {
    const newNotification = {
      id: Date.now(),
      type,
      message,
      time: new Date().toISOString(),
      read: false,
      priority,
    };
    setNotifications(prev => [newNotification, ...prev]);
  }, []);

  const checkSubscriptionStatus = useCallback(() => {
    const today = new Date();
    const expiry = new Date(subscription.expiryDate);
    const daysLeft = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
    const isActive = daysLeft > 0;
    
    setSubscription(prev => ({ ...prev, isActive, daysRemaining: daysLeft > 0 ? daysLeft : 0 }));
    
    if (daysLeft <= 7 && daysLeft > 0) {
      addNotification("subscription", getStatusMessage("subscriptionExpiring", daysLeft), "high");
    } else if (!isActive) {
      addNotification("subscription", getStatusMessage("subscriptionExpired"), "critical");
    }
    return { isActive, daysLeft };
  }, [subscription.expiryDate, getStatusMessage, addNotification]);

  const checkProjectsStatus = useCallback(() => {
    const updatedProjects = projects.map(project => {
      const today = new Date();
      const dueDate = new Date(project.dueDate);
      const daysOverdue = Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24));
      let needsAttention = false;
      
      if (project.status !== "completed" && daysOverdue > 0) {
        needsAttention = true;
        if (daysOverdue === 1) {
          addNotification("project", getStatusMessage("projectOverdue", project.name, daysOverdue), "critical");
        }
      }
      
      const lastUpdate = new Date(project.lastUpdate);
      const daysSinceUpdate = Math.ceil((today - lastUpdate) / (1000 * 60 * 60 * 24));
      if (project.status === "in-progress" && daysSinceUpdate > 7 && project.progress < 90) {
        addNotification("project", getStatusMessage("noUpdates", project.name, daysSinceUpdate), "high");
      }
      
      return { ...project, daysOverdue: daysOverdue > 0 ? daysOverdue : 0, needsAttention };
    });
    setProjects(updatedProjects);
    return updatedProjects;
  }, [projects, getStatusMessage, addNotification]);

  const checkPaymentStatus = useCallback(() => {
    const today = new Date();
    const nextPaymentDate = new Date(payments.nextPayment.date);
    const daysUntilNext = Math.ceil((nextPaymentDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilNext < 0 && payments.currentStatus !== "paid") {
      addNotification("payment", getStatusMessage("paymentOverdue", payments.nextPayment.amount, daysUntilNext), "critical");
    } else if (daysUntilNext <= 3 && daysUntilNext > 0) {
      addNotification("payment", getStatusMessage("upcomingPayment", payments.nextPayment.amount, daysUntilNext), "medium");
    }
    
    const failedPayments = payments.history.filter(p => p.status === "failed");
    if (failedPayments.length > 0 && !payments.failedAlertShown) {
      addNotification("payment", getStatusMessage("failedPayments", failedPayments.length), "high");
      setPayments(prev => ({ ...prev, failedAlertShown: true }));
    }
    return { daysUntilNext };
  }, [payments.nextPayment.date, payments.nextPayment.amount, payments.currentStatus, payments.history, payments.failedAlertShown, getStatusMessage, addNotification]);

  const checkForNewNotifications = useCallback(() => {
    const newNotifications = [];
    projects.forEach(project => {
      const lastUpdate = new Date(project.lastUpdate);
      const today = new Date();
      const daysSinceUpdate = Math.ceil((today - lastUpdate) / (1000 * 60 * 60 * 24));
      if (daysSinceUpdate > 5 && project.status === "in-progress" && project.progress < 80) {
        const exists = notifications.some(n => 
          n.message.includes(project.name) && new Date(n.time) > new Date(Date.now() - 24 * 60 * 60 * 1000)
        );
        if (!exists) {
          newNotifications.push({
            id: Date.now(),
            type: "project",
            message: getStatusMessage("noUpdates", project.name, daysSinceUpdate),
            time: new Date().toISOString(),
            read: false,
            priority: "medium",
          });
        }
      }
    });
    if (newNotifications.length > 0) {
      setNotifications(prev => [...newNotifications, ...prev]);
    }
  }, [projects, notifications, getStatusMessage]);

  const runAllChecks = useCallback(() => {
    setIsChecking(true);
    setTimeout(() => {
      checkSubscriptionStatus();
      checkProjectsStatus();
      checkPaymentStatus();
      checkForNewNotifications();
      setLastChecked(new Date());
      setIsChecking(false);
      addNotification("system", getStatusMessage("systemCheck"), "low");
    }, 1000);
  }, [checkSubscriptionStatus, checkProjectsStatus, checkPaymentStatus, checkForNewNotifications, addNotification, getStatusMessage]);

  // Effects
  useEffect(() => {
    runAllChecks();
  }, [runAllChecks]);

  useEffect(() => {
    if (autoCheckEnabled) {
      const interval = setInterval(() => {
        runAllChecks();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [autoCheckEnabled, runAllChecks]);

  // Handlers
  const handlePayment = () => {
    setPaymentProcessing(true);
    addNotification("payment", getStatusMessage("paymentProcessing"), "medium");
    setTimeout(() => {
      const newPayment = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        amount: payments.nextPayment.amount,
        status: "paid",
        invoice: `INV-${new Date().getFullYear()}-${String(payments.history.length + 1).padStart(3, '0')}`,
        method: "VISA"
      };
      addNotification("payment", getStatusMessage("paymentSuccess"), "low");
      setPayments(prev => ({
        ...prev,
        currentStatus: "paid",
        lastPayment: { amount: prev.nextPayment.amount, date: new Date().toISOString().split('T')[0], method: "VISA •••• 4242" },
        history: [newPayment, ...prev.history],
        nextPayment: { ...prev.nextPayment, date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0] }
      }));
      setPaymentProcessing(false);
    }, 2000);
  };

  const handleUpgradePlan = () => {
    setUpgradingPlan(true);
    addNotification("subscription", getStatusMessage("loadingUpgrade"), "medium");
    setTimeout(() => {
      addNotification("subscription", getStatusMessage("upgradeAvailable"), "low");
      setUpgradingPlan(false);
    }, 1500);
  };

  const handleDownloadInvoice = (invoice) => {
    addNotification("system", getStatusMessage("downloadingInvoice", invoice), "low");
    setTimeout(() => {
      addNotification("system", getStatusMessage("invoiceDownloaded", invoice), "low");
    }, 1000);
  };

  const handleRetryPayment = (payment) => {
    addNotification("payment", getStatusMessage("retryingPayment", payment.amount), "medium");
    setTimeout(() => {
      const updatedHistory = payments.history.map(p => p.id === payment.id ? { ...p, status: "paid" } : p);
      setPayments(prev => ({ ...prev, history: updatedHistory }));
      addNotification("payment", getStatusMessage("retrySuccess", payment.amount), "low");
    }, 1500);
  };

  const handleViewProject = (project) => {
    addNotification("project", getStatusMessage("openingProject", project.name), "low");
  };

  const handleRefreshPaymentHistory = () => {
    addNotification("system", getStatusMessage("refreshingHistory"), "low");
    setTimeout(() => {
      addNotification("system", getStatusMessage("historyUpdated"), "low");
    }, 800);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
    addNotification("system", getStatusMessage("markedRead"), "low");
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(notif => notif.id === id ? { ...notif, read: true } : notif));
  };

  // Helper functions
  const getProjectStatusInfo = (status) => {
    const statusLabels = {
      ar: { "in-progress": { label: "قيد التنفيذ", color: "#0E74AB", icon: <FaSpinner />, bg: "#E3F2FD" }, "pending-review": { label: "قيد المراجعة", color: "#FF9800", icon: <MdPendingActions />, bg: "#FFF3E0" }, "completed": { label: "مكتمل", color: "#4CAF50", icon: <FaRegCheckCircle />, bg: "#E8F5E9" } },
      en: { "in-progress": { label: "In Progress", color: "#0E74AB", icon: <FaSpinner />, bg: "#E3F2FD" }, "pending-review": { label: "Pending Review", color: "#FF9800", icon: <MdPendingActions />, bg: "#FFF3E0" }, "completed": { label: "Completed", color: "#4CAF50", icon: <FaRegCheckCircle />, bg: "#E8F5E9" } }
    };
    return statusLabels[lang][status] || { label: "Unknown", color: "#9E9E9E", icon: <FaClock />, bg: "#F5F5F5" };
  };

  const getPaymentStatusInfo = () => {
    const statusLabels = {
      ar: { paid: { label: "مدفوع", color: "#4CAF50", icon: <FaCheckCircle />, bg: "#E8F5E9" }, "pending-review": { label: "قيد المراجعة", color: "#FF9800", icon: <FaClock />, bg: "#FFF3E0" }, failed: { label: "دفعة فاشلة", color: "#F44336", icon: <FaTimesCircle />, bg: "#FFEBEE" } },
      en: { paid: { label: "Paid", color: "#4CAF50", icon: <FaCheckCircle />, bg: "#E8F5E9" }, "pending-review": { label: "Pending Review", color: "#FF9800", icon: <FaClock />, bg: "#FFF3E0" }, failed: { label: "Payment Failed", color: "#F44336", icon: <FaTimesCircle />, bg: "#FFEBEE" } }
    };
    return statusLabels[lang][payments.currentStatus] || { label: "Unknown", color: "#9E9E9E", icon: <FaClock />, bg: "#F5F5F5" };
  };

  const getHistoryStatusIcon = (status) => {
    const icons = { paid: <FaCheckCircle style={{ color: "#4CAF50", marginRight: "6px" }} />, "pending-review": <FaClock style={{ color: "#FF9800", marginRight: "6px" }} />, failed: <FaTimesCircle style={{ color: "#F44336", marginRight: "6px" }} /> };
    return icons[status] || null;
  };

  const getHistoryStatusText = (status) => {
    const texts = { ar: { paid: "مدفوع", "pending-review": "قيد المراجعة", failed: "فشل" }, en: { paid: "Paid", "pending-review": "Pending Review", failed: "Failed" } };
    return texts[lang][status] || status;
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch { return dateString; }
  };

  const formatTimeAgo = (dateString) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMinutes = Math.floor((now - date) / (1000 * 60));
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);
      if (diffMinutes < 1) return lang === "ar" ? "الآن" : "Just now";
      if (diffMinutes < 60) return lang === "ar" ? `منذ ${diffMinutes} دقيقة` : `${diffMinutes} minutes ago`;
      if (diffHours < 24) return lang === "ar" ? `منذ ${diffHours} ساعة` : `${diffHours} hours ago`;
      if (diffDays < 7) return lang === "ar" ? `منذ ${diffDays} يوم` : `${diffDays} days ago`;
      return formatDate(dateString);
    } catch { return lang === "ar" ? "مؤخراً" : "Recently"; }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "critical": return <FaExclamationTriangle style={{ color: "#F44336" }} />;
      case "high": return <MdWarning style={{ color: "#FF9800" }} />;
      case "medium": return <FaClock style={{ color: "#0E74AB" }} />;
      default: return <FaBell style={{ color: "#9E9E9E" }} />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const projectsNeedingAttention = projects.filter(p => p.needsAttention).length;

  const LangSwitcher = () => (
    <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000, background: "#0E74AB", color: "white", border: "none", borderRadius: "40px", padding: "8px 16px", fontWeight: "bold", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
      {lang === "ar" ? "English" : "العربية"}
    </button>
  );

  return (
    <div style={styles.container} dir={lang === "ar" ? "rtl" : "ltr"}>
      <LangSwitcher />
      <aside style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <FaShieldAlt size={28} style={styles.logoIcon} />
          <h2 style={styles.logo}>{translations.sidebar[lang].logo}</h2>
        </div>
        <ul style={styles.menu}>
          <li style={styles.menuItemActive}><FaChartLine style={styles.menuIcon} /> {translations.sidebar[lang].menuDashboard}</li>
          <li style={styles.menuItem}><FaCreditCard style={styles.menuIcon} /> {translations.sidebar[lang].menuSubscription}</li>
          <li style={styles.menuItem}><FaWallet style={styles.menuIcon} /> {translations.sidebar[lang].menuPayments}</li>
          <li style={styles.menuItem}><FaBell style={styles.menuIcon} /> {translations.sidebar[lang].menuNotifications}{unreadCount > 0 && <span style={styles.badge}>{unreadCount}</span>}</li>
          <li style={styles.menuItem}><FaTasks style={styles.menuIcon} /> {translations.sidebar[lang].menuPortfolio}</li>
        </ul>
        <div style={styles.autoCheckContainer}>
          <div style={styles.autoCheckHeader}><FaSyncAlt style={styles.autoCheckIcon} /><span style={styles.autoCheckLabel}>{translations.sidebar[lang].autoCheckLabel}</span></div>
          <label style={styles.switch}><input type="checkbox" checked={autoCheckEnabled} onChange={() => setAutoCheckEnabled(!autoCheckEnabled)} /><span className="slider"></span></label>
        </div>
        <div style={styles.lastChecked}><FaClock size={12} /><span>{translations.sidebar[lang].lastCheck}: {formatTimeAgo(lastChecked)}</span></div>
      </aside>
      
      <main style={styles.main}>
        <div style={styles.navbar}>
          <div><h3 style={styles.welcomeText}>{translations.navbar[lang].welcome}</h3><p style={styles.subText}>{translations.navbar[lang].subText}</p></div>
          <div style={styles.navActions}><button style={styles.iconBtn} onClick={runAllChecks} disabled={isChecking}><FaSyncAlt className={isChecking ? "spin" : ""} /></button><div style={styles.avatar}>A</div></div>
        </div>
        
        <div style={styles.cards}>
          <SmartCard title={translations.cards[lang].subscription} icon={<FaCreditCard size={28} />} gradient="linear-gradient(135deg, #0E74AB 0%, #0A5A85 100%)">
            <div style={styles.cardDetail}><p style={styles.planName}>{subscription.plan}</p><div style={styles.statusIndicator}><div style={{ ...styles.statusDot, background: subscription.isActive ? "#4CAF50" : "#F44336" }} /><span style={{ color: subscription.isActive ? "#4CAF50" : "#F44336", fontWeight: "bold" }}>{subscription.isActive ? (lang === "ar" ? "نشط" : "Active") : (lang === "ar" ? "منتهي" : "Expired")}</span></div><div style={styles.subscriptionMeta}><span>💰 {subscription.price}</span><span>⏰ {subscription.daysRemaining} {translations.cards[lang].daysLeft}</span></div><div style={styles.progressBarContainer}><div style={{ ...styles.progressBar, width: `${Math.min(100, (subscription.daysRemaining / 365) * 100)}%`, background: subscription.daysRemaining <= 7 ? "#F44336" : "#FFD966" }} /></div><p style={styles.nextBilling}>{translations.cards[lang].renews}: {formatDate(subscription.expiryDate)}</p></div>
          </SmartCard>
          
          <SmartCard title={translations.cards[lang].projects} icon={<FaTasks size={28} />} gradient="linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)">
            <div><div style={styles.projectStats}><div><span style={styles.statNumber}>{projects.filter(p => p.status === "in-progress").length}</span><span>{translations.cards[lang].inProgress}</span></div><div><span style={styles.statNumber}>{projects.filter(p => p.status === "pending-review").length}</span><span>{translations.cards[lang].pending}</span></div><div><span style={styles.statNumber}>{projects.filter(p => p.status === "completed").length}</span><span>{translations.cards[lang].completed}</span></div></div>{projectsNeedingAttention > 0 && (<div style={styles.attentionAlert}><FaExclamationTriangle /><span>{projectsNeedingAttention} {translations.cards[lang].projectNeedsAttention}</span></div>)}</div>
          </SmartCard>
          
          <SmartCard title={translations.cards[lang].paymentHealth} icon={<FaWallet size={28} />} gradient="linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)">
            <div style={styles.cardDetail}><div style={{ ...styles.statusBadge, background: getPaymentStatusInfo().bg, color: getPaymentStatusInfo().color }}>{getPaymentStatusInfo().icon} {getPaymentStatusInfo().label}</div><div style={styles.paymentMeta}><div><p style={styles.paymentLabel}>{translations.cards[lang].lastPayment}</p><p style={styles.paymentAmount}>{payments.lastPayment.amount}</p><p style={styles.paymentDate}>{formatDate(payments.lastPayment.date)}</p></div><div><p style={styles.paymentLabel}>{translations.cards[lang].nextPayment}</p><p style={styles.paymentAmount}>{payments.nextPayment.amount}</p><p style={styles.paymentDate}>{formatDate(payments.nextPayment.date)}</p></div></div></div>
          </SmartCard>
        </div>
        
        <div style={styles.tableContainer}>
          <div style={styles.sectionHeader}><h4><FaTasks /> {translations.projectTable[lang].title}</h4><button style={styles.textBtn} onClick={checkProjectsStatus}><MdRefresh /> {translations.projectTable[lang].checkStatus}</button></div>
          <table style={styles.table}><thead><tr><th>{translations.projectTable[lang].projectName}</th><th>{translations.projectTable[lang].status}</th><th>{translations.projectTable[lang].progress}</th><th>{translations.projectTable[lang].dueDate}</th><th>{translations.projectTable[lang].lastUpdate}</th><th>{translations.projectTable[lang].actions}</th></tr></thead>
          <tbody>{projects.map((project) => { const status = getProjectStatusInfo(project.status); return (<tr key={project.id}><td style={styles.projectName}>{project.name}</td><td><span style={{ ...styles.statusBadgeSmall, background: status.bg, color: status.color }}>{status.icon} {status.label}</span></td><td><div style={styles.smallProgress}><div style={{ ...styles.smallProgressBar, width: `${project.progress}%`, background: status.color }} /><span>{project.progress}%</span></div></td><td style={project.daysOverdue > 0 ? styles.overdue : {}}>{formatDate(project.dueDate)}{project.daysOverdue > 0 && <span style={styles.overdueBadge}>{translations.projectTable[lang].overdue}</span>}</td><td>{formatTimeAgo(project.lastUpdate)}</td><td><button style={styles.actionBtnSmall} onClick={() => handleViewProject(project)}><FaEye /> {translations.projectTable[lang].view}</button></td></tr>); })}</tbody></table>
        </div>
        
        <div style={styles.tableContainer}>
          <div style={styles.sectionHeader}><h4><FaFileInvoice /> {translations.paymentTable[lang].title}</h4><button style={styles.textBtn} onClick={handleRefreshPaymentHistory}><MdRefresh /> {translations.paymentTable[lang].refresh}</button></div>
          <table style={styles.table}><thead><tr><th>{translations.paymentTable[lang].invoice}</th><th>{translations.paymentTable[lang].date}</th><th>{translations.paymentTable[lang].amount}</th><th>{translations.paymentTable[lang].method}</th><th>{translations.paymentTable[lang].status}</th><th>{translations.paymentTable[lang].action}</th></tr></thead>
          <tbody>{payments.history.map((payment) => (<tr key={payment.id}><td style={styles.invoiceId}>{payment.invoice}</td><td>{formatDate(payment.date)}</td><td>{payment.amount}</td><td>{payment.method}</td><td><span style={{ display: "flex", alignItems: "center" }}>{getHistoryStatusIcon(payment.status)}<span style={{ color: payment.status === "paid" ? "#4CAF50" : payment.status === "pending-review" ? "#FF9800" : "#F44336", textTransform: "capitalize" }}>{getHistoryStatusText(payment.status)}</span></span></td><td>{payment.status === "paid" ? (<button style={styles.downloadBtn} onClick={() => handleDownloadInvoice(payment.invoice)}><FaDownload /> {translations.paymentTable[lang].download}</button>) : payment.status === "failed" ? (<button style={styles.retryBtn} onClick={() => handleRetryPayment(payment)}><MdRefresh /> {translations.paymentTable[lang].retry}</button>) : (<span style={styles.pendingText}>{translations.paymentTable[lang].processing}</span>)}</td></tr>))}</tbody></table>
        </div>
        
        <div style={styles.actions}>
          <button style={styles.primaryBtn} onClick={handlePayment} disabled={paymentProcessing}>{paymentProcessing ? (<FaSpinner className="spin" style={{ marginRight: "8px" }} />) : (<MdPayment style={{ marginRight: "8px" }} />)}{paymentProcessing ? (lang === "ar" ? "جاري المعالجة..." : "Processing...") : translations.buttons[lang].payNow}</button>
          <button style={styles.secondaryBtn} onClick={handleUpgradePlan} disabled={upgradingPlan}>{upgradingPlan ? (<FaSpinner className="spin" style={{ marginRight: "8px" }} />) : (<FaCrown style={{ marginRight: "8px" }} />)}{upgradingPlan ? (lang === "ar" ? "جاري التحميل..." : "Loading...") : translations.buttons[lang].upgradePlan}</button>
          <button style={styles.outlineBtn}><FaArrowRight style={{ marginRight: "8px" }} /> {translations.buttons[lang].viewAllInvoices}</button>
        </div>
        
        <div style={styles.notifications}>
          <div style={styles.sectionHeader}><h4><FaBell /> {translations.notifications[lang].title}</h4><button style={styles.textBtn} onClick={handleMarkAllRead}>{translations.buttons[lang].markAllRead}</button></div>
          <div style={styles.notificationsList}>{notifications.length === 0 ? (<div style={styles.emptyNotifications}><FaBell size={40} style={{ opacity: 0.3 }} /><p>{translations.notifications[lang].noNotifications}</p></div>) : (notifications.map((notif) => (<div key={notif.id} style={{ ...styles.notificationItem, opacity: notif.read ? 0.7 : 1, background: notif.read ? "#fff" : "#F8F9FF", borderLeft: `4px solid ${notif.priority === "critical" ? "#F44336" : notif.priority === "high" ? "#FF9800" : "#0E74AB"}` }} onClick={() => markNotificationAsRead(notif.id)}><div style={styles.notifIcon}>{getPriorityIcon(notif.priority)}</div><div style={styles.notifContent}><p style={styles.notifMessage}>{notif.message}</p><span style={styles.notifTime}>{formatTimeAgo(notif.time)}</span></div>{!notif.read && <div style={styles.unreadDot} />}</div>)))}</div>
        </div>
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } } .spin { animation: spin 1s linear infinite; } button { transition: all 0.2s ease; } button:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.15); } button:active:not(:disabled) { transform: translateY(0); } button:disabled { opacity: 0.6; cursor: not-allowed; } .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 24px; } .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; } input:checked + .slider { background-color: #4CAF50; } input:checked + .slider:before { transform: translateX(20px); } input { width: 0; height: 0; visibility: hidden; position: absolute; }` }} />
    </div>
  );
};

const SmartCard = ({ title, icon, gradient, children }) => (
  <div style={{ ...styles.card, background: gradient }}>
    <div style={styles.cardHeader}><div style={styles.iconWrapper}>{icon}</div><h4 style={styles.cardTitle}>{title}</h4></div>
    <div style={styles.cardContent}>{children}</div>
  </div>
);

const styles = {
  container: { display: "flex", minHeight: "100vh", fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", background: "#F8FAFE" },
  sidebar: { width: "280px", background: "linear-gradient(180deg, #0A2E4D 0%, #0E74AB 100%)", color: "#fff", padding: "30px 20px", boxShadow: "2px 0 12px rgba(0,0,0,0.08)", position: "relative" },
  logoContainer: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "50px" },
  logoIcon: { color: "#FFD966" },
  logo: { fontSize: "24px", fontWeight: "bold", margin: 0 },
  menu: { listStyle: "none", padding: 0, margin: 0, marginBottom: "40px" },
  menuItem: { display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", marginBottom: "8px", cursor: "pointer", transition: "all 0.2s", fontSize: "15px", fontWeight: "500", color: "rgba(255,255,255,0.8)", position: "relative" },
  menuItemActive: { display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "12px", marginBottom: "8px", cursor: "pointer", background: "rgba(255,255,255,0.15)", color: "#fff", fontWeight: "600", position: "relative" },
  menuIcon: { fontSize: "18px" },
  badge: { position: "absolute", right: "16px", background: "#F44336", color: "#fff", borderRadius: "10px", padding: "2px 8px", fontSize: "11px", fontWeight: "bold" },
  autoCheckContainer: { marginTop: "20px", padding: "16px", background: "rgba(255,255,255,0.1)", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  autoCheckHeader: { display: "flex", alignItems: "center", gap: "8px" },
  autoCheckIcon: { fontSize: "14px" },
  autoCheckLabel: { fontSize: "13px" },
  switch: { position: "relative", display: "inline-block", width: "44px", height: "24px" },
  lastChecked: { position: "absolute", bottom: "20px", left: "20px", right: "20px", fontSize: "11px", opacity: 0.7, display: "flex", alignItems: "center", gap: "6px" },
  main: { flex: 1, padding: "30px 40px", overflowY: "auto" },
  navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", flexWrap: "wrap" },
  welcomeText: { margin: 0, fontSize: "28px", fontWeight: "700", color: "#1A2C3E" },
  subText: { margin: "5px 0 0", color: "#5A6E7C", fontSize: "14px" },
  navActions: { display: "flex", alignItems: "center", gap: "20px" },
  iconBtn: { background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#5A6E7C", padding: "8px", borderRadius: "8px", transition: "all 0.2s" },
  avatar: { width: "42px", height: "42px", borderRadius: "50%", background: "#0E74AB", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px" },
  cards: { display: "flex", gap: "25px", flexWrap: "wrap", marginBottom: "30px" },
  card: { borderRadius: "20px", flex: 1, minWidth: "280px", padding: "24px", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", color: "#fff", transition: "transform 0.2s" },
  cardHeader: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" },
  iconWrapper: { background: "rgba(255,255,255,0.2)", borderRadius: "14px", padding: "8px", display: "flex" },
  cardTitle: { margin: 0, fontSize: "18px", fontWeight: "600" },
  cardContent: { fontSize: "14px" },
  cardDetail: { marginTop: "8px" },
  planName: { fontSize: "20px", fontWeight: "bold", margin: "0 0 12px 0" },
  statusIndicator: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" },
  statusDot: { width: "10px", height: "10px", borderRadius: "50%" },
  subscriptionMeta: { display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "13px" },
  progressBarContainer: { background: "rgba(0,0,0,0.2)", borderRadius: "10px", height: "6px", overflow: "hidden", marginBottom: "8px" },
  progressBar: { height: "100%", borderRadius: "10px", transition: "width 0.3s" },
  nextBilling: { fontSize: "12px", opacity: 0.9, margin: "8px 0 0" },
  projectStats: { display: "flex", justifyContent: "space-between", textAlign: "center", marginBottom: "16px" },
  statNumber: { display: "block", fontSize: "28px", fontWeight: "bold", marginBottom: "4px" },
  attentionAlert: { background: "rgba(255,255,255,0.2)", padding: "10px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" },
  statusBadge: { display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "30px", fontSize: "13px", fontWeight: "600", marginBottom: "16px" },
  paymentMeta: { display: "flex", gap: "24px", marginTop: "8px" },
  paymentLabel: { fontSize: "12px", opacity: 0.8, margin: "0 0 4px" },
  paymentAmount: { fontSize: "20px", fontWeight: "bold", margin: 0 },
  paymentDate: { fontSize: "12px", margin: 0, opacity: 0.9 },
  tableContainer: { background: "#fff", borderRadius: "20px", padding: "24px", marginBottom: "30px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  projectName: { fontWeight: "500" },
  statusBadgeSmall: { display: "inline-flex", alignItems: "center", gap: "4px", padding: "4px 10px", borderRadius: "20px", fontSize: "12px", fontWeight: "500" },
  smallProgress: { display: "flex", alignItems: "center", gap: "8px" },
  smallProgressBar: { width: "60px", height: "4px", borderRadius: "2px", transition: "width 0.3s" },
  overdue: { color: "#F44336", fontWeight: "500" },
  overdueBadge: { display: "block", fontSize: "10px", color: "#F44336", marginTop: "2px" },
  invoiceId: { fontFamily: "monospace", fontWeight: "500" },
  downloadBtn: { background: "#F0F2F5", border: "none", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px", transition: "all 0.2s" },
  retryBtn: { background: "#FF9800", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px", transition: "all 0.2s" },
  pendingText: { color: "#FF9800", fontSize: "12px" },
  textBtn: { background: "transparent", border: "none", color: "#0E74AB", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", padding: "8px 12px", borderRadius: "8px", transition: "all 0.2s" },
  actionBtnSmall: { background: "#0E74AB", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer", fontSize: "12px", display: "inline-flex", alignItems: "center", gap: "4px", transition: "all 0.2s" },
  actions: { display: "flex", gap: "15px", marginBottom: "30px", flexWrap: "wrap" },
  primaryBtn: { background: "linear-gradient(135deg, #0E74AB 0%, #0A5A85 100%)", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "12px", cursor: "pointer", fontWeight: "600", display: "inline-flex", alignItems: "center", fontSize: "14px", transition: "all 0.2s", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" },
  secondaryBtn: { background: "#fff", color: "#0E74AB", border: "2px solid #0E74AB", padding: "12px 28px", borderRadius: "12px", cursor: "pointer", fontWeight: "600", display: "inline-flex", alignItems: "center", fontSize: "14px", transition: "all 0.2s" },
  outlineBtn: { background: "#F8FAFE", color: "#2C3E50", border: "1px solid #E2E8F0", padding: "12px 28px", borderRadius: "12px", cursor: "pointer", fontWeight: "500", display: "inline-flex", alignItems: "center", fontSize: "14px", transition: "all 0.2s" },
  notifications: { background: "#fff", borderRadius: "20px", padding: "24px", marginBottom: "30px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  notificationsList: { marginTop: "16px", maxHeight: "400px", overflowY: "auto" },
  notificationItem: { display: "flex", alignItems: "center", gap: "16px", padding: "16px", borderRadius: "16px", marginBottom: "10px", position: "relative", transition: "all 0.2s", cursor: "pointer" },
  notifIcon: { width: "40px", height: "40px", borderRadius: "12px", background: "#F0F7FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" },
  notifContent: { flex: 1 },
  notifMessage: { margin: "0 0 4px", fontWeight: "500", color: "#1A2C3E" },
  notifTime: { fontSize: "12px", color: "#7F8C8D" },
  unreadDot: { width: "8px", height: "8px", borderRadius: "50%", background: "#0E74AB", position: "absolute", right: "20px", top: "20px" },
  emptyNotifications: { textAlign: "center", padding: "40px", color: "#9E9E9E" },
};

export default SmartDashboard;