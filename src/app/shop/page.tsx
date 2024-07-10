"use client";
import burgers from "@/app/utils/dataBurguer.json";
import type { Burger } from "../types";

import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import ClientDataForm from "../components/ClientDataForm";

export default function ShopPage() {
  const burguerList: Burger[] = burgers;

  return (
    <main className="w-full py-10 min-h-screen">
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
    </main>
  );
}
