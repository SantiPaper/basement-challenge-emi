import { Ropa } from "../../api/types";
import frame from "../../../public/images/frame.png";
import { StyledProduct } from "./style";
import { useCart } from "../../hooks/useCart";
import type { Notification } from "../ContainerNotifications";
type Props = {
  product: Ropa;
  addCart: (product: Ropa) => void;
  addNotification: (notification: {
    name: string;
    status: "success" | "error";
  }) => void;
  notifications: Array<Notification>;
};

export const Product = ({ product, addCart, addNotification }: Props) => {
  const { cart } = useCart();
  const handleClick = (product: Ropa) => {
    addCart(product);
    if (cart.includes(product)) {
      addNotification({
        name: product.name,
        status: "error",
      });
    } else {
      addNotification({
        name: product.name,
        status: "success",
      });
    }
  };

  return (
    <StyledProduct>
      <img className="article__img" src={product.image} alt={product.name} />
      <button onClick={() => handleClick(product)} className="hover">
        <span className="sr-only">Agregar al carrito</span>
        <img src={frame} alt="" />
      </button>
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </StyledProduct>
  );
};
