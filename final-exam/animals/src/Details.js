import useBreedList from "./useBreedList";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();
  const [data] = useBreedList(name);

  return (
    <div className="details">
      <h1 data-testid="Breeds">{name}</h1>
      {data.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default Details;
