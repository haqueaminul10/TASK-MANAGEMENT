import React, { useState, useContext } from "react";

//IMPORT REACT-ROUTING
import { useNavigate } from "react-router-dom";
//IMPORT CONTEXT
import { AuthContext } from "../../Context/Auth";

function Header() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // HANDLE LOGOUT
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert(`logout successfully`);
    navigate(`/login`);
  };
  return (
    <>
      <div className="bg-red-300 ">
        <div className="flex justify-end">
          {auth.user ? (
            <div>
              <h2
                className="pr-4 cursor-pointer"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                {auth.user.fullName}
              </h2>
              {isDropdownOpen && (
                <div className="absolute  right-0 mt-2 w-32 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <button className="block w-32  hover:bg-gray-100">
                      Profile
                    </button>
                    <button
                      className="block w-32 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <button className="pr-4" onClick={() => navigate(`/register`)}>
                Register
              </button>
              <button className="pr-4" onClick={() => navigate(`/login`)}>
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
