import footer from "../../../public/svg/footer.svg";
import { StyledFooter } from "./style";
import { Container } from "../Container";

export const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <div>
          <img src={footer} alt="" />
          <h2>WEAR</h2>
        </div>
        <h2 className="everyday">EVERYDAY</h2>
      </StyledFooter>
    </Container>
  );
};
