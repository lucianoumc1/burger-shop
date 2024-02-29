import type { BurgerPack } from "../types";

const PHONE_NUMBER: string = "541123308771"
const URL_API: string = "https://api.whatsapp.com/send?phone="

export const sendMessage = (cart: BurgerPack[]) => {
  let order: string[] = [];
  let subTotal: number = 0
  
  cart.map((burger: any) => {
    order.push("🟢", burger.title, " X ", `${burger.quantity.toString()}%0A`);
    subTotal += burger.price * burger.quantity;
    return;
  });

  const words: string = order.join("").replaceAll(' ', "%20");

  const link: string = `${URL_API}${PHONE_NUMBER}&text=*Tu%20pedido:*%0A${words}%0A*Total:%20$${Math.round(subTotal)}*`
  return link
} 
