"use client";

import { useState } from "react";
import Home from "./components/card";
import "./globals.css";
import { NavBar } from "./components/navbar";
import { Footer } from "./components/footer";
export default function Page() {
  const [total, setTotal] = useState(0);
  const [resetAll, setResetAll] = useState(false); 

  const handleTotalChange = (change: number) => {
    setTotal((prev) => prev + change);
  };

  const clearAll = () => {
    setTotal(0);
    setResetAll(true); 
    setTimeout(() => setResetAll(false), 100);
  };

  return (
    <div>
      < NavBar/>
      <div className="all-cards">
        <Home
          image="https://demo-source.imgix.net/snowboard.jpg"
          title="Premium Cafe"
          description="For coffee lovers"
          price={500}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/sneakers.jpg"
          title="Premium Shoes"
          description="For shoe lovers"
          price={2500}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/plant.jpg"
          title="Premium Plant"
          description="For plant lovers"
          price={1500}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/head_shot.jpg"
          title="Premium Clothes"
          description="For clothes lovers"
          price={2000}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/group_photo.jpg"
          title="Premium Group"
          description="For Group Lovers"
          price={10000}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/puppy.jpg"
          title="Premium Pet"
          description="For Dog Lovers"
          price={4000}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/canyon.jpg"
          title="Premium Hills"
          description="For Hills Lovers"
          price={17000}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
        <Home
          image="https://demo-source.imgix.net/scooter.jpg"
          title="Premium Motors"
          description="For Scooter Lovers"
          price={100000}
          onTotalChange={handleTotalChange}
          reset={resetAll}
        />
      </div>
      <div className="total-price">
        <h2>Grand Total: <span>PKR {total.toLocaleString()}</span> </h2>
        <button onClick={clearAll} className="clear-button">
          Clear All
        </button>
      </div>
      < Footer/>
    </div>
  );
}


