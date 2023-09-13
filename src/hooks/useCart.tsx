import { useState } from "react";
import { useAppContext } from "./useAppContext";

export const useCart = () => {
  const { cart } = useAppContext();

  const totalPrice = cart.reduce((acc, value) => acc + value.price * 1, 0);

  const checkout = {
    price: cart.reduce((acc, value) => acc + value.price * 1, 0),
    products: cart.map((element) => element.name),
  };
  const [number, setNumber] = useState(1);

  const sumNumber = () => {
    setNumber(number + 1);
  };
  const minNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else return number;
  };

  return {
    totalPrice,
    checkout,
    number,
    setNumber,
    minNumber,
    sumNumber,
  };
};
