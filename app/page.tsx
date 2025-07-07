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
          price={500}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/sneakers.jpg"
          title="Premium Shoes"
          description="For shoe lovers"
          price={2500}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/plant.jpg?w=4160&h=4520&rect=0%2C1051%2C4160%2C4520"
          title="Premium Plant"
          description="For plant lovers"
          price={1500}
          onTotalChange={handleTotalChange}
        />
        <Home
          image="https://demo-source.imgix.net/head_shot.jpg"
          title="Premium Clothes"
          description="For clothes lovers"
          price={2000}
          onTotalChange={handleTotalChange}
        />

               <Home
          image="https://demo-source.imgix.net/group_photo.jpg"
          title="Premium Group"
          description="For Group Lovers"
          price={10000}
          onTotalChange={handleTotalChange}
        />
               <Home
          image="https://demo-source.imgix.net/puppy.jpg"
          title="Premium Pet"
          description="For Dog Lovers"
          price={4000}
          onTotalChange={handleTotalChange}
        />
                   <Home
          image="https://demo-source.imgix.net/canyon.jpg"
          title="Premium Hills"
          description="For Hills Lovers"
          price={17000}
          onTotalChange={handleTotalChange}
        />
                      <Home
          image="https://demo-source.imgix.net/scooter.jpg"
          title="Premium Motors"
          description="For Scooter Lovers"
          price={100000}
          onTotalChange={handleTotalChange}
        />
      </div>

      <div className="total-price">
        <h2>Grand Total: PKR {total}</h2>
      </div>
    </div>
  );
}
