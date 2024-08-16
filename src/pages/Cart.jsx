import React from "react";
import "../css/Cart.css";
import { useCart } from "../providers/CartProvider";

export function Cart() {
  const { products, addCart, removeCart, quickRemove } = useCart();

  if (products.length === 0) {
    return <p className="empty-cart">Your cart is empty</p>;
  }

  return (
    <div className="cart-container">
      {products.map((product, index) => (
        <div className="cart-item" key={index}>
          <div className="cart-content">
            <img
              src={product.imgUrl}
              alt={product.title}
              height="200"
              width="200"
            />
            <h3>{product.title}</h3>
            <div className="cart-quantity">
              <p>
                <b>{product.quantity}</b>
              </p>
            </div>
          </div>
          <div className="cart-actions">
            <button onClick={() => addCart(product)} className="cart-btn">
              Add
            </button>
            <button
              onClick={() => removeCart(product.id)}
              className="cart-btn remove-btn"
            >
              Remove
            </button>
            <button
              onClick={() => quickRemove(product.id)}
              className="cart-btn"
            >
              Quick Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
