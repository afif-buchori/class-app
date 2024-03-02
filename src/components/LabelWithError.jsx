/* eslint-disable react/prop-types */

function LabelWithError({
  isBtn,
  label,
  subLabel,
  isError,
  msgError,
  className,
  children,
}) {
  return isBtn ? (
    <div className={`form-control flex-1 ${className}`}>
      <div className="label">
        <span className="label-text">
          {label} <span className="opacity-50">{subLabel}</span>
        </span>
        {isError && (
          <span className="label-text-alt italic text-error">*{msgError}</span>
        )}
      </div>
      {children}
    </div>
  ) : (
    <label className={`form-control flex-1 ${className}`}>
      <div className="label">
        <span className="label-text">
          {label} <span className="opacity-70">{subLabel}</span>
        </span>
        {isError && (
          <span className="label-text-alt italic text-error">*{msgError}</span>
        )}
      </div>
      {children}
    </label>
  );
}

export default LabelWithError;
