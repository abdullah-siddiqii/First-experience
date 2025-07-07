"use client";

import { useState } from "react";
import Home from "./components/card";
import "./globals.css";

export default function Page() {
  const [total, setTotal] = useState(0);

  const handleTotalChange = (change: number) => {
    setTotal((prev) => prev + change);
  };

  return (
    <div>
      <div className="all-cards">
        <Home
          image="https://demo-source.imgix.net/snowboard.jpg?w=7094&h=5157&rect=1098%2C303%2C7094%2C5157"
          title="Premium Cafe"
          description="For coffee lovers"
          price={10}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/sneakers.jpg"
          title="Premium Shoes"
          description="For shoe lovers"
          price={25}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/plant.jpg?w=4160&h=4520&rect=0%2C1051%2C4160%2C4520"
          title="Premium Plant"
          description="For plant lovers"
          price={15}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/head_shot.jpg"
          title="Premium Clothes"
          description="For clothes lovers"
          price={20}
          onTotalChange={handleTotalChange}
        />
      </div>

      <div className="total-price">
        <h2>Grand Total: ${total}</h2>
      </div>
    </div>
  );
}
