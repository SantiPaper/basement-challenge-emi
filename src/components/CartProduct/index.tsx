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
  const { number, sumNumber, minNumber } = useCart();
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
        <h3 className="cart__ropa__name">{product.name}</h3>
        <p className="cart__ropa__description">{product.description}</p>
        <div className="cart__ropa__cantidad">
          <p className="cart__ropa__cantidad__p">Quantity:</p>
          <p className="cart__ropa__cantidad__text">
            <button onClick={minNumber}>-</button>
            {number}
            <button onClick={sumNumber}>+</button>
          </p>
        </div>
        <div className="cart__ropa__size">
          <div className="column">
            <p className="cart__ropa__cantidad__p">
              {product.options.map((e) => e.label)}:
            </p>
            {product.options[0].values.map((s) => (
              <div className="container-input">
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
          <p className="cart__ropa__size__price">${product.price}</p>
        </div>
      </div>
    </article>
  );
};
