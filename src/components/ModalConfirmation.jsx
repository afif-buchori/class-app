/* eslint-disable react/prop-types */
function ModalConfirmation({ title, msg, children }) {
  return (
    <>
      <input type="checkbox" id="modal-confirmation" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{msg}</p>
          {children}
        </div>
        <label className="modal-backdrop" htmlFor="modal-confirmation">
          Close
        </label>
      </div>
    </>
  );
}

export default ModalConfirmation;
