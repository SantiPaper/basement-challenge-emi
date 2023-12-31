import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
  opacity: 0;
  transform: translateX(50%);
}
100%{
  opacity: 1;
  transform: translateX(0);

}
`;

export const StyledNotification = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid black;
  padding: 2.4rem;
  border-radius: 1.2rem;
  align-items: center;
  background-color: white;
  color: black;
  animation: ${fadeIn} 500ms forwards;
  &.success {
    border-color: green;
  }

  &.error {
    border-color: red;
  }

  & > img {
    margin-right: 1.2rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--neutral-600);
    font-weight: 600;
    margin-right: 1rem;
  }

  span {
    color: var(--neutral-900);
  }

  button {
    margin-left: auto;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.2s;
    border-radius: 0.6rem;
  }
  button:hover {
    background-color: var(--neutral-200);
  }
  button:active {
    transform: scale(0.85);
  }
`;
