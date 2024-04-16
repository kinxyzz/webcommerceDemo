"use client";
import useCart from "@/app/hook/useCart";
import useUser from "@/app/hook/useUser";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { RiUserReceivedFill } from "react-icons/ri";
import { SlLogout } from "react-icons/sl";
import Modal from "../cart/CartModal";

export default function Useraction({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const { user } = useUser();
  const { cart } = useCart();
  const queryClient = useQueryClient();

  //get username from data session
  const username = user?.first_name;

  //handle logout
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    queryClient.clear();
    router.refresh();
  };

  const handleCart = () => {
    if (isOpen) setIsOpen(false);

    setShowCart((showCart) => !showCart);
  };

  return (
    <>
      <div className="flex w-full lg:w-1/3 items-center justify-end gap-4">
        <div className="flex gap-4 items-center">
          <button className="relative" onClick={handleCart}>
            <div className="absolute top-0 right-0 left-0 bottom-2 text-xs  flex p-1 items-center justify-center  text-white ">
              {cart?.length}
            </div>
            <MdShoppingCart className="text-4xl  hover:text-yellow-400 active:text-yellow-700 cursor-pointer " />
          </button>

          {username ? (
            <>
              <p>Hi {username}</p>
              <button onClick={handleSignOut}>
                <SlLogout className="text-2xl  hover:text-yellow-400 active:text-yellow-700 cursor-pointer" />
              </button>
            </>
          ) : pathname === "/login" ? (
            ""
          ) : (
            <button
              className="flex flex-col items-center justify-center"
              onClick={() => router.push("/login")}
            >
              <RiUserReceivedFill className="text-3xl hover:text-yellow-400 active:text-yellow-700 cursor-pointer " />
            </button>
          )}
        </div>
      </div>
      <Modal setShowCart={setShowCart} showCart={showCart} />
    </>
  );
}
