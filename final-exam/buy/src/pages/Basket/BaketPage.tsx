import { useContext } from "react";
import { basketContext } from "../../context/BasketProvider";
import { MdDeleteForever } from "react-icons/md";

interface IBasketProps {}

const BasketPage: React.FC<IBasketProps> = (): JSX.Element => {
  const context = useContext(basketContext);

  const clearBasketHandler = () => {
    context.removeAll();
  };

  return (
    <section className="px-32 pt-20 flex flex-col gap-6 text-white bg-gradient-to-br h-screen from-[#090947] from-0% to-[#5a585a] to-80%">
      {context.total ? (
        <ul className="flex flex-col gap-5">
          {context.products.map((item) => {
            return (
              <li
                className="px-5 py-4 bg-[#39465ba2] rounded-lg text-xl flex justify-between items-center"
                key={item.id}
              >
                <h3>
                  {item.name} - {item.price}$
                </h3>
                <button
                  onClick={() => context.removeFromBasket(item.id)}
                  className="text-3xl hover:text-red-500 transition-colors"
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-2xl font-bold">Basket is empty!</p>
      )}
      <hr />
      <p className="text-3xl font-bold">Total: {context.total}$</p>
      <button
        onClick={clearBasketHandler}
        className="px-4 py-3 bg-red-600 hover:bg-red-700 transition-colors rounded-lg"
      >
        Remove All
      </button>
    </section>
  );
};

export default BasketPage;
