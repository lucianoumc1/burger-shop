import { useState } from "react";
import Image from "next/image";

import PrimaryButton from "./PrimaryButton";
import type { Burger } from "../types";
import { useCartStore } from "@/app/store/cartStore";

interface ButtonProps {
  text: string;
  callBack?: () => void;
}
function ButtonCard({ text, callBack }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    callBack && callBack();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <button
      type="button"
      className={`py-2 px-6 rounded-xl font-semibold text-white  ${
        isClicked ? "bg-green-500" : "bg-blue-600"
      }`}
      onClick={handleClick}
    >
      {isClicked ? (
        <svg
          className="h-5 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        text
      )}
    </button>
  );
}

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
            <ButtonCard text="+" callBack={handleAddProd} />
          </div>
        </div>
      </div>
    </article>
  );
}
