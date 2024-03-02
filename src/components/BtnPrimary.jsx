/* eslint-disable react/prop-types */

function BtnPrimary({ isLoading, className, children, ...props }) {
  return (
    <button {...props} className={`btn btn-sm btn-primary ${className}`}>
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

export default BtnPrimary;
