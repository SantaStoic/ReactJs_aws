import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { About } from "./pages/about";
import { ShopContextProvider } from "./context/shop-context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Checkout } from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AeMgeSWFudNn7CCcrPeePM0NS7btB_aqB4XDq-D7OSav7dtizZ8f0EnfqJFkK0FmNbxUHX9cmbbI9DkS",
        }}
      >
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
