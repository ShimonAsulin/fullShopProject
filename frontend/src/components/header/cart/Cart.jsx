import React, { useEffect, useState } from "react";
import { useMyContext } from "../../../MyContext";
import styles from "../../../style/cart.module.css";
const Cart = () => {
  const { inCart } = useMyContext();
  const { cart } = inCart;
  // const [add, setAdd] = useState(1);
  // useEffect(() => {
  //   setAdd(cart)

  // }, [cart]);

  const allProductsInCart = cart.map((product) => {
    let { title, image, price, id, amount } = product;
    // const addAmount = () => {
    //   return product.amount++
    // }
    return (
      <div key={id} className={styles.cartCard}>
        <div className={styles}>
          <img src={image} alt="Product" />
        </div>
        <div className={styles.cartInfo}>
          <h5>{title}</h5>
          <h5 className={styles.cartAmount}>amount: {amount}</h5>
          {/* <button onClick={() => addAmount()}>+</button> */}
          {/* <button>-</button> */}
        </div>
        <h6>${price}</h6>
      </div>
    );
    console.log(amount);
  });

  return (
    <div>
      <h2>you have {cart.length} products</h2>
      {allProductsInCart}

      {cart.length > 0 && (
        <button onClick={() => alert("thanks for your purchase")}>
          Pay now
        </button>
      )}
    </div>
  );
};

export default Cart;
