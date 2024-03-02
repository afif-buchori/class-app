/* eslint-disable react/prop-types */
import ContainerShadow from "../../../components/ContainerShadow";
import TableDataForm from "./TableDataForm";

function CardResult({ index, listData }) {
  return (
    <ContainerShadow className="p-4 flex flex-col">
      <p className="font-bold mb-4">Team - {index}</p>
      <TableDataForm listDataForm={listData} />
    </ContainerShadow>
  );
}

export default CardResult;
