import { Link, useNavigate, useLocation } from "react-router-dom";
import "./LogIn.css";

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();


  return (

    <div className="auth-container">
      <div className="auth-main-container">
        <div className="auth-title">
          <h2 className="">Sign In</h2>
        </div>
        <form className="auth-main">
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              className="text-input"
              type="text"
              required
            />
          </div>

          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="***********"
              className="input-pwd"
              type="password"
              required
            />
          </div>

          <div className="auth-primary-btn">
            <span className="login-btn">Login with Test Credentials</span>
          </div>

          <Link className="auth-secondary-btn" to="/signUp">
              {"Create New Account >"}
          </Link>
        </form>
      </div>
    </div>
  );
}
