import type { Burger } from "../types";

const PHONE_NUMBER: string = "541123308771"
const URL_API: string = "https://api.whatsapp.com/send?phone="

export const sendMessage = (cart: Burger[], orderData: Object) => {
  let order: string[] = [];
  let subTotal: number = 0
  
  Object.entries(orderData).map(([key, value]) => {
    order.push("🔸 ",key, ": ", `${value}%0A`);
  })

  order.push("%0A")

  cart.map((burger: any) => {
    order.push("🟢 ", burger.title, " X ", `${burger.quantity.toString()}%0A`);
    subTotal += burger.price * burger.quantity;
  });

  const text: string = order.join("").replaceAll(' ', "%20");

  const link: string = `${URL_API}${PHONE_NUMBER}&text=*Tu%20pedido:*%0A${text}%0A*Total:%20$${Math.round(subTotal)}*`
  return link
} 
