import React, { useState } from "react";
import FormField from "../../utils/form/formField";
import {
  update,
  generateData,
  isFormValid,
} from "../../utils/form/formActions";
// import { auth } from "../../utils/auth/authActions";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft as Back } from "react-icons/md";
import logov1 from "../../utils/images/logov1.png";
import quote from "../../utils/images/qoute.png";
import group from "../../utils/images/Group.png";
import downArrow from "../../utils/images/downArrow.png";
import google from "../../utils/images/google.png";
import line from "../../utils/images/line.png";

import PasswordStrengthMeter from "../../utils/form/PasswordStrengthMeter";

const formdata = {
  email: {
    element: "input",
    value: "",
    config: {
      name: "email_input",
      type: "email",
      placeholder: "Enter email address",
      label: "Email address*",
    },
    validation: {
      required: true,
      email: true,
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
  },
  password: {
    element: "input",
    value: "",
    config: {
      name: "password_input",
      type: "password",
      placeholder: "Password",
      label: "Create password*",
    },
    validation: {
      required: true,
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
  },
  confirmPassword: {
    element: "input",
    value: "",
    config: {
      name: "confirm_password_input",
      type: "password",
      placeholder: "Repeat password*",
      label: "Repeat password*",
    },
    validation: {
      required: true,
      confirm: "password",
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
  },
  agree: {
    element: "checkbox",
    value: false,
    config: {
      name: "agreeTerms",
      type: "checkbox",
      label: "I agree to terms & conditions",
    },
    validation: {
      required: true,
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
  },
};

export default function Register(props) {
  const [formData, setFormData] = useState(formdata);

  const updateForm = (element) => {
    const newFormdata = update(element, formData, "login");
    setFormData(newFormdata);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(formData, "register");
    let formIsValid = isFormValid(formData, "register");
    if (formIsValid) {
      // auth(dataToSubmit,true);
    }
  };
  return (
    <div className="container register">
      <div className="left">
        <img className="logo" src={logov1} alt="" />
        <img className="group-icon" src={group} alt="" />
        <img className="qoute-icon" src={quote} alt="" />
        <p className="title">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p className="author">Hideo Kojima</p>
        <img className="downArrow-icon" src={downArrow} alt="" />
      </div>
      <div className="right">
        <Link to="/">
          <div className="back-container">
            <Back color="#BDBDBD" size="30px" />
            <span>Back</span>
          </div>
        </Link>

        <form className="register-form">
          <h1>Register Individual Account!</h1>
          <p className="subtitle">
            For the purpose of gamers regulation, your details are required.
          </p>
          <div className="line" />
          <FormField
            id={"email"}
            formdata={formData.email}
            change={(element) => updateForm(element)}
          />
          <FormField
            id={"password"}
            formdata={formData.password}
            change={(element) => updateForm(element)}
          />
          {formData["password"].value ? (
            <PasswordStrengthMeter
              password={formData["password"].value}
            ></PasswordStrengthMeter>
          ) : null}
          <FormField
            id={"confirmPassword"}
            formdata={formData.confirmPassword}
            change={(element) => updateForm(element)}
          />
          <FormField
            id={"agree"}
            formdata={formData.agree}
            change={(element) => updateForm(element)}
          />

          <button className="btn" onClick={(event) => submitForm(event)}>
            Register Account
          </button>

          <img className="line-v2" src={line} alt="" />
          <button className="google-btn" onClick={(event) => submitForm(event)}>
            <img src={google} alt="" /> Login
          </button>
        </form>
      </div>
    </div>
  );
}
