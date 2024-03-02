import { useState } from "react";
import MyLayouts from "../../components/Layouts/MyLayouts";
import FormCreate from "./Partials/FormCreate";
import TableDataForm from "./Partials/TableDataForm";

function TeamPage() {
  const [listDataForm, setListDataForm] = useState([]);
  const handleAddData = (data) => {
    setListDataForm([data, ...listDataForm]);
  };

  return (
    <MyLayouts>
      <div className="w-full max-w-screen-lg px-2 mx-auto flex flex-col">
        <h1 className="font-bold mx-auto">Buat Kelompok</h1>
        <div className="w-full flex flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:w-3/5">
            <TableDataForm listDataForm={listDataForm} />
          </div>
          <div className="w-full md:w-2/5 flex flex-col relative">
            <FormCreate onSubmit={handleAddData} />
          </div>
        </div>
      </div>
    </MyLayouts>
  );
}

export default TeamPage;
