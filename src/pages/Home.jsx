import React, { useState, useEffect } from "react";
import "../css/Home.css";
import { useCart } from "../providers/CartProvider";

export const Home = () => {
  const [items, setItems] = useState([]);
  const { addCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return <p>Items not found...</p>;
  }

  return (
    <div className="home">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} addCart={addCart} />
      ))}
    </div>
  );
};

const ItemCard = ({ item, addCart }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToCart = () => {
    addCart({
      id: item.id,
      title: item.title,
      description: item.description,
      imgUrl: item.src,
      price: item.price,
    });
    setIsDisabled(true);
  };

  return (
    <div className="item">
      <h3>{item.title}</h3>
      <img src={item.src} alt={item.title} />
      <p>{item.description}</p>
      <span>${item.price}</span>
      <button
        onClick={handleAddToCart}
        disabled={isDisabled}
        className={isDisabled ? "btn-disabled" : "btn-active"}
      >
        {isDisabled ? "Added" : "Add to cart"}
      </button>
    </div>
  );
};
