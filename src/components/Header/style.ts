import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .button {
    background-color: transparent;
    border: 2px solid white;
    padding: 1rem 2rem;
    color: white;
    border-radius: 99rem;
    font-family: inherit;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    padding: 0 2rem;
    .group {
      display: none;
    }
    margin-bottom: 2rem;
  }
`;
