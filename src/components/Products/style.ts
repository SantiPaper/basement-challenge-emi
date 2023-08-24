import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const StyledProducts = styled.section`
  display: flex;
  justify-content: space-between;
  .article {
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    position: relative;

    &__img {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 23%,
        rgba(27, 27, 27, 1) 100%
      );

      border-bottom: 3px solid white;
    }
    width: 38rem;
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
    font-size: 1.7rem;
  }
`;
