import { Ropa } from "../../api/types";
import { Container } from "../Container";
import { StyledCart } from "./style";
import { Arrow } from "../../../public/svg/Arrow";

type Props = {
  cart: Ropa[];
  closeModal: () => void;
};

export const Cart = ({ cart, closeModal }: Props) => {
  const totalPrice = cart.reduce((acc, value) => acc + value.price * 1, 0);
  const checkout = {
    price: cart.reduce((acc, value) => acc + value.price * 1, 0),
    products: cart.map((element) => element.name),
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
            <div className="cart__scroll">
              {cart.map((r) => (
                <article key={r.id} className="cart__ropa">
                  <img className="cart__ropa__img" src={r.image} alt={r.name} />
                  <div className="cart__info">
                    <h3 className="cart__ropa__name">{r.name}</h3>
                    <p className="cart__ropa__description">{r.description}</p>
                    <div className="cart__ropa__cantidad">
                      <p className="cart__ropa__cantidad__p">Quantity:</p>
                      <p className="cart__ropa__cantidad__text">
                        <button>-</button>
                        {1}
                        <button>+</button>{" "}
                      </p>
                    </div>
                    <div className="cart__ropa__size">
                      <p className="cart__ropa__cantidad__p">
                        {r.options.map((e) => e.label)}:
                      </p>
                      <button>{r.options[0].values[0]}</button>
                      <button>{r.options[0].values[1]}</button>
                      <button>{r.options[0].values[2]}</button>
                      <button>{r.options[0].values[3]}</button>
                      <p className="cart__ropa__size__price">${r.price}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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
