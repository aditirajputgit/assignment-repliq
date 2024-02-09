import { Link } from "react-router-dom";
import "./index.css";

function Register() {
  return (
    <>
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
        <form className="form-container form-register">
          <h1 style={{ color: "blue", fontSize: "28px", fontWeight: "bold" }}>
            Join us
          </h1>
          <h5>Create your account</h5>
          <div className="login-website-logo-desktop-image">
            <ion-icon name="bag"></ion-icon>
            <h1 className="logo">Vetamart</h1>
          </div>

          <p>
            <label className="input-label">Username</label>
            <br />
            <input
              type="text"
              name="first_name"
              className="username-input-filed"
              required
            />
          </p>
          <p>
            <label className="input-label">Email address</label>
            <br />
            <input
              type="email"
              name="email"
              className="username-input-filed"
              required
            />
          </p>
          <p>
            <label className="input-label">Password</label>
            <br />
            <input
              type="password"
              name="password"
              required
              className="username-input-filed"
            />
          </p>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
            <span>
              I agree all statements in{" "}
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                terms of service
              </a>
            </span>
            .
          </p>

          <button type="submit" className="register-button">
            <Link to="/">Register</Link>
          </button>

          <p>
            <Link to="/login">Already have a account</Link>.
          </p>
        </form>
      </div>
      <div className="text-center m-5-auto form-container"></div>
    </>
  );
}

export default Register;
