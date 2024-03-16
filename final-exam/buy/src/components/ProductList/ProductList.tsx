import { datas } from "../../database/data";
import Product from "../Product/Product";

const ProductList = () => {
  return (
    <main className="pt-16 pb-4 px-8 flex justify-between gap-5 flex-wrap bg-gradient-to-br from-[#090947] from-0% to-[#5a585a] to-80%">
      {datas.map((data) => {
        return (
          <Product
            name={data.name}
            price={data.price}
            address={data.address}
            key={data.id}
            id={data.id}
          />
        );
      })}
    </main>
  );
};

export default ProductList;
