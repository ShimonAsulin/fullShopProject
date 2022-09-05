import { Routes, Route} from "react-router-dom";

import About from "./Pages/about/About";
import Cart from "./components/header/cart/Cart";
import NotFound from "./Pages/NotFound/NotFound";
import Admin from "./Pages/admin/Admin";
import App from "./App";
import DetailProductPage from "./components/products/detailProductPage/DetailProductPage";
import Nav from "./components/header/nav/Nav";

const Router = () => {
  const isLoggedIn = true;
  return (
    <>
      <Nav />

      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="admin" element={<Admin />} />
          <Route path="product/:productId" element={<DetailProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="login" element={<NotFound />} />
          <Route path="register" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
