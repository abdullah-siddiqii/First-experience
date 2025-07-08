"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type HomeProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  targetCount?: number;
  onTotalChange?: (change: number) => void;
  reset?: boolean;
};

export default function Home({
  image,
  title,
  description,
  price,
  targetCount = 5,
  onTotalChange,
  reset,
}: HomeProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reset && count > 0) {
      setCount(0); 
      toast.success(`${title} cleared!`);
    }
  }, [reset]);

  const increment = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      if (onTotalChange) onTotalChange(price);
      if (newCount === targetCount) {
        toast.success("You have enough!");
      }
      return newCount;
    });
  };

  const decrement = () => {
    if (count === 0) {
      toast.error("Cannot go below 0!");
      return;
    }
    setCount((prev) => {
      if (onTotalChange) onTotalChange(-price);
      return prev - 1;
    });
  };

  const total = count * price;

  return (
    
    <div className="container">
      <img src={image} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <p className="price">Price: <span>PKR {price.toLocaleString()}</span> </p>


      <div className="controls">
        <button onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment}>+</button>
      </div>

      <div className="status">
        {count >= targetCount ? "✅ Enough" : "❌ Not enough"}
      </div>

      <div className="card-total">
        <strong>Total for this item: PKR {total.toLocaleString()}</strong>
      </div>
    </div>
  );
}
