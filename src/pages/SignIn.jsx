// SignIn.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // بعد التحقق من بيانات العميل
    localStorage.setItem("isLoggedIn", "true"); // تخزين حالة تسجيل الدخول
    navigate("/"); // توجيه للصفحة Home.jsx
  };

  return (
    <div className="signin-container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="البريد الإلكتروني" required />
        <input type="password" placeholder="كلمة المرور" required />
        <button type="submit">تسجيل الدخول</button>
      </form>

      {/* CSS مدمج داخل JSX */}
      <style>{`
        .signin-container {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #dadee9;
          padding: 40px 20px;
        }

        .signin-container h2 {
          color: #0E74AB;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: bold;
        }

        .signin-container form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .signin-container input {
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .signin-container input:focus {
          outline: none;
          border-color: #0E74AB;
          box-shadow: 0 0 5px rgba(14, 116, 171, 0.5);
        }

        .signin-container button {
          padding: 12px 20px;
          background-color: #0E74AB;
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signin-container button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(14, 116, 171, 0.4);
        }

        @media (max-width: 480px) {
          .signin-container form {
            width: 90%;
            padding: 20px;
          }
          .signin-container h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default SignIn;