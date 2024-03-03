import React, { MouseEventHandler } from "react";
import Link from "next/link";
import Image from "next/image";

import { useCartStore } from "../store/cartStore";
import { Burger } from "../types";

interface ProductCountProps {
  productQuantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ProductCount = ({
  productQuantity,
  handleIncrement,
  handleDecrement,
}: ProductCountProps) => (
  <div className="flex h-full">
    <button
      className="h-full w-6 bg-blue-600 text-white font-bold"
      onClick={handleDecrement}
    >
      -
    </button>

    <input
      type="text"
      className="w-6 h-full text-center"
      disabled
      value={productQuantity}
    />

    <button
      className="h-full w-6 bg-blue-600 text-white font-bold"
      onClick={handleIncrement}
    >
      +
    </button>
  </div>
);

interface Props {
  product: Burger;
}

function CartItem({ product }: Props) {
  const totalPrice: number = product.quantity * product.price;

  const increaseProductQuantity = useCartStore((state) => state.addProd);
  const decreaseProductQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const deleteProduct = useCartStore((state) => state.deleteProd);

  const handleIncreseProduct = () => {
    increaseProductQuantity(product);
  };
  const handleDecreseProduct = () => {
    decreaseProductQuantity(product);
  };
  const handleDeleteProduct = () => {
    deleteProduct(product);
  };

  return (
    <div
      className={`w-full h-14 p-4 pr-0 flex items-center gap-x-3 flex-nowrap text-xs overflow-hidden`}
    >
      <Image width={40} height={40} src={product.img} alt={product.title} />
      <div
        className="whitespace-nowrap text-ellipsis flex-1 overflow-hidden"
        title={product.title}
      >
        {product.title}
      </div>
      <ProductCount
        productQuantity={product.quantity}
        handleIncrement={handleIncreseProduct}
        handleDecrement={handleDecreseProduct}
      />
      <div className="whitespace-nowrap flex-1 max-w-12 font-bold">
        $ {totalPrice}
      </div>
      <button
        type="button"
        className="h-full w-10"
        onClick={handleDeleteProduct}
      >
        <span>❌</span>
      </button>
    </div>
  );
}

export default CartItem;
