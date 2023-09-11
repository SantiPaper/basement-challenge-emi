import type { Ropa, Size } from "../../api/types";
import { Container } from "../Container";
import { StyledCart } from "./style";
import { Arrow } from "../../../public/svg/Arrow";
import { useState } from "react";

type Props = {
  cart: Ropa[];
  closeModal: () => void;
};

export const Cart = ({ cart, closeModal }: Props) => {
  const [size, setSize] = useState<Size>("S");
  const totalPrice = cart.reduce((acc, value) => acc + value.price * 1, 0);
  const checkout = {
    price: cart.reduce((acc, value) => acc + value.price * 1, 0),
    products: cart.map((element) => element.name),
  };
  const [number, setNumber] = useState(1);
  const sumaNumber = () => {
    setNumber(number + 1);
  };

  const onChange = (size: Size) => {
    setSize(size);
    console.log(size);
  };
  return (
    <StyledCart>
      <Container>
        <div className="cart">
          <div className="cart__padding">
            <button onClick={closeModal} className="cart__button">
              <Arrow /> Close
            </button>
            <h2 className="cart__h2">
              Your <span className="cart__span">Cart</span>
            </h2>
            {cart.length > 0 ? (
              <div className="cart__scroll">
                {cart.map((product) => (
                  <article key={product.id} className="cart__ropa">
                    <img
                      className="cart__ropa__img"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="cart__info">
                      <h3 className="cart__ropa__name">{product.name}</h3>
                      <p className="cart__ropa__description">
                        {product.description}
                      </p>
                      <div className="cart__ropa__cantidad">
                        <p className="cart__ropa__cantidad__p">Quantity:</p>
                        <p className="cart__ropa__cantidad__text">
                          <button>-</button>
                          {number}
                          <button onClick={sumaNumber}>+</button>{" "}
                        </p>
                      </div>
                      <div className="cart__ropa__size">
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
                        <p className="cart__ropa__size__price">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <h3 className="cart__h3">
                Is <span className="cart__span"> empty</span>
              </h3>
            )}
          </div>
          <div className="cart__footer">
            <p className="cart__footer_total-price">Total: {totalPrice}$</p>
            <button
              onClick={() => console.log(checkout)}
              className="cart__footer__checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </Container>
    </StyledCart>
  );
};
