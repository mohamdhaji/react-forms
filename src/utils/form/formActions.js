export const update = (element, formdata, formName) => {
  const newFormdata = {
    ...formdata,
  };
  const newElement = {
    ...newFormdata[element.id],
  };

  if (element.id === "agree") {
    newElement.value = element.event.target.checked;
    newElement.valid = element.event.target.checked;
  } else newElement.value = element.event.target.value;

  if (element.blur) {
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
  }

  newFormdata[element.id] = newElement;

  return newFormdata;
};

export const generateData = (formdata, formName) => {
  let dataToSubmit = {};

  for (let key in formdata) {
    dataToSubmit[key] = formdata[key].value;
  }

  return dataToSubmit;
};

export const isFormValid = (formdata, formName) => {
  let formIsValid = true;

  if(formName === "login") formdata=validateAll(formdata)

  for (let key in formdata) {
    formIsValid = formdata[key].valid && formIsValid;
  }
  return formIsValid;
};

export const validate = (element, formdata = []) => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.confirm) {
    const valid =
      element.value.trim() === formdata[element.validation.confirm].value;
    const message = `${!valid ? "Passwords do not match" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

export const validateAll = (formdata, formName) => {
  const newFormdata = {
    ...formdata,
  };

  for (let field in newFormdata) {
    const newElement = {
      ...newFormdata[field],
    };
    let validData = validate(newElement, formdata);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormdata[field] = newElement;
  }

  return newFormdata;
};
