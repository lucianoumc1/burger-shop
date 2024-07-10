"use client";
import "./style.css";
import React, { FormEventHandler, MouseEventHandler } from "react";
import { sendMessage } from "@/app/utils/whatsappServices";
import { Burger } from "../../types";
import { useCartStore } from "../../store/cartStore";

interface ClientDataFormProps {
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}

function ClientDataForm({ handleCloseModal }: ClientDataFormProps) {
  const cart: Burger[] = useCartStore((state) => state.burgers);

  const handleSendWsp: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();
    const form: HTMLFormElement = ev.currentTarget;
    const objectDataForm = Object.fromEntries(new FormData(form));
    const link = sendMessage(cart, objectDataForm);
    window.location.assign(link);
  };

  return (
    <>
      <div className="mx-2 p-8 bg-cyan-600 bg-opacity-100 rounded-md text-base max-w-screen-md top-1/2 sticky -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
        <button
          className="block px-2 rounded-full border w-max h-max text-white font-bold text-lg ml-auto mb-4 text-center"
          onClick={handleCloseModal}
        >
          x
        </button>
        <form onSubmit={handleSendWsp} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre"
            name="Nombre"
            className="p-2 rounded-md w-full outline-none"
          />
          <input
            type="text"
            placeholder="Calle y altura"
            name="Calle"
            className="p-2 rounded-md w-full outline-none"
          />
          <input
            type="text"
            placeholder="Entrecalles"
            name="Entrecalles"
            className="p-2 rounded-md w-full outline-none"
          />
          <div className="w-full flex items-center justify-around my-4  ">
            <input
              type="radio"
              name="Forma de pago"
              id="efectivo"
              value="Efectivo"
              defaultChecked
            />
            <label
              htmlFor="efectivo"
              className="font-semibold px-6 py-2 rounded-md checked-style
              "
            >
              Efectivo
            </label>
            <input
              type="radio"
              name="Forma de pago"
              id="tranferencia"
              value="Transferencia"
            />
            <label
              htmlFor="tranferencia"
              className="font-semibold px-6 py-2 rounded-md checked-style"
            >
              Transferencia
            </label>
          </div>
          <button
            className="max-w-sm w-full mx-auto py-2 bg-white rounded-md text-cyan-600 font-semibold"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
export default ClientDataForm;
