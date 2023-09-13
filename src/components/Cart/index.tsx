import type { Ropa } from "../../api/types";
import { Container } from "../Container";
import { StyledCart } from "./style";
import { Arrow } from "../../../public/svg/Arrow";
import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../CartProduct";

type Props = {
  cart: Ropa[];
  closeModal: () => void;
};

export const Cart = ({ cart, closeModal }: Props) => {
  const { totalPrice, checkout } = useCart();

  const escapeListener = (e: Event) => {
    if ((e as unknown as KeyboardEvent).key === "Escape") {
      closeModal();
    }
  };

  const mouseListener = (e: Event) => {
    if ((e.target as HTMLDivElement).id === "close-modal") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeListener);
    window.addEventListener("click", mouseListener);

    return () => {
      window.removeEventListener("keydown", escapeListener);
      window.removeEventListener("click", mouseListener);
    };
  }, []);

  console.log(totalPrice);

  return (
    <StyledCart id="close-modal">
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
                  <CartProduct product={product} />
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
