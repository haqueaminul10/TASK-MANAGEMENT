import React, { useState } from "react";

//IMPORT COMPONENT
import Layout from "../Layouts/Layout";
import InputField from "../Layouts/InputField";
function AddTask() {
  const inputData = { description: "", details: "" };
  const [formData, setFormData] = useState(inputData);

  //HANGLE CHANGE FUNCTION
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // HANDLE SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Layout />

      <div className="flex justify-center m-10 ">
        <form
          onSubmit={handleSubmit}
          className="border-solid border-2 border-sky-500 p-10 "
        >
          {/* DESCRIPTION */}
          <InputField
            id="description"
            type="text"
            name="description"
            label="Task Description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Decription"
            className="block my-2 py-2 w-96"
          />
          {/* TASK DETAILS */}
          <label id="details" className="block my-2 py-2 w-96">
            Task Details
          </label>
          <textarea
            id="details"
            type="text"
            name="details"
            onChange={handleChange}
            value={formData.details}
            placeholder="Work details..."
            className="block my-2 py-2 w-96 resize-y rounded-md"
          />
          <div>
            <button type="submit" className="bg-indigo-500 p-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTask;
