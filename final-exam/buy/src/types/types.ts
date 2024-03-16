type Data = {
  id: number;
  name: string;
  price: number;
  address: string;
};

interface Product {
  id: number;
  name: string;
  price: number;
}

type BasketContext = {
  total: number;
  addToBasket: (product: Product) => void;
  removeFromBasket: (id: number) => void;
  //   updatePrice: (product: Product[]) => void;
  removeAll: () => void;
  products: Product[];
};

type State = {
  products: Product[];
  total: number;
};

type Action = {
  type: "addToBasket" | "removeFromBasket" | "updatePrice" | "removeAll";
  product?: Product;
  id?: number;
  products?: Product[];
};

export type { Data, BasketContext, Product, State, Action };
