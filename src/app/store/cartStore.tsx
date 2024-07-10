import { create } from "zustand";
import type { Burger } from "../types";

interface State {
  burgers: Burger[];
  total: number;
}

interface Actions {
  addProd: (newProd: Burger) => void;
  decreaseQuantity: (newProd: Burger) => void;
  deleteProd: (prod: Burger) => void;
}

const recalcProds: (burgerList: Burger[]) => number = (burgerList) => {
  const totalOfProds = burgerList.reduce((acc, pack) => {
    return (acc += pack.quantity);
  }, 0);
  return totalOfProds;
};

export const useCartStore = create<State & Actions>((set, get) => ({
  burgers: [],
  total: 0,
  addProd: (newProd: Burger) => {
    const currentBurgers: Burger[] = get().burgers;
    const prodIndex: number = currentBurgers.findIndex(
      (burger) => newProd.title === burger.title
    );
    if (prodIndex >= 0) {
      currentBurgers[prodIndex].quantity += 1;

      set({ burgers: currentBurgers });
    } else {
      set((state) => ({
        burgers: [...state.burgers, { ...newProd, quantity: 1 }],
      }));
    }
    set({ total: recalcProds(get().burgers) });
  },

  decreaseQuantity: (prod: Burger) => {
    if (prod.quantity <= 1) return;

    const newProdList: Burger[] = get().burgers.map((burger) => {
      if (prod.title === burger.title) {
        if (burger.quantity > 1)
          return { ...burger, quantity: (burger.quantity -= 1) };
      }
      return burger;
    });
    set({ burgers: newProdList });
    set({ total: recalcProds(get().burgers) });
  },

  deleteProd: (prod) => {
    const burguerList = get().burgers;
    const newBurguerList = burguerList.filter(
      (burger: Burger) => burger.title !== prod.title
    );
    set({ burgers: newBurguerList });
    set({ total: recalcProds(get().burgers) });
  },
}));
