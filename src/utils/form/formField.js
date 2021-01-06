import React, { useRef, useState } from "react";
import { FiEye } from "react-icons/fi";

const Formfield = ({ formdata, change, id }) => {
  const passwordInput = useRef(null);
  const [eyeColor, setEyeColor] = useState("#66BB6A");

  const togglePassword = () => {
    const x = passwordInput.current;
    if (x.type === "password") {
      x.type = "text";
      setEyeColor("#EF5350");
    } else {
      x.type = "password";
      setEyeColor("#66BB6A");
    }
  };

  const showError = () => {
    let errorMessage = null;

    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }

    return errorMessage;
  };

  const classNames = () => {
    const classes = [];
    if (formdata.validationMessage && !formdata.valid) classes.push("error");

    return classes.join(" ");
  };

  const renderTemplate = () => {
    let formTemplate = null;

    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div
            className="formBlock"
          >
            {formdata.showlabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}
            <div style={{ position: "relative" }}>
              <input
                className={classNames()}
                {...formdata.config}
                value={formdata.value}
                ref={id === "password" ? passwordInput : null}
                onChange={(event) => change({ event, id })}
                onBlur={(event) => change({ event, id, blur: true })}
              />
              {id === "password" ? (
                <FiEye
                  color={eyeColor}
                  size="30px"
                  onClick={togglePassword}
                  className="eye-icon"
                ></FiEye>
              ) : null}
            </div>
            {formdata.showError ? showError():""}

          </div>
        );
        break;
      case "checkbox":
        formTemplate = (
          <div className="check-block">
            <div className="agreeBlock">
              <input
                {...formdata.config}
                checked={formdata.value}
                onChange={(event) => change({ event, id })}
              />
              {formdata.showlabel ? (
                <div className="label_inputs">{formdata.config.label}</div>
              ) : null}
            </div>
          </div>
        );
        break;
      default:
        formTemplate = null;
    }

    return formTemplate;
  };

  return <>{renderTemplate()}</>;
};

export default Formfield;
