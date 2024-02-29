export interface Burger {
  title: string;
  desc: string;
  price: number;
  img: string;
}

export interface BurgerPack extends Burger {
  quantity: number;
}