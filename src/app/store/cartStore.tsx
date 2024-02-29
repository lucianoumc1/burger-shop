import { create } from "zustand";
import type { Burger, BurgerPack } from "../types";

interface State {
  burgers: BurgerPack[];
  total: number;
}

interface Actions {
  addProd: (newProd: Burger) => void;
  deleteProd: (prod: Burger) => void;
}

const recalcProds: (burgerList: BurgerPack[]) => number = (burgerList) => {
  const totalOfProds = burgerList.reduce((acc, pack) => {
    return (acc += pack.quantity);
  }, 0);
  return totalOfProds;
};

export const useCartStore = create<State & Actions>((set, get) => ({
  burgers: [],
  total: 0,
  addProd: (newProd) => {
    const currentBurgers: BurgerPack[] = get().burgers;
    const isProductExist: number = currentBurgers.findIndex(
      (burger) => newProd.title === burger.title
    );
    if (isProductExist >= 0) {
      currentBurgers[isProductExist].quantity += 1;

      set({ burgers: currentBurgers });
    } else {
      set((state: State) => ({
        burgers: [...state.burgers, { ...newProd, quantity: 1 }],
      }));
    }
    set({ total: recalcProds(get().burgers) });
  },
  deleteProd: (prod) => {
    const burguerList = get().burgers;
    const newBurguerList = burguerList.filter(
      (burger: Burger) => burger.title !== prod.title
    );
    set({ burgers: newBurguerList });
  },
  recalculateProds: () => {
    console.log("hola");
  },
}));
