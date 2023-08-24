import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { StyledApp } from "./style";

function App() {
  return (
    <StyledApp>
      <Cart />
      <Header />
      <main>
        <Hero />
        <Products />
      </main>
      <Footer />
    </StyledApp>
  );
}

export default App;
