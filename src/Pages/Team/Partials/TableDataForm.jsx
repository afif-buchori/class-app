/* eslint-disable react/prop-types */
import { IoSettingsOutline } from "react-icons/io5";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import InputBordered from "../../../components/InputBordered";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import ModalConfirmation from "../../../components/ModalConfirmation";

function TableDataForm({ listDataForm = [], onEdit, onDelete }) {
  return (
    <div className="">
      <h2 className="font-medium text-center">Daftar Keseluruhan Siswa/i</h2>
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
      <td className="w-fit">
        {isEdit ? (
          <InputBordered
            name="number"
            value={form.number}
            onChange={onChangeInput}
            placeholder="nomor induk"
            autoComplete="off"
            className="!input-xs w-32"
          />
        ) : (
          item.number
        )}
      </td>
      <td className="w-full">
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
          item.name
        )}
      </td>
      <td>
        <label
          htmlFor="modal-confirmation"
          className="flex items-center cursor-pointer"
        >
          <FiTrash2 />
        </label>
      </td>
      {/* <td className="flex justify-end">
        {isEdit ? (
          <div className="flex gap-2 w-fit">
            <button
              onClick={() => {
                onEdit(index, form);
                setEdit(false);
              }}
            >
              <FaCircleCheck className="text-xl" />
            </button>
            <button onClick={() => setEdit(false)}>
              <FaCircleXmark className="text-xl" />
            </button>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="md:text-lg btn btn-xs btn-square btn-ghost"
            >
              <IoSettingsOutline />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu menu-sm p-2 shadow bg-base-200 rounded-box w-28"
            >
              <li>
                <a onClick={() => setEdit(true)}>
                  <FiEdit /> Ubah
                </a>
              </li>
              <li>
                <label htmlFor="modal-confirmation" className="flex">
                  <FiTrash2 /> Hapus
                </label>
              </li>
            </ul>
          </div>
        )}
      </td> */}
      <ModalConfirmation
        title={"Delete Data"}
        msg={"Apakah anda yakin menghapus data?"}
      >
        <div className="w-full flex justify-end gap-5">
          <label
            onClick={() => onDelete(index)}
            htmlFor="modal-confirmation"
            className="w-32 btn btn-sm btn-primary"
          >
            Ya
          </label>
          <label
            htmlFor="modal-confirmation"
            className="w-32 btn btn-sm btn-secondary"
          >
            Tidak
          </label>
        </div>
      </ModalConfirmation>
    </tr>
  );
}

export default TableDataForm;
