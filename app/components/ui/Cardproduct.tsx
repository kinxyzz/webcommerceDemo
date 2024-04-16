"use client";

import AddCart from "@/app/hook/AddCart";
import useCart from "@/app/hook/useCart";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import Button from "./Button";

interface cardProps {
  name: string;
  price: number;
  image: string;
  id: number;
  category: {
    type: string;
    price: number;
  };
}
export const discount = 30;

export default function Cardproduct({ item }: { item: cardProps }) {
  const data = {
    name: item.name,
    price: item.category.price,
    image: item.image,
    id: item.id,
    type: item.category.type,
  };

  const priceDiscount = data.price - (data.price * discount) / 100;

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { mutate } = AddCart();
  const { cart } = useCart();
  const { user } = useUser();
  const CartID = cart?.map((item) => item?.product?.id);

  const typeProduct =
    data.type && data.type.substring(0, 1)?.toUpperCase() + data.type.slice(1);

  function handleAddCart(id?: number) {
    if (!user) {
      setOpen(true);
    }
    mutate(id);
  }

  function handletoLogin() {
    setOpen(false);
    router.push("/login");
  }

  return (
    <>
      <div className="flex flex-col shadow-md max-w-sm rounded-md gap-1 py-2 p-1 overflow-hidden">
        <div className="flex justify-center object-cover overflow-hidden rounded-md">
          <Image
            width={400}
            height={400}
            src={`https://picsum.photos/id/1/200/250`}
            alt="kain batik"
          />
        </div>
        <h4 className="text-base font-bold ml-1 mt-2">{"lorem ipsum"}</h4>
        <p className="ml-1 text-slate-800 text-sm font-semibold inline-flex gap-2 w-full "></p>
        <div className="flex gap-2 items-center">
          <p className="px-2 py-1 rounded-md bg-red-900 text-white">
            {discount}%
          </p>
          <p className="font-bold text-red-900">Off</p>
        </div>
        <div>
          <p className="ml-1 mb-1 line-through text-slate-600 text-sm font-bold inline-flex gap-2 w-full ">
            {data.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="ml-1 mb-1  text-slate-900 text-sm font-bold inline-flex gap-2 w-full ">
            {priceDiscount.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
        </div>

        <div className="flex items-center ml-1 mt-1">
          {CartID?.includes(data.id) ? (
            <button className=" w-15 flex flex-nowrap gap-2 text-center justify-center items-center px-3 py-2 rounded-md border-yellow-600 border-[1px] hover:cursor-not-allowed ">
              Item in Cart
            </button>
          ) : (
            <Button onClick={() => handleAddCart(data.id)}>
              <IoBagCheckOutline /> <p>Add Cart</p>
            </Button>
          )}
        </div>
      </div>
      {open && (
        <div className="fixed bg-black/50  inset-0 flex items-center justify-center z-50">
          <div className="relative bg-slate-100 p-10 rounded-md">
            <p>You Need To Login first</p>
            <p className="mt-2 pb-12">
              Click <span className="font-bold">Login</span> Below
            </p>
            <div className="absolute bottom-3 right-4 grid grid-cols-2 gap-2">
              <Button className="bg-red-700" onClick={() => setOpen(false)}>
                Close
              </Button>
              <Button onClick={handletoLogin}>Login</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
