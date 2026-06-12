// SignUp.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // بعد حفظ بيانات العميل
    localStorage.setItem("isLoggedIn", "true"); // العميل صار مسجل دخول
    navigate("/"); // توجيه للصفحة Home.jsx
  };

  return (
    <div className="signup-container">
      <h2>إنشاء حساب جديد</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="الاسم الكامل" required />
        <input type="email" placeholder="البريد الإلكتروني" required />
        <input type="password" placeholder="كلمة المرور" required />
        <button type="submit">تسجيل</button>
      </form>

      {/* CSS مدمج داخل JSX */}
      <style>{`
        .signup-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #dadee9;
          padding: 40px 20px;
        }

        .signup-container h2 {
          color: #0E74AB;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: bold;
        }

        .signup-container form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .signup-container input {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .signup-container input:focus {
          outline: none;
          border-color: #0E74AB;
          box-shadow: 0 0 5px rgba(14, 116, 171, 0.5);
        }

        .signup-container button {
          padding: 12px 20px;
          background-color: #0E74AB;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-container button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(14, 116, 171, 0.4);
        }

        @media (max-width: 480px) {
          .signup-container form {
            width: 90%;
            padding: 20px;
          }
          .signup-container h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default SignUp;