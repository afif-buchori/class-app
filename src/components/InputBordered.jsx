/* eslint-disable react/prop-types */

function InputBordered({ isError, type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={`input input-sm input-secondary focus:input-primary ${
        isError && "input-error"
      }`}
    />
  );
}

export default InputBordered;
