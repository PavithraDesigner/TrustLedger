import { useState } from "react";
import Login from "./Login";
import Email from "./EmailOTP"
import "./LoginPage.css"

export default function AuthBox() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-box">
      <h2>{isLogin ? "🔐 Login" : "OTP Verification"}</h2>

      {isLogin ? <Login /> : <Email/> }

      <div className="auth-switch">
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Register</button>
      </div>
    </div>
  );
}
