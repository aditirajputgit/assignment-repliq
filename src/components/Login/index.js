
import { Link } from "react-router-dom";
import "./index.css";

const LoginForm = () => {

  const renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
        
        />
      </>
    );
  };

  const renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="password-input-filed"

        />
      </>
    );
  };

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-image"
        alt="website login"
      />
      <form className="form-container">
        <div className="login-website-logo-desktop-image">
          <ion-icon name="bag"></ion-icon>
          <h1 className="logo">Vetamart</h1>
        </div>
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button">
          <Link to="/">Login</Link>
        </button>
        forgot Password?
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
