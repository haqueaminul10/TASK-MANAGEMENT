import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
//IMPORT COMPONENTS
import Layout from "../Layouts/Layout";
import { AuthContext } from "../../Context/Auth";

function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <Layout />
      <div>
        {auth.user ? (
          <div className="flex justify-center">
            <button
              className="border-2 p-1 m-2"
              onClick={() => navigate(`/addtask`)}
            >
              {" "}
              Add Task
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <h1>home page</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
