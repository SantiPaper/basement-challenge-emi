import { FunctionComponent } from "react";
import { StyledHeader } from "./style";

import group from "../../../public/svg/group.svg";
import logo from "../../../public/logo.svg";
import { Container } from "../Container";

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <StyledHeader>
        <img src={logo} alt="" />
        <img src={group} alt="" />
        <button className="button">Cart (0)</button>
      </StyledHeader>
    </Container>
  );
};
