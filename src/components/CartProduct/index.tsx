import { useState } from "react";
import { Ropa } from "../../api/types";
import { useCart } from "../../hooks/useCart";

type Props = {
  product: Ropa;
};

export const CartProduct = ({ product }: Props) => {
  const [size, setSize] = useState<string>("S");
  const onChange = (size: string) => {
    setSize(size);
    console.log(size);
  };
  const { deleteProduct, sumNumber, minNumber } = useCart();

  return (
    <article className="cart__ropa">
      <div className="background-img">
        <img
          className="cart__ropa__img"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="cart__info">
        <div>
          <h3 className="cart__ropa__name">{product.name}</h3>
          <button onClick={() => deleteProduct(product.id)}>x</button>
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
                  onChange={() => onChange(s)}
                  type="radio"
                  id={s}
                  value={s}
                  name="size"
                  checked={s === size}
                />
                <label
                  className={size === s ? "label-check" : "label"}
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
    </article>
  );
};
