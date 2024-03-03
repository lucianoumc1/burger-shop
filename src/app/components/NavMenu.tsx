"use client";
import { useState } from "react";
import Image from "next/image";

import { useCartStore } from "../store/cartStore";
import type { Burger } from "../types";
import CartModal from "./CartModal";

export default function NavMenu() {
  const totalItemsToCart = useCartStore((state) => state.total);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="bg-white w-full h-max max-h-24 min-h-14 py-4 shadow-md sticky top-0 z-50">
      <section className="max-w-screen-lg size-full mx-auto px-8 flex justify-between items-center relative">
        <div>
          <Image width={60} height={0} src={"/logo.jpg"} alt="logo" />
        </div>
        <nav>
          <button
            className="text-red-800 relative"
            onClick={() => setIsActive(!isActive)}
          >
            <span className="absolute -top-3 -right-3 bg-orange-500 px-2 py-1 text-xs text-white font-bold rounded-full">
              {totalItemsToCart}
            </span>
            <Image
              src="/cart-icon.png"
              alt="cart-icon"
              width={25}
              height={25}
            />
          </button>
        </nav>

        <div
          className={`absolute right-0 top-10 ${isActive ? "block" : "hidden"}`}
        >
          <CartModal />
        </div>
      </section>
    </header>
  );
}
