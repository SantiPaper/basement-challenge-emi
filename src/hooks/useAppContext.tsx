import { useContext } from "react";
import { AppContext } from "../context";

export const useAppContext = () => {
  const value = useContext(AppContext);

  if (value === null) {
    throw new Error(
      "No se puede utilizar useProductsContext fuera del provider"
    );
  }
  return value;
};
