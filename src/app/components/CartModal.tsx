import { Burger } from "../types";

import CartItem from "./CartItem";
import { useCartStore } from "../store/cartStore";
import { sendMessage } from "@/app/utils/whatsappServices";

function CartModal() {
  const cart: Burger[] = useCartStore((state) => state.burgers);

  const handleSend = () => {
    const link = sendMessage(cart);
    window.location.assign(link);
  };

  const subTotal: number = cart.reduce((acc: number, brg: Burger) => {
    return (acc += brg.price * brg.quantity);
  }, 0);

  return (
    <section>
      <div className="border rounded-lg bg-white max-w-[100%] overflow-hidden">
        {!cart.length && (
          <div className="min-w-40 text-center bg-red-100 h-10 p-2 my-2 ">
            Sin elementos
          </div>
        )}
        {cart.map((product) => (
          <CartItem key={product.title} product={product} />
        ))}
        <div className="flex p-2 text-sm mt-1 border-t border-gray-400 font-bold justify-between ">
          <span>Sub-total:</span>
          <span>{subTotal}</span>
        </div>
        <button
          type="button"
          className="text-white bg-blue-600 text-center text-sm font-bold w-full h-8"
          onClick={handleSend}
        >
          Enviar
        </button>
      </div>
    </section>
  );
}

export default CartModal;
