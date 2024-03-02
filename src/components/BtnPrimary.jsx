/* eslint-disable react/prop-types */

function BtnPrimary({ className, children, ...props }) {
  return (
    <button {...props} className={`btn btn-sm btn-primary ${className}`}>
      {children}
    </button>
  );
}

export default BtnPrimary;
