import { useParams } from "react-router-dom";
import { useState } from "react";
import { allProducts } from "../data/allData";
import ProductCard from "../components/ProductCard";
import "./CategoryPage.css";

function CategoryPage() {
  const { category } = useParams();

  const categoryData = allProducts[category?.toLowerCase()];

  // 🔥 STATE
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [sortType, setSortType] = useState("");

  if (!categoryData) {
    return (
      <div className="not-found">
        <h2>Category Not Found</h2>
      </div>
    );
  }

  // 🔥 FLATTEN DATA
  const allItems = categoryData.sections.flatMap((sec) => sec.items);

  // 🔥 HANDLE CHECKBOX
  const handleCheck = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  // 🔥 FILTER LOGIC
  let filteredItems = [...allItems];

  // CATEGORY FILTER
  if (selectedCategories.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedCategories.includes(item.type)
    );
  }

  // BRAND FILTER
  if (selectedBrands.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      selectedBrands.includes(item.brand)
    );
  }

  // PRICE FILTER
  if (selectedPrice.length > 0) {
    filteredItems = filteredItems.filter((item) => {
      return selectedPrice.some((range) => {
        if (range === "low") return item.price < 500;
        if (range === "mid") return item.price >= 500 && item.price <= 1000;
        return false;
      });
    });
  }

  // SORTING
  if (sortType === "low") {
    filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="category-container">

      {/* 🔴 SIDEBAR */}
      <div className="sidebar">
        <h3>Filters</h3>

        {/* CATEGORY */}
        <div className="filter-section">
          <h4>Category</h4>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("tshirt", selectedCategories, setSelectedCategories)
              }
            />
            T-Shirts
          </label>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("shirt", selectedCategories, setSelectedCategories)
              }
            />
            Shirts
          </label>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("jeans", selectedCategories, setSelectedCategories)
              }
            />
            Jeans
          </label>
        </div>

        {/* PRICE */}
        <div className="filter-section">
          <h4>Price</h4>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("low", selectedPrice, setSelectedPrice)
              }
            />
            Below ₹500
          </label>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("mid", selectedPrice, setSelectedPrice)
              }
            />
            ₹500 - ₹1000
          </label>
        </div>

        {/* BRAND */}
        <div className="filter-section">
          <h4>Brand</h4>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("Nike", selectedBrands, setSelectedBrands)
              }
            />
            Nike
          </label>

          <label>
            <input
              type="checkbox"
              onChange={() =>
                handleCheck("Puma", selectedBrands, setSelectedBrands)
              }
            />
            Puma
          </label>
        </div>
      </div>

      {/* 🟢 RIGHT SIDE */}
      <div className="products-section">

        {/* HEADER */}
        <div className="product-header">
          <h2>{categoryData.title}</h2>
          <p>{filteredItems.length} items</p>

          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="product-grid">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default CategoryPage;
