import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const Logout = () => {
  const [authUser, setAuthUser] = useContext(AuthContext);

  const handleLogout = () => {
    try {
      localStorage.removeItem("User");
      setAuthUser(undefined);
      toast.success("Logout successfully");
      window.location.reload();
    } catch (error) {
      toast.error("Error :", error.message);
    }
  };

  return (
    <div
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </div>
  );
};

export default Logout;
