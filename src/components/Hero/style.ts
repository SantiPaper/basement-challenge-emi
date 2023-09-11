import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  .hero {
    &__title {
      text-transform: uppercase;
      font-size: 22rem;
      line-height: 17rem;
      margin-top: 4rem;
    }
    &__span {
      color: black;
      -webkit-text-stroke: 0.5px white;
    }

    &__est,
    &__2k19 {
      position: absolute;
      border: 1px solid white;
      padding: 1.5rem 4rem;
      border-radius: 50%;
      font-size: 2rem;
      text-transform: uppercase;
      top: 58%;
    }
    &__est {
      left: 3.5%;
    }

    &__2k19 {
      right: 3.5%;
    }
    &__figure1,
    &__figure2 {
      position: absolute;
      z-index: 1;
    }

    &__figure1 {
      left: 3%;
      top: 85%;
    }
    &__figure2 {
      right: 4%;
      top: 64%;
    }
    &__marquee {
      margin-top: 3rem;
      border: 1px solid white;
      border-left: none;
      border-right: none;
      padding: 0.8rem;
    }
  }
  @media (max-width: 1200px) {
    .hero {
      &__figure1,
      &__figure2,
      &__2k19,
      &__est {
        display: none;
      }
      &__title {
        font-size: 15rem;
        line-height: 12rem;
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
    }
  }
  @media (max-width: 800px) {
    .hero {
      &__title {
        font-size: 9rem;
        line-height: 7rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
  @media (max-width: 500px) {
    .hero {
      &__title {
        font-size: 6rem;
        line-height: 5rem;
      }
    }
  }
`;
