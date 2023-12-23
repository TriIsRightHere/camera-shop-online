import Form from "../Form/Form";
import * as FIELDS from "../../constants/formFields";
import LoginTemplate from "../LoginTemplate/LoginTemplate";
import { useState } from "react";

const fields = FIELDS.FORGOT_PASSWORD;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function ForgotPassword() {
  const [forgotPasswordState, setForgotPasswordState] = useState(fields);

  const handleChange = (e) => {
    setForgotPasswordState({
      ...forgotPasswordState,
      [e.target.id]: e.target.value,
    });
  };

  const ForgotPasswordComponent = (
    <>
      {FIELDS.FORGOT_PASSWORD.map((field) => (
        <Form
          key={field.id}
          handleChange={handleChange}
          value={forgotPasswordState[field.id]}
          labelText={field.labelText}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
    </>
  );

  return (
    <LoginTemplate
      Component={ForgotPasswordComponent}
      header="Forgot Password?"
      subHeader="Enter your email so we can reset your password"
      checkbox={null}
      button="Reset Password"
    />
  );
}
