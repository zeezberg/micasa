import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductDetails from "./pages/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import MainPage from "./pages/mainPage/MainPage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
