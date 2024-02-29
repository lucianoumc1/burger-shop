"use client";
import burgers from "@/app/utils/dataBurguer.json";
import type { Burger, BurgerPack } from "../types";

import Card from "../components/Card";
import { useCartStore } from "../store/cartStore";
import PrimaryButton from "../components/PrimaryButton";
import { sendMessage } from "@/app/utils/whatsappServices";

export default function ShopPage() {
  const burguerList: Burger[] = burgers;

  const cart: BurgerPack[] = useCartStore((state) => state.burgers);

  const handleSend = () => {
    const link = sendMessage(cart);
    window.location.assign(link);
  };

  return (
    <main className="w-full my-10">
      <section className="grid grid-cols-3 grid-flow-row max-w-screen-lg mx-auto gap-12 px-8">
        {burguerList?.map((burger) => (
          <div
            className="col-span-3 sm:col-span-2 md:col-span-1 mx-auto size-full"
            key={burger.title}
          >
            <Card {...burger} />
          </div>
        ))}
      </section>
      <div className="text-center mt-14">
        <PrimaryButton text="Enviar" handleClick={handleSend} />
      </div>
    </main>
  );
}
