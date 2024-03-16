import { PropsWithChildren, createContext, useReducer } from "react";
import { Action, BasketContext, Product, State } from "../types/types";

interface IBasketProvider extends PropsWithChildren {}

const initialState: State = {
  total: 0,
  products: [],
};

const storeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addToBasket": {
      return {
        products: [...state.products!, action.product!],
        total: state.total + action.product!.price,
      };
    }
    case "removeFromBasket": {
      const productById = state.products.find(
        (product) => product.id === action.id
      );
      return {
        products: state.products.filter((p) => p.id !== action.id),
        total: state.total - productById!.price,
      };
    }
    case "updatePrice": {
      return { ...state };
    }
    case "removeAll": {
      return {
        products: [],
        total: 0,
      };
    }
    default:
      return state;
  }
};

const basketContext = createContext<BasketContext>({
  total: 0,
  addToBasket: () => null,
  removeFromBasket: () => null,
  removeAll: () => null,
  products: [],
});

const BasketProvider: React.FC<IBasketProvider> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product: Product) => {
    dispatch({ type: "addToBasket", product });
  };

  const removeFromBasket = (id: number) => {
    dispatch({ type: "removeFromBasket", id });
  };

  //   const updatePrice = (products: Product[]) => {
  //     dispatch();
  //   };

  const removeAll = () => {
    dispatch({ type: "removeAll" });
  };

  return (
    <basketContext.Provider
      value={{
        ...state,
        addToBasket,
        removeFromBasket,
        removeAll,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};

export default BasketProvider;

export { basketContext };
