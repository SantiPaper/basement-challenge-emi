import { PropsWithChildren, createContext, useState } from "react";
import { Ropa } from "../api/types";
import { AppTypes } from "./types";

export const AppContext = createContext<AppTypes | null>(null);

export const Provider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Ropa[]>([]);
  const [modal, setModal] = useState(false);

  const addCart = (producto: Ropa) => {
    if (cart.find((r) => producto.id === r.id)) {
      setCart([...cart]);
    } else setCart([...cart, producto]);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        modal,
        setModal,
        addCart,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
