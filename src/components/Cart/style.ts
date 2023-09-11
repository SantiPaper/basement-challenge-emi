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

  .cart {
    top: 0;
    right: 0;
    position: absolute;
    background-color: black;
    border: 1px solid white;
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

    &__ropa {
      display: flex;
      border: 1px solid white;
      padding: 2rem 1rem;
      display: flex;
      margin-bottom: 1rem;

      &__img {
        width: 20rem;
      }

      &__name {
        font-size: 4rem;
        text-transform: uppercase;
      }

      &__description {
        font-size: 1.5rem;
      }

      &__cantidad {
        margin-top: auto;
        display: flex;
        align-items: center;
        &__p {
          font-size: 2.5rem;
          text-transform: uppercase;
        }
        button {
          color: white;
          background-color: transparent;
          border: none;
          padding: 0.5rem 1.3rem;
          cursor: pointer;
        }
        &__text {
          border: 1px solid white;
          margin-left: 2rem;
          font-size: 1.8rem;
          border-radius: 99rem;
        }
      }

      &__size {
        display: flex;
        align-items: center;
        gap: 0.2rem;

        button {
          background-color: transparent;
          color: white;
          padding: 0.6rem 1.1rem;
          border-radius: 99rem;
          border: 1px solid transparent;
          font-family: inherit;
          font-size: 1.8rem;
          cursor: pointer;
        }

        button:focus {
          border: 1px solid white;
        }

        &__price {
          margin-left: auto;
          font-size: 3.2rem;
        }
      }
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
  .container-input {
    position: relative;
    display: flex;
    align-items: center;
  }
  .input {
    display: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
  }
  .label,
  .label-check {
    padding: 0.3rem 1rem;
    border: 1px solid transparent;
    border-radius: 99rem;
    font-size: 1.5rem;
  }

  .label-check {
    border: 1px solid white;
  }
`;
