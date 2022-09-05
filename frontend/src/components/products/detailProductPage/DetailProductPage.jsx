import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../../../MyContext";
import styles from "./detailProductPage.module.css";
const DetailProductPage = () => {
  const { products, inCart } = useMyContext();
  const { addToCart } = inCart;
  const { productsData } = products;

  const [singleProduct, setSingleProduct] = useState([]);

  const { productId } = useParams(); //get the id from url

  useEffect(() => {
    const pageProduct = productsData.find((product) => product.id == productId);
    setSingleProduct(pageProduct);
  }, [productsData]);


  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-image"]}>
        <img src={singleProduct?.image} alt="Product" />
      </div>
      <div className={styles["product-info"]}>
        <h5>{singleProduct?.title}</h5>
      </div>
      <div >
        <h5 className={styles["product-info"]}>{singleProduct?.description}</h5>
      </div>
      <button
        className={styles["addToCart-btn"]}
        onClick={() => addToCart(singleProduct)}
      >
        🛒
      </button>
      <h6>${singleProduct?.price}</h6>
    </div>
  );
};

export default DetailProductPage;
