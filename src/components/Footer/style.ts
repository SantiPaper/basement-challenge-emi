import styled from "styled-components";

export const StyledFooter = styled.footer`
  div {
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 30rem;
    margin-right: 4rem;
  }

  h2 {
    font-size: 22.5rem;
  }

  .everyday {
    color: black;
    -webkit-text-stroke: 0.5px white;
    margin-top: -8rem;
  }

  @media (max-width: 1200px) {
    img {
      width: min(27vw, 30rem);
      margin-right: 2rem;
    }

    h2 {
      font-size: 12.5rem;
      font-size: min(19vw, 22.5rem);
    }
    .everyday {
      color: black;
      -webkit-text-stroke: 0.5px white;
      margin-top: -4rem;
    }
  }
  @media (max-width: 450px) {
    .everyday {
      color: black;
      -webkit-text-stroke: 0.5px white;
      margin-top: -2rem;
    }
  }
`;
