import Image from "next/image";

import PrimaryButton from "./PrimaryButton";
import type { Burger } from "../types";
import { useCartStore } from "@/app/store/cartStore";
import { before } from "node:test";

export default function Card(burger: Burger) {
  const addProd = useCartStore((state) => state.addProd);

  const handleAddProd = () => {
    addProd(burger);
  };

  const desboxStyles = {
    transform: "skewX(-3deg)",
  };

  return (
    <article className=" max-w-md size-full skew-x-3 ">
      <div className="absolute w-20 h-52 bg-blue-400 -left-3 bottom-0 -skew-x-6 -z-10 rounded-b-2xl"></div>
      <div className="flex flex-col bg-white size-full text-black rounded-2xl text-center p-4 ">
        <picture
          className="bg-slate-100 rounded-2xl relative p-4 h-32 mt-6"
          style={desboxStyles}
        >
          <Image
            src={burger.img}
            alt={burger.title}
            width={450}
            height={200}
            className="absolute -top-8 left-1/2 -translate-x-1/2 w-44 drop-shadow-md "
          />
        </picture>
        <div
          className="flex flex-col justify-between flex-grow"
          style={desboxStyles}
        >
          <h5 className="font-bold text-lg mt-4 mb-2">{burger.title}</h5>
          <p className="w-full font-sans text-sm mb-2 px-10 text-pretty">
            {burger.desc}
          </p>
          <div className="font-bold text-lg my-2">$ {burger.price}</div>
          <div className="self-center text-white font-bold ">
            <PrimaryButton text="+" handleClick={handleAddProd} />
          </div>
        </div>
      </div>
    </article>
  );
}
