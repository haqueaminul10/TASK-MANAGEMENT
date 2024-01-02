import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT COMPONENTS
import InputField from "../Layouts/InputField";
import Layout from "../Layouts/Layout";

function Register() {
  const navigate = useNavigate();
  const inputData = {
    fullName: "",
    email: "",
    contactnumber: "",
    gender: "",
    password: "",
  };
  const [formData, setFormData] = useState(inputData);
  // HANDLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch(`http://localhost:7000/api/auth/register`, {
        method: `POST`,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        navigate(`/login`);
      } else if (response.status === 409) {
        alert(data.message);
      } else if (response.status === 501) {
        alert(data.message);
      } else {
        alert(`Unexpected error`);
      }
    } catch (err) {
      console.error("error:", err);
      alert("Error during registration. Please try again.");
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
          {/* FULL NAME */}
          <InputField
            id="fullName"
            label="Full Name:"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="block my-2 py-2 w-96"
          />
          {/* EMAIL ADRESS */}
          <InputField
            id="email"
            label="Email:"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="block my-2 py-2 w-96"
          />
          {/* CONTACT NUMBER */}
          <InputField
            id="contactnumber"
            label="Contact Number:"
            type="number"
            name="contactnumber"
            value={formData.contactnumber}
            onChange={handleChange}
            placeholder="Enter Contact Number"
            className="block my-2 py-2 w-96"
          />
          {/* GENDER SELECTION */}
          <label htmlFor="gender">Choose Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block my-2 py-2 w-96"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
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
            <button className="bg-indigo-500 p-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
