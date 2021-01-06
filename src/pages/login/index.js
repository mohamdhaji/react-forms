import React, { useState, useEffect } from "react";
import IdentityProviderCard from "../../utils/identityProviderCard";
import FormField from "../../utils/form/formField";
import {
  update,
  generateData,
  isFormValid,
  validateAll,
} from "../../utils/form/formActions";
import { Link } from "react-router-dom";
import logov2 from "../../utils/images/logov2.png";
import qoute2 from "../../utils/images/qoute2.png";
import controller from "../../utils/images/controller.png";
import google from "../../utils/images/google.png";
import git from "../../utils/images/git.png";
import tweet from "../../utils/images/tweet.png";
import lin from "../../utils/images/lin.png";
import line from "../../utils/images/line.png";
import { login } from "../../utils/auth/authActions";
const formdata = {
  email: {
    element: "input",
    value: "",
    config: {
      name: "email_input",
      type: "email",
      placeholder: "Write your email",
      label: "Your email",
      autoFocus:true,
      // autoComplete:"off"

    },
    validation: {
      required: true,
      email: true,
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
    showError:true
  },
  password: {
    element: "input",
    value: "",
    config: {
      name: "password_input",
      type: "password",
      placeholder: "Write your password",
      label: "Enter your password",
      autoComplete:"new-password",
    },
    validation: {
      required: true,
    },
    valid: false,
    validationMessage: "",
    showlabel: true,
    showError:true

  },
};

export default function Login() {
  const [formData, setFormData] = useState(formdata);

  const updateForm = (element) => {
    const newFormdata = update(element, formData, "login");
    setFormData(newFormdata);
  };
  const submitForm = (event) => {
    event.preventDefault();
    let dataToSubmit = generateData(formData, "login");
    let formIsValid = isFormValid(formData, "login");
    if (formIsValid) {
      login(dataToSubmit)
    }
  };

  return (
    <div className="container login">
      <div className="left">
        <img className="logo" src={logov2} alt="" />

        <img className="qoute-icon" src={qoute2} alt="" />
        <p className="title">
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>
        <p className="author">Hideo Kojima</p>
        <img className="controller" src={controller} alt="" />
      </div>

      <div className="right">
        <h2 className="title">Join the game!</h2>
        <p className="subtitle">Go inside the best gamers social network!</p>

        <div className="identity-providers">
          <IdentityProviderCard icon={google} />
          <IdentityProviderCard icon={tweet} />
          <IdentityProviderCard icon={lin} />
          <IdentityProviderCard icon={git} />
        </div>

        <img className="line-v2" src={line} alt="" />
        <form autoComplete="off" className="login-form">
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
          <div className="formBlock ">
            <button className="btn" onClick={(event) => submitForm(event)}>
              Log in
            </button>
          </div>
        </form>
        <div className="register">
          Don’t have an account?
          <span>
            <Link to="/register"> Register</Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
