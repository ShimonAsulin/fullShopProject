import React, { useEffect, useState } from "react";
import { useMyContext } from "../../../MyContext";
import styles from "../../../style/cart.module.css";
const Cart = () => {
  const { inCart } = useMyContext();
  const { cart } = inCart;
  useEffect(() => {
    console.log(cart.map((product) => product.amount)); 
  
    return () => {
    
    }
  }, [cart])
  
  // const countSum = cart.map(() => cart.amount)
  // const [productAmount, setProductAmount] = useState(countSum)
  
  const allProductsInCart = cart.map((product) => {
    let { title, image, price, id, amount } = product;
    console.log(product.amount);
    // const addAmount = (amount) => {
      
    // }
    return (
      <div key={id} className={styles.cartCard}>
        <div className={styles}>
          <img src={image} alt="Product" />
        </div>
        <div className={styles.cartInfo}>
          <h5>{title}</h5>
          <div>
          <button className={styles.btn}>+</button>
          {amount}
          <button className={styles.btn}>-</button>
          </div>
        <h6>${price}</h6>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h2>you have {cart.length} products</h2>
      {allProductsInCart}
      {/* <p>total: {productAmount}</p> */}
      {cart.length > 0 && (
        <button onClick={() => alert("thanks for your purchase")}>
          Pay now
        </button>
      )}
    </div>
  );
};

export default Cart;
