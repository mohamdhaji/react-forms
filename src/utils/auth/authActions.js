import firebase from "../../firebase";

export const register = (user) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    });
};

export const login = async (user) => {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
