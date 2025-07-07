"use client";

import toast from "react-hot-toast";
import { useCount } from "./CountContext";

export default function Add() {
  const { setCount } = useCount();

  const handleAdd = () => {
    toast.success("Added!");
    setCount(0); // ← Reset count to 0
  };

  return (
    <div className="container">
      <h2>Add Component</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
