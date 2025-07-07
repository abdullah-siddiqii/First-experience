"use client";

import { useState } from "react";
import toast from "react-hot-toast";

type HomeProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  targetCount?: number;
  onTotalChange?: (change: number) => void;
};

export default function Home({
  image,
  title,
  description,
  price,
  targetCount = 5,
  onTotalChange,
}: HomeProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onTotalChange) onTotalChange(price);
    if (newCount === targetCount) {
      toast.success("You have enough!");
    }
  };

  const decrement = () => {
    if (count === 0) {
      toast.error("Cannot go below 0!");
      return;
    }
    setCount(count - 1);
    if (onTotalChange) onTotalChange(-price);
  };

  const total = count * price;

  return (
    <div className="container">
      <img src={image} alt={title} className="image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: PKR {price}</p>

      <div className="controls">
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <div className="status">
        {count >= targetCount ? "✅ Enough" : "❌ Not enough"}
      </div>

      <div className="card-total">
        <strong>Total for this item: PKR {total}</strong>
      </div>
    </div>
  );
}
