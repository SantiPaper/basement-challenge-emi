import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { StyledApp } from "./style";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { cart, closeModal, modal, addCart } = useAppContext();

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
