import { Ropa } from "../../api/types";
import { useCart } from "../../hooks/useCart";
import { StyledCartProduct } from "./style";

type Props = {
  product: Ropa;
};

export const CartProduct = ({ product }: Props) => {
  const { cart, setCart, deleteProduct, sumNumber, minNumber } = useCart();

  const onChange = (size: string, id: string) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.options[0].size = size;
      }
      return product;
    });
    setCart(newCart);
  };

  return (
    <StyledCartProduct>
      <div className="background-img">
        <img
          className="cart__ropa__img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="cart__info">
        <div className="cart__ropa__div">
          <h3 className="cart__ropa__name">{product.name}</h3>
          <button
            className="cart__ropa__delete"
            onClick={() => deleteProduct(product.id)}
          >
            X
          </button>
        </div>
        <p className="cart__ropa__description">{product.description}</p>
        <div className="cart__ropa__cantidad">
          <p className="cart__ropa__cantidad__p">Quantity:</p>
          <p className="cart__ropa__cantidad__text">
            <button onClick={() => minNumber(product.id)}>-</button>
            {product.options[0].quantity}
            <button onClick={() => sumNumber(product.id)}>+</button>
          </p>
        </div>
        <div className="cart__ropa__size">
          <div className="column">
            <p className="cart__ropa__cantidad__p">
              {product.options[0].label}:
            </p>
            {product.options[0].values.map((s) => (
              <div key={s} className="container-input">
                <input
                  className="input"
                  onChange={(ev) => onChange(ev.target.value, product.id)}
                  type="radio"
                  id={s}
                  value={s}
                  name={product.id}
                  checked={product.options[0].size === s}
                />
                <label
                  className={
                    product.options[0].size === s ? "label-check" : "label"
                  }
                  htmlFor={s}
                >
                  {s}
                </label>
              </div>
            ))}
          </div>
          <p className="cart__ropa__size__price">
            ${product.price * product.options[0].quantity}
          </p>
        </div>
      </div>
    </StyledCartProduct>
  );
};
