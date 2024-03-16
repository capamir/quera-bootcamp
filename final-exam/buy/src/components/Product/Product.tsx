import { useContext, useEffect, useState } from "react";
import { basketContext } from "../../context/BasketProvider";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

interface IProductProps {
  id: number;
  name: string;
  price: number;
  address: string;
}

const Product: React.FC<IProductProps> = ({
  id,
  name,
  price,
  address,
}): JSX.Element => {
  const [clicked, setClicked] = useState<boolean>(false);
  const context = useContext(basketContext);

  const handleAddBtn = () => {
    setClicked(true);
    context.addToBasket({ name, price, id });
  };

  const handleRemoveBtn = () => {
    setClicked(false);
    context.removeFromBasket(id);
  };

  useEffect(() => {
    if (context.products.find((item) => item.id === id)) {
      setClicked(true);
    }
  }, []);

  return (
    <div className="bg-[#39465b4e] rounded-lg shadow-lg px-5 py-4 flex flex-col justify-between items-center w-[300px] h-[400px] relative">
      <div className="overflow-hidden rounded-sm">
        <img src={address} alt="product image" />
      </div>

      <div className="flex justify-between items-center w-full">
        <h2 className="text-white capitalize text-2xl font-bold">{name}</h2>
        <p className="text-[#FD4F06] text-xl">{price}$</p>
      </div>

      {/* hidden by default */}
      {clicked && (
        <div className="flex justify-center items-center text-3xl h-[40px] w-[40px] overflow-hidden rounded-full bg-green-500 absolute -left-3 -top-1">
          <MdOutlineDone />
        </div>
      )}

      {clicked ? (
        <button
          className="w-full py-2 rounded-sm text-lg text-gray-200 bg-red-600 hover:bg-red-700 hover:text-white transition-colors flex items-center justify-center gap-1"
          onClick={handleRemoveBtn}
        >
          <TiDeleteOutline />
          Remove {name} from cart
        </button>
      ) : (
        <button
          className="w-full py-2 rounded-sm text-lg text-gray-200 bg-[#3d5258] hover:bg-[#223238] hover:text-white transition-colors flex items-center justify-center gap-1"
          onClick={handleAddBtn}
        >
          <IoAddCircleOutline />
          Add {name} to cart
        </button>
      )}
    </div>
  );
};

export default Product;
