import Form from "../Form/Form";
import * as FIELDS from "../../constants/formFields";
import LoginTemplate from "../LoginTemplate/LoginTemplate";
import { useState } from "react";

const fields = FIELDS.LOGIN;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fields);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const LoginComponent = (
    <>
      {FIELDS.LOGIN.map((field) => (
        <Form
          key={field.id}
          handleChange={handleChange}
          value={loginState[field.id]}
          labelText={field.labelText}
          id={field.id}
          name={field.name}
          type={field.type}
          login={true}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
    </>
  );

  return (
    <LoginTemplate
      Component={LoginComponent}
      header="Welcome back!"
      subHeader="Enter your Credentials to access your account"
      checkbox="Remember for 30days"
      button="Login"
    />
  );
}
