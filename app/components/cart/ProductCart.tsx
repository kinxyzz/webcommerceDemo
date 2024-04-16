"use client";

import useCart from "@/app/hook/useCart";
import useUser from "@/app/hook/useUser";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import ProductPiece from "./ProductPiece";

// export interface dataProduct {
//   name?: string;
//   price?: number;
//   quantity?: number;
// }

// const products: dataProduct[] = [
//   {
//     name: "GHRKTN01",
//     price: 1000000,
//     quantity: 1,
//   },
//   {
//     name: "GHRKTN02",
//     price: 600000,
//     quantity: 1,
//   },
//   {
//     name: "GHRKTN03",
//     price: 500000,
//     quantity: 1,
//   },
// ];

export default function ProductCart({
  setShowCart,
}: {
  setShowCart?: (state: boolean) => void;
}) {
  const { cart: products } = useCart();
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const handletoLoginPage = () => {
    if (setShowCart === undefined) return;
    setShowCart(false);
    router.push("/login");
  };

  if (!user) {
    return (
      <>
        <div className="flex flex-col gap-4 py-2 px-4 w-full items-center ">
          <p className="text-center text-slate-900">
            You must login first if want use cart
          </p>
          {pathname !== "/login" && (
            <Button onClick={handletoLoginPage}>Login?</Button>
          )}
        </div>
      </>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="flex flex-col gap-4 py-2 px-4 w-full items-center ">
        <p className="text-center text-slate-900">Happy Shopping!!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 py-2 px-4 w-full items-center  h-5/6 overflow-y-scroll ">
      {products?.map((product) => (
        <ProductPiece key={product.id} product={product} />
      ))}
    </div>
  );
}
