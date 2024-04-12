import useBreedList from "./useBreedList";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [data, loading, error] = useBreedList(id);

  if (loading) console.log("loading");
  if (error) console.log(error);
  return (
    <div className="details">
      <h1 data-testid="Breeds">{id}</h1>
      {data.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default Details;
