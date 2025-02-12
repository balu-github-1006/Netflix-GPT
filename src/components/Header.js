import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => {
    return store.user;
  });
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute left-0 right-0 top-0 flex justify-between items-center bg-black bg-opacity-35">
      <img
        className="w-48"
        src="
            https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <button
          onClick={handleSignOut}
          className="bg-red-500 rounded-md font-semibold text-white p-2 h-10 w-24 mr-4"
        >
          Sign out
        </button>
      )}
    </div>
  );
};
export default Header;
