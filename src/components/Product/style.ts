import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const StyledProduct = styled.article`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 33%;

  .article {
    &__img {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 23%,
        rgba(27, 27, 27, 1) 100%
      );

      border-bottom: 3px solid white;
    }
  }
  .hover {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    &:hover,
    &:focus {
      animation: ${fadeIn} 500ms forwards;
      opacity: 1;
      cursor: pointer;
    }
  }
  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
  }
  @media (max-width: 800px) {
    margin-top: 1rem;
    max-width: 100%;
    padding: 0 0.5rem;
    .article {
      &__img {
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 1) 23%,
          rgba(27, 27, 27, 1) 100%
        );

        border-bottom: 2px solid white;
      }
      max-width: 95%;
    }
  }
`;
