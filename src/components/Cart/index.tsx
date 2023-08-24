import { Container } from "../Container";
import { StyledCart } from "./style";

export const Cart = () => {
  return (
    <Container>
      <StyledCart>
        <button>Close</button>
        <h2>
          Your <span>Cart</span>
        </h2>
      </StyledCart>
    </Container>
  );
};
