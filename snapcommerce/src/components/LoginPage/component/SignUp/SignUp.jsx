import Form from "../Form/Form";
import * as FIELDS from "../../constants/formFields";
import LoginTemplate from "../LoginTemplate/LoginTemplate";
import { useState } from "react";

const fields = FIELDS.SIGNUP;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function SignUp() {
  const [signupState, setSignupState] = useState(fields);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };

  const SignupComponent = (
    <>
      {FIELDS.SIGNUP.map((field) => (
        <Form
          key={field.id}
          handleChange={handleChange}
          value={signupState[field.id]}
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
      Component={SignupComponent}
      header="Get started now"
      subHeader={null}
      checkbox="I agree to the terms & policy"
      button="Signup"
    />
  );
}
