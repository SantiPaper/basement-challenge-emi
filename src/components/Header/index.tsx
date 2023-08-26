import { StyledHeader } from "./style";

import group from "../../../public/svg/group.svg";
import logo from "../../../public/logo.svg";
import { Container } from "../Container";

type Props = {
  closeModal: () => void;
  cart: number;
};

export const Header = ({ closeModal, cart }: Props) => {
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />
        <img src={group} alt="" />
        <button onClick={closeModal} className="button">
          Cart ({cart})
        </button>
      </StyledHeader>
    </Container>
  );
};
