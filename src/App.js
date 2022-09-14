import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                  path="/category/:drinkId"
                  element={<ItemListContainer />}
                />
                <Route
                  path="/detail/:itemId"
                  element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </CartContextProvider>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
