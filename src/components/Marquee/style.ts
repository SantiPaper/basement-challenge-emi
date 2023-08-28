import styled, { keyframes } from "styled-components";

const moveRtl = keyframes`
0%{
  transform: translateX(0);
}

100%{
  transform: translateX(-100%);
}

`;

export const StyledMarquee = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  gap: 1rem;
  border: 1px solid white;
  padding: 1rem 0;
  border-left: none;
  border-right: none;
  z-index: 0;

  p {
    font-size: 3rem;
    z-index: 0;
    white-space: nowrap;
    animation: ${moveRtl} 6000ms linear infinite;
  }
`;
