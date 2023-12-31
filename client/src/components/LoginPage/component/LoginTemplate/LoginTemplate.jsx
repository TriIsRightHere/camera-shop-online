import "./LoginTemplate.css";
import leavesURL from "../../assets/leaves.jpg";

export default function LoginTemplate({
  Component,
  header,
  subHeader,
  checkbox,
  button,
}) {
  return (
    <div className="container login-template">
      <div className="form center">
        <h1>{header}</h1>
        {subHeader ? <p>{subHeader}</p> : null}
        {Component}
        {checkbox ? (
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
            {checkbox}
          </label>
        ) : null}
        <button>{button}</button>
        {button === "Login" ? (
          <div className="account-option">
            Don't have an account? <a href="/">Sign up</a>
          </div>
        ) : (
          <div className="account-option">
            Have an account? <a href="/login">Sign in</a>
          </div>
        )}
      </div>
      <img src={leavesURL} className="image-overlay" />
    </div>
  );
}
