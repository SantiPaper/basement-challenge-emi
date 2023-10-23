import styled from "styled-components";

export const StyledCart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  .background-img {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 23%,
      rgba(27, 27, 27, 1) 100%
    );
    margin-right: 1rem;
  }

  .cart {
    top: 0;
    right: 0;
    position: absolute;
    background-color: black;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    border-left: 1px solid white;

    display: flex;
    flex-direction: column;

    &__padding {
      padding: 2rem;
    }

    &__button {
      display: flex;
      cursor: pointer;
      text-transform: uppercase;
      gap: 1rem;
      background-color: transparent;
      color: white;
      border: none;
      font-family: inherit;
      font-size: 3rem;
      margin-left: auto;
    }

    &__info {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__h2 {
      font-size: 11.5rem;
      text-transform: uppercase;
    }

    &__h3 {
      font-size: 8.5rem;
      text-transform: uppercase;
      text-align: center;
    }

    &__span {
      color: black;
      -webkit-text-stroke: 0.5px white;
    }

    &__scroll {
      overflow-y: scroll;
      max-height: 40rem;
      padding-right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .cart__footer_total-price {
      display: flex;
      align-items: center;
    }
    &__footer {
      border-top: 1px solid white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem 0;
      p {
        font-size: 3rem;
        padding: 2rem;
        text-transform: uppercase;
      }

      .cart__footer__checkout {
        font-size: 3rem;
        font-family: inherit;
        padding: 2rem;
        color: black;
        -webkit-text-stroke: 0.5px white;
        background-color: transparent;
        border: none;
        border-left: 1px solid white;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 800px) {
    .cart {
      top: 0;
      left: 0;
      right: 0;
      border-right: none;
      border-left: none;

      &__h2 {
        font-size: 14rem;
        text-transform: uppercase;
        text-align: center;
        line-height: 0.9;
      }

      &__span {
        color: black;
        -webkit-text-stroke: 0.5px white;
      }

      &__scroll {
        overflow-y: scroll;
        max-height: 40rem;
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }
    }
  }
  @media (max-width: 550px) {
    .column {
      justify-content: center;
    }
  }
  @media (max-width: 550px) {
    .cart__h2 {
      font-size: 9.5rem;
      text-transform: uppercase;
    }
    .cart__footer {
      p {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 370px) {
    .cart {
      justify-content: center;
    }
  }
`;
