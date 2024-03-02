import { useEffect, useState } from "react";
import MyLayouts from "../../components/Layouts/MyLayouts";
import FormCreate from "./Partials/FormCreate";
import TableDataForm from "./Partials/TableDataForm";
import BtnPrimary from "../../components/BtnPrimary";
import { FaMinus, FaPlus } from "react-icons/fa6";
import ContainerShadow from "../../components/ContainerShadow";
import CardResult from "./Partials/CardResult";
import CardSkeleton from "./Partials/CardSkeleton";

function TeamPage() {
  const [countTeam, setCountTeam] = useState(1);
  const handleChangeCount = (method) => {
    if (method !== "min") return setCountTeam(countTeam + 1);
    if (countTeam === 0) return;
    setCountTeam(countTeam - 1);
  };

  const [listDataForm, setListDataForm] = useState([]);
  const handleAddData = (data) => {
    setListDataForm([data, ...listDataForm]);
  };

  const [groupedData, setGroupedData] = useState([]);

  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!isLoading) return;
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoading]);

  const handleRandomGrouping = () => {
    if ((listDataForm.length || countTeam) < 1) return;
    setLoading(true);

    const shuffledData = [...listDataForm].sort(() => Math.random() - 0.5);
    const groups = Array.from({ length: countTeam }, (_, index) => {
      const startIndex = Math.floor((index * shuffledData.length) / countTeam);
      const endIndex = Math.floor(
        ((index + 1) * shuffledData.length) / countTeam
      );
      return shuffledData.slice(startIndex, endIndex);
    });

    setGroupedData(groups);
  };

  return (
    <MyLayouts>
      <div className="w-full max-w-screen-lg px-2 mx-auto flex flex-col gap-4">
        <h1 className="font-bold mx-auto">Aplikasi Pembagian Kelompok</h1>
        <ContainerShadow className="w-fit flex items-center gap-2 p-4 bg-info/20 mx-auto">
          <p className="font-bold opacity-70">Total Kelompok:</p>
          <BtnPrimary
            onClick={() => handleChangeCount("min")}
            className="!btn-xs btn-circle btn-outline"
          >
            <FaMinus className="text-sm" />
          </BtnPrimary>
          <p className="text-lg font-bold w-8 text-center">{countTeam}</p>
          <BtnPrimary
            onClick={() => handleChangeCount("max")}
            className="!btn-xs btn-circle btn-outline"
          >
            <FaPlus className="text-sm" />
          </BtnPrimary>
        </ContainerShadow>
        <div className="w-full flex flex-col-reverse md:flex-row gap-5 border-b pb-4">
          <div className="w-full md:w-3/5">
            <TableDataForm listDataForm={listDataForm} />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-4 relative">
            <FormCreate onSubmit={handleAddData} />
          </div>
        </div>

        <div className="mx-auto my-5">
          <BtnPrimary onClick={handleRandomGrouping} isLoading={isLoading}>
            Bagikan Kelompok
          </BtnPrimary>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {isLoading ? (
            <CardSkeleton count={6} />
          ) : (
            groupedData.length > 0 &&
            groupedData.map((item, idx) => (
              <CardResult key={idx} index={idx + 1} listData={item} />
            ))
          )}
        </div>
      </div>
    </MyLayouts>
  );
}

export default TeamPage;
