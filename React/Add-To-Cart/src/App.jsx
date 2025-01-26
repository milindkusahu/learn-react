import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Home from "../components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productList } from "../utils/data";

const App = () => {
  const [productId, setProductId] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!productId) return;

    const filteredObject = productList.filter(
      (product) => product.id === productId
    );
    setCartItems([...cartItems, ...filteredObject]);
  }, [productId]);

  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProductId} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
