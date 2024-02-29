"use client";
import Image from "next/image";
import { useCartStore } from "../store/cartStore";
import type { Burger, BurgerPack } from "../types";

export default function NavMenu() {
  const totalItemsToCart = useCartStore((state) => state.total);

  return (
    <header className="bg-white w-full h-max max-h-24 min-h-14 py-4 shadow-md sticky top-0 z-50">
      <section className="max-w-screen-sm size-full mx-auto pr-8 flex justify-between items-center">
        <div>
          LOGO
          {/* <Image width={80} height={80} src={"/bg1.jpg"} alt="logo" /> */}
        </div>
        <nav>
          <h2 className="text-red-800 relative">
            <span className="absolute -top-4 -right-4 bg-orange-500 px-2 py-1 text-xs text-white font-bold rounded-full">
              {totalItemsToCart}
            </span>
            cart
          </h2>
        </nav>
      </section>
    </header>
  );
}
