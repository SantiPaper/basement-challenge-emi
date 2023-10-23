import styled from "styled-components";

export const StyledProducts = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
