import { Ropa } from "../../api/types";
import frame from "../../../public/images/frame.png";

type Props = {
  product: Ropa;
  addCart: (product: Ropa) => void;
};

export const Product = ({ product, addCart }: Props) => {
  return (
    <article className="article">
      <img className="article__img" src={product.image} alt={product.name} />
      <button onClick={() => addCart(product)} className="hover">
        <span className="sr-only">Agregar al carrito</span>
        <img src={frame} alt="" />
      </button>
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    </article>
  );
};
