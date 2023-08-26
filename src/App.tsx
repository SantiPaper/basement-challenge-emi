import { useState } from "react";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { StyledApp } from "./style";
import { Ropa } from "./api/types";

function App() {
  const [cart, setCart] = useState<Ropa[]>([]);
  const [modal, setModal] = useState(false);

  const addCart = (producto: Ropa) => {
    if (cart.find((r) => producto.id === r.id)) {
      setCart([...cart]);
    } else setCart([...cart, producto]);
  };
  console.log(cart);

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <StyledApp>
      {modal && <Cart cart={cart} closeModal={closeModal} />}

      <Header closeModal={closeModal} cart={cart.length} />
      <main>
        <Hero />
        <Products addCart={addCart} />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
