/* eslint-disable react/prop-types */

function TableDataForm({ listDataForm = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Nomor Induk</th>
            <th>Nama</th>
          </tr>
        </thead>
        <tbody>
          {listDataForm.length > 0 &&
            listDataForm.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.number}</td>
                <td>{item.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDataForm;
