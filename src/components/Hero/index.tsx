/* import figure1 from "../../public/svg/figure-1.svg";
import figure2 from "../../public/svg/figure-2.svg"; */
import { Container } from "../Container";
import { StyledHero } from "./style";
import figure1 from "../../../public/images/figura.png";
import figure2 from "../../../public/images/figura2.png";
import { Marquee } from "../Marquee";

export const Hero = () => {
  return (
    <Container>
      <StyledHero>
        <h1 className="hero__title">
          Basement <span className="hero__span">supply</span>
        </h1>
        <img className="hero__figure1" src={figure1} alt="" />
        <img className="hero__figure2" src={figure2} alt="" />
        <p className="hero__est">Est</p>
        <p className="hero__2k19">2k19</p>
        <marquee className="hero__marquee" behavior="scroll" direction="left">
          <Marquee />
        </marquee>
      </StyledHero>
    </Container>
  );
};
