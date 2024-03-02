/* eslint-disable react/prop-types */

function ContainerShadow({ className, children }) {
  return (
    <div
      className={`flex-1 rounded-lg shadow-lg border border-base-200/20 hover:border-primary/20 transition-colors duration-500 ${className}`}
    >
      {children}
    </div>
  );
}

export default ContainerShadow;
