/* eslint-disable react/prop-types */
import ContainerShadow from "../../../components/ContainerShadow";

function CardResult({ index, listData }) {
  return (
    <ContainerShadow className="p-4 flex flex-col">
      <p className="font-bold mb-4">Kelompok - {index}</p>
      {listData.map((item, idx) => (
        <div
          key={idx}
          className={`flex gap-1 ${
            idx > 0 ? "border-t pt-1 border-secondary/20" : ""
          } pb-1`}
        >
          <p className="w-6 text-center">{idx + 1}</p>
          <p className="leading-4 flex-1">
            <span className="font-medium opacity-50">{item.number}</span>
            {" - "}
            {item.name}
          </p>
        </div>
      ))}
    </ContainerShadow>
  );
}

export default CardResult;
