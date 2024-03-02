import ContainerShadow from "../../../components/ContainerShadow";

function CardSkeleton({ count = 1 }) {
  return Array.from({ length: count }).map((_, idx) => (
    <ContainerShadow key={idx} className="flex flex-col gap-4 p-4">
      <span className="w-3/5 h-7 skeleton mb-4" />
      <span className="w-full h-5 skeleton" />
      <span className="w-full h-5 skeleton" />
      <span className="w-full h-5 skeleton" />
    </ContainerShadow>
  ));
}

export default CardSkeleton;
