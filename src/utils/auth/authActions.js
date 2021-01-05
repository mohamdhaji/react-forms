// import axios from "axios";

// export const auth = (user, isSignup) => {
//   const authData = {
//     email: user.email,
//     password: user.password,
//     returnSecureToken: true,
//   };
//   let url =
//     "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_tan0VeLijiG3tNNkbih6NTrURRPnHJ0";
    
//   if (!isSignup) {
//     url =
//       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC_tan0VeLijiG3tNNkbih6NTrURRPnHJ0";
//   }
//   axios
//     .post(url, authData)
//     .then((response) => {
//       console.log(response);
//       const expirationDate = new Date(
//         new Date().getTime() + response.data.expiresIn * 1000
//       );
//       localStorage.setItem("token", response.data.idToken);
//       localStorage.setItem("expirationDate", expirationDate);
//       localStorage.setItem("userId", response.data.localId);
//       alert("You are registered successfully ");

//     })
//     .catch((err) => {
//       alert("You are not registered successfully ");

//     });
// };
