import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { CartPage } from "./pages/CartPage";
import { useContext } from "react";
import { FoodAppContext } from "./context/FoodAppContext";

export default function App() {
  const { cart } = useContext(FoodAppContext);
  return (
    <div className="App">
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/menu" style={{ textDecoration: "none" }}>
          Menu
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          Cart({cart.reduce((acc, curr) => acc + 1, 0)})
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
