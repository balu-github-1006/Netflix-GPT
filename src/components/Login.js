import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-full">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
        alt="banner background image"
      />
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-black opacity-50 from-black">
        &nbsp;
      </div>
      <Header />
      <div className="w-[450px] m-auto px-16 py-12 bg-black absolute left-1/3 top-28 rounded-lg bg-opacity-60">
        <h2 className="text-3xl text-white font-bold pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <form>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 py-4 bg-transparent border border-gray-500 rounded-md placeholder-slate-100 mb-5"
          />
          <button className="w-full bg-red-600 p-2 text-white font-semibold text-center rounded-md">
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
