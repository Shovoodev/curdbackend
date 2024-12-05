import React from "react";

const Button = ({ className, children, type = "button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        "p-3 pt-3 bg-blue-700 hover:bg-blue-800 text-white border rounded-md flex justify-center items-center " +
        className
      }
    >
      {children}
    </button>
  );
};
export default Button;
