import { StyledProducts } from "./style";
import { useEffect, useState } from "react";
import { getRopa } from "../../api";
import { type Ropa } from "../../api/types";
import { Container } from "../Container";
import frame from "../../../public/images/frame.png";

type Props = {
  addCart: (value: Ropa) => void;
};

export const Products = ({ addCart }: Props) => {
  const [clothes, setClothes] = useState<Array<Ropa>>([]);
  useEffect(() => {
    getRopa().then((data) => setClothes(data));
  }, []);

  return (
    <Container>
      <StyledProducts>
        {clothes.map((product) => (
          <article className="article">
            <img
              className="article__img"
              src={product.image}
              alt={product.name}
            />
            <button onClick={() => addCart(product)} className="hover">
              <span className="sr-only">Agregar al carrito</span>
              <img src={frame} alt="" />
            </button>
            <div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </article>
        ))}
      </StyledProducts>
    </Container>
  );
};
