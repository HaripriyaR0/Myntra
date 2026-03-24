import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const Page = ({ name }) => <h1>{name} PAGE</h1>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Existing */}
        <Route path="/men" element={<Page name="MEN" />} />
        <Route path="/women" element={<Page name="WOMEN" />} />
        <Route path="/kids" element={<Page name="KIDS" />} />
        <Route path="/beauty" element={<Page name="BEAUTY" />} />
        <Route path="/profile" element={<Page name="Profile" />} />

        {/* ✅ ADD THIS */}
        <Route path="/watch" element={<Page name="WATCHES" />} />

        {/* Optional extra categories (future use 🔥) */}
        <Route path="/footwear" element={<Page name="FOOTWEAR" />} />
        <Route path="/electronics" element={<Page name="ELECTRONICS" />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/bag" element={<Page name="BAG" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;