import { StyledProducts } from "./style";
import { useEffect, useState } from "react";
import { getRopa } from "../../api";
import { type Ropa } from "../../api/types";
import { Container } from "../Container";
import { Product } from "../Product";

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
          <Product addCart={addCart} product={product} />
        ))}
      </StyledProducts>
    </Container>
  );
};
