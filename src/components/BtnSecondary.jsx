import React from "react";

function BtnSecondary({ isLoading, className, children, ...props }) {
  return (
    <button {...props} className={`btn btn-sm btn-secondary ${className}`}>
      {isLoading ? (
        <>
          <label className="loading loading-sm" />
          <p>Loading...</p>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default BtnSecondary;
