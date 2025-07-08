"use client";

import React, { useState } from "react";
import Image from "next/image";

export const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");

  const openModal = (type: "login" | "signup") => {
    setAuthType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className="Navbar">
        <div className="Header">
          <div className="Imageh">
            <Image
              src="/me.png"
              alt="logo"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <h1>SIDDIQUI STORES</h1>
          </div>
          <div className="Buttons">
            <button onClick={() => openModal("login")}>Login</button>
            <button onClick={() => openModal("signup")}>Signup</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="ModalOverlay">
          <div className="ModalContent">
            <h2>{authType === "login" ? "Login" : "Signup"}</h2>
            <form >
              {authType === "signup" && (
                <input type="text" placeholder="Full Name" required />
              )}
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">
                {authType === "login" ? "Login" : "Signup"}
              </button>
            </form>
            <button onClick={closeModal} className="CloseBtn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
