import styles from "./products.module.css";
import { useNavigate } from "react-router-dom";

const Product = ({ image, title, price, addToCartFunc, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image"]}>
      <a onClick={() => navigate(`/product/${id}`)}>
          <img src={image} alt="Product" />
        </a>
      </div>
      <div className={styles["product-info"]}>
        <h5>{title}</h5>
      </div>
      <button className={styles["addToCart-btn"]} onClick={addToCartFunc}>
        🛒
      </button>
      <h6>${price}</h6>
    </div>
  );
};
export default Product;
