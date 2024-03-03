/* eslint-disable react/prop-types */
import { IoSettingsOutline } from "react-icons/io5";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import InputBordered from "../../../components/InputBordered";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

function TableDataForm({ listDataForm = [], onEdit, onDelete }) {
  return (
    <div className="">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Nomor Induk</th>
            <th>Nama</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {listDataForm.length > 0 &&
            listDataForm.map((item, idx) => (
              <ListData
                key={idx}
                index={idx}
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

function ListData({ index, item, onEdit, onDelete }) {
  const [isEdit, setEdit] = useState(false);

  const [form, setForm] = useState({
    number: item.number,
    name: item.name,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((form) => {
      return { ...form, [name]: value };
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if ((form.number || form.name) === "") return setErrorInput(true);
  //   onSubmit(form);
  //   setForm({ number: "", name: "" });
  //   scrollToTop();
  // };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {isEdit ? (
          <InputBordered
            name="number"
            value={form.number}
            onChange={onChangeInput}
            placeholder="nomor induk"
            autoComplete="off"
            className="!input-xs w-full"
          />
        ) : (
          // <input type="text" value={form.number} onChange={onChangeInput} />
          item.number
        )}
      </td>
      <td>
        {isEdit ? (
          <InputBordered
            name="name"
            value={form.name}
            onChange={onChangeInput}
            placeholder="nama"
            autoComplete="off"
            className="!input-xs w-full"
          />
        ) : (
          // <input type="text" value={form.name} onChange={onChangeInput} />
          item.name
        )}
      </td>
      <td>
        {isEdit ? (
          <div className="flex gap-2 w-fit">
            <button
              onClick={() => {
                onEdit(index, form);
                setEdit(false);
              }}
              // className="btn btn-xs btn-ghost btn-outline"
            >
              <FaCircleCheck className="text-xl" />
            </button>
            <button
              onClick={() => setEdit(false)}
              // className="btn btn-xs btn-ghost btn-outline"
            >
              <FaCircleXmark className="text-xl" />
            </button>
          </div>
        ) : (
          <details className="dropdown dropdown-end">
            <summary className="md:text-lg btn btn-xs btn-square btn-ghost">
              <IoSettingsOutline />
            </summary>
            <ul className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-200 rounded-box w-28">
              <li>
                <a onClick={() => setEdit(true)}>
                  <FiEdit /> Edit
                </a>
              </li>
              <li>
                <a onClick={() => onDelete(index)}>
                  <FiTrash2 /> Delete
                </a>
              </li>
            </ul>
          </details>
        )}
      </td>
    </tr>
  );
}

export default TableDataForm;
