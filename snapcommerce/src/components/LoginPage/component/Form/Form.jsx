import "./Form.css";

export default function Form(props) {
  return (
    <div className="content">
      <div className="title">
        <span>{props.labelText}</span>
        {Object.keys(props).includes("login") && props.type === "password" ? (
          <a href="/forgotpassword" className="forgot-password">
            forgot password
          </a>
        ) : null}
      </div>
      <input
        onChange={props.handleChange}
        value={props.value}
        id={props.id}
        name={props.name}
        type={props.type}
        required={props.isRequired}
        placeholder={props.placeholder}
      />
    </div>
  );
}
