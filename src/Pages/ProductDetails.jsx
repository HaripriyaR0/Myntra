import { useParams } from "react-router-dom";
import { allProducts } from "../data/allData";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const allItems = Object.values(allProducts).flat();
  const product = allItems.find((item) => item.id === id);

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="detail-container">

      <div className="detail-left">
        <img src={product.image} alt="" />
      </div>

      <div className="detail-right">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="tax">inclusive of all taxes</p>

        <h4>Select Size</h4>
        <div className="sizes">
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
        </div>

        <div className="buttons">
          <button className="cart-btn">ADD TO BAG</button>
          <button className="wish-btn">WISHLIST</button>
        </div>

        <div className="extra">
          <h4>Product Details</h4>
          <p>High quality product. Comfortable and stylish.</p>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;
