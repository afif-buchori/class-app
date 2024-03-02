/* eslint-disable react/prop-types */
import ContainerShadow from "../../../components/ContainerShadow";
import LabelWithError from "../../../components/LabelWithError";
import InputBordered from "../../../components/InputBordered";
import { useState } from "react";
import BtnPrimary from "../../../components/BtnPrimary";
import { scrollToTop } from "../../../helpers/general";

function FormCreate({ onSubmit }) {
  const [isErrorInput, setErrorInput] = useState(false);
  const [form, setForm] = useState({
    number: "",
    name: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setErrorInput(false);
    setForm((form) => {
      return { ...form, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((form.number || form.name) === "") return setErrorInput(true);
    onSubmit(form);
    setForm({ number: "", name: "" });
    scrollToTop();
  };

  return (
    <form onSubmit={handleSubmit} className="md:sticky top-16 right-0">
      <ContainerShadow className="flex flex-col gap-2 p-4">
        <LabelWithError
          label="No. Induk"
          // subLabel="(KTP / KTA)"
          isError={isErrorInput && form.number === ""}
          msgError="input kosong"
        >
          <InputBordered
            name="number"
            value={form.number}
            onChange={onChangeInput}
            isError={isErrorInput && form.number === ""}
            placeholder="nomor induk"
          />
        </LabelWithError>
        <LabelWithError
          label="No. Induk"
          subLabel="(siswa / siswi)"
          isError={isErrorInput && form.name === ""}
          msgError="input kosong"
        >
          <InputBordered
            name="name"
            value={form.name}
            onChange={onChangeInput}
            isError={isErrorInput && form.name === ""}
            placeholder="nama"
          />
        </LabelWithError>
        <BtnPrimary type="submit" className="mt-5">
          Tambah
        </BtnPrimary>
      </ContainerShadow>
    </form>
  );
}

export default FormCreate;
