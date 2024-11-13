import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Cart from "../page/Cart";
import PageLayout from "../layout/PageLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
