import { StyledHeader } from "./style";

import group from "../../../public/svg/group.svg";
import logo from "../../../public/logo.svg";
import logoMin from "../../../public/svg/icon.svg";
import { Container } from "../Container";

type Props = {
  closeModal: () => void;
  cart: number;
};

export const Header = ({ closeModal, cart }: Props) => {
  return (
    <Container>
      <StyledHeader>
        <picture>
          <source srcSet={logo} media="(min-width: 800px)" />
          <img src={logoMin} alt="" />
        </picture>
        <img className="group" src={group} alt="" />
        <button onClick={closeModal} className="button">
          Cart ({cart})
        </button>
      </StyledHeader>
    </Container>
  );
};
