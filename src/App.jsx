import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";

// IMPORTANT: check file names EXACT
import CategoryPage from "./Pages/CategoryPage";
import CartPage from "./Pages/CartPage";
import ProductDetails from "./Pages/ProductDetails";


const Page = ({ name }) => <h1>{name} PAGE</h1>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Static Pages */}
        <Route path="/profile" element={<Page name="Profile" />} />
        <Route path="/wishlist" element={<Wishlist />} />
       <Route path="/bag" element={<CartPage />} />

        {/* Product Detail Page */}
        <Route path="/product/:id" element={< ProductDetails/>} />

        {/* Dynamic Category Page (VERY IMPORTANT - keep last) */}
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
