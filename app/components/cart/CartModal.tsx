"use client";

import { TfiClose } from "react-icons/tfi";

import useCart from "@/app/hook/useCart";
import useUser from "@/app/hook/useUser";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { discount } from "../ui/Cardproduct";
import ProductCart from "./ProductCart";

interface propsModal {
  children?: React.ReactNode;
  setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
  showCart?: boolean;
}

export default function Modal({ children, setShowCart, showCart }: propsModal) {
  const { user } = useUser();

  const first_name = user?.first_name;
  const last_name = user?.last_name;

  const { cart: productsCart = [] } = useCart();

  const handleCart = () => {
    if (setShowCart === undefined) return;
    setShowCart(false);
  };

  let productConsumer = productsCart
    ?.map(
      (product: any, index: number) =>
        `${index + 1}. ${product?.product?.name} || Price: Rp. ${(
          product?.quantity *
          ((product?.product?.category_id?.price * (100 - discount)) / 100)
        ).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}`
    )
    .join("\n");

  const totalPrice = productsCart?.reduce((acc: number, obj: any) => {
    return acc + (obj.product.category_id.price * (100 - discount)) / 100;
  }, 0);

  const formatMessage = (productsCart: any) => {
    if (!productsCart) return;

    return `name : ${first_name} ${last_name}

product :
${productConsumer}

total : ${productsCart
      ?.reduce((acc: number, obj: any) => {
        // Menambahkan harga (price) produk saat ini ke dalam akumulator
        return acc + (obj.product.category_id.price * (100 - discount)) / 100;
      }, 0)
      .toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;
    // prettier-ignore-end
  };

  //handleCheckout
  function handleCheckout() {
    const message = formatMessage(productsCart);

    if (!message || !user || !productsCart) {
      return;
    }

    // console.log(message);

    const encodedMessage = encodeURIComponent(message);
    const url = ``;

    window.open(url, "_blank");
  }

  return (
    <div
      className={`fixed duration-300 block h-screen w-4/5 lg:w-1/4 bg-slate-100 ${
        showCart ? "right-0" : "-right-full"
      } top-0 overflow-scroll `}
    >
      <button className="m-2 mx-2 rounded-full p-1" onClick={handleCart}>
        <motion.div whileTap={{ scale: 0.9 }} animate={{ rotate: 90 }}>
          <TfiClose className="text-2xl hover:text-yellow-400 hover:cursor-pointer " />
        </motion.div>
      </button>
      <div className="flex flex-col  items-center gap-4">
        <h1 className="font-bold text-xl">Cart</h1>

        <ProductCart setShowCart={setShowCart} />
        <div>
          {productsCart?.length !== 0 && (
            <div className="flex gap-4 pt-2 items-center border-t border-slate-400">
              <p className="font-bold text-yellow-600">
                Total :
                {totalPrice?.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
              <Button onClick={handleCheckout}>Checkout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
