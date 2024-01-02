import React from "react";

function InputField({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  required,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

export default InputField;
