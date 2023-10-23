import styled from "styled-components";

export const StyledCartProduct = styled.article`
  display: flex;
  border: 1px solid white;
  padding: 2rem 1rem;
  display: flex;
  margin-bottom: 1rem;
  .cart__ropa {
    &__img {
      width: 20rem;
    }

    &__div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__name {
      font-size: 4rem;
      text-transform: uppercase;
    }
    &__delete {
      background-color: transparent;
      border: 1px solid white;
      color: white;
      padding: 0.5rem 0.8rem;
      border-radius: 0.6rem;
      cursor: pointer;
      margin-right: 0.5rem;
    }
    &__description {
      font-size: 1.5rem;
      color: #999999;
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
  .container-input {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: center;
  }
  .input {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
  .column {
    display: flex;
    align-items: center;
  }
  @media (max-width: 800px) {
    display: flex;
    border: 1px solid white;
    padding: 2rem 1rem;
    display: flex;
    margin-bottom: 1rem;
    .cart__ropa {
      &__img {
        width: 15rem;
      }

      &__name {
        font-size: 3rem;
        text-transform: uppercase;
      }

      &__description {
        font-size: 1rem;
      }

      &__cantidad {
        margin-top: auto;
        display: flex;
        align-items: center;
        &__p {
          font-size: 1.5rem;
          text-transform: uppercase;
        }
        & > button {
          color: white;
          background-color: transparent;
          border: none;
          padding: 0.2rem 1.3rem;
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
        margin-top: 1rem;
        display: flex;

        & > button {
          background-color: transparent;
          color: white;
          padding: 0.6rem;
          border-radius: 99rem;
          border: 1px solid transparent;
          font-family: inherit;
          font-size: 0rem;
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
  }
  @media (max-width: 550px) {
    .cart__ropa {
      &__size {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &__price {
          margin-left: 0;
          font-size: 3.2rem;
        }
      }
    }
  }
  @media (max-width: 550px) {
    .cart__ropa__img {
      width: 12rem;
    }
    .cart__ropa__name {
      font-size: 2rem;
    }
    .cart__ropa__description {
      font-size: 1.2rem;
    }
    .label,
    .label-check {
      padding: 0 0.5rem;
      border: 1px solid transparent;
      border-radius: 99rem;
      font-size: 1.3rem;
    }
    .label-check {
      border: 1px solid white;
    }
  }
  @media (max-width: 370px) {
    .cart__ropa__img {
      display: none;
    }
  }
`;
