import React, { useContext, useState } from "react";

//IMPORT COMPONENTS
import InputField from "../Layouts/InputField";
import Layout from "../Layouts/Layout";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";

function LogIn() {
  const navigate = useNavigate();
  const inputData = { email: "", password: "" };
  const [formData, setFormData] = useState(inputData);
  const { auth, setAuth } = useContext(AuthContext);
  //HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch(`http://localhost:7000/api/auth/login`, {
        method: `POST`,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        setAuth({
          ...auth,
          user: data.user,
          token: data.token,
        });
        localStorage.setItem("auth", JSON.stringify(data));
        navigate(`/`);
      } else if (response.status === 400) {
        alert(data.message);
      } else if (response.status === 401) {
        alert(data.message);
      } else {
        alert(`Login failed`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert(`Login error`);
    }
  };
  return (
    <>
      <Layout />
      <div className="flex justify-center m-10 ">
        <form
          className="border-solid border-2 border-sky-500 p-10 "
          onSubmit={handleSubmit}
        >
          {/* EMAIL ADRESS */}
          <InputField
            id="email"
            label="Email Adress:"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="block my-2 py-2 w-96"
          />
          {/* PASSWORD */}
          <InputField
            id="password"
            label="Password:"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="block my-2 py-2 w-96"
          />
          <div className="my-4">
            <button className="bg-indigo-500 p-2 rounded" type="submit">
              LogIn
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
