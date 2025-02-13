import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) {
      return;
    }
    // if (message === null) {
    //   //sign in / sign up.
    // }
    //sign in / sign sign up logic.
    if (!isSignInForm) {
      //Sign up logic as it is not sign in form.
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
          setErrorMsg(errorCode + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="login relative ">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
        alt="banner background image"
      />
      <div className="w-[450px] m-auto px-16 py-12 bg-black absolute left-1/3 top-28 rounded-lg bg-opacity-65">
        <h2 className="text-3xl text-white font-bold pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <p className="text-red-500 font-semibold py-2">{errorMsg}</p>
        <form
          className="text-white"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
          />
          <button
            type="submit"
            className="w-full bg-red-600 p-2 text-white font-semibold text-center rounded-md"
            onClick={handleSignButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="mt-6 text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up Now"
              : "Alreday Registered Sign in Now"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
