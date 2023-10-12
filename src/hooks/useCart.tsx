import { useAppContext } from "./useAppContext";

export const useCart = () => {
  const { cart, setCart } = useAppContext();

  const checkout = {
    price: cart.reduce(
      (acc, value) => acc + value.price * value.options[0].quantity,
      0
    ),
    products: cart.map((element) => element.name),
  };

  const sumNumber = (id: string) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.options[0].quantity += 1;
      }
      return product;
    });
    setCart(newCart);
  };

  const minNumber = (id: string) => {
    const newCart = cart.map((product) => {
      if (product.id === id && product.options[0].quantity > 1) {
        product.options[0].quantity -= 1;
      }
      return product;
    });
    setCart(newCart);
  };

  const deleteProduct = (id: string) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return {
    checkout,
    minNumber,
    sumNumber,
    cart,
    deleteProduct,
  };
};
