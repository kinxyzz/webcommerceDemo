"use client";

import Pagination from "@/app/components/product/pagination";
import Cardproduct from "@/app/components/ui/Cardproduct";
import { useProduct } from "@/app/hook/useProduct";

export default function Product() {
  const { product: data, isLoading } = useProduct();

  let count = data?.count;

  let product = [];
  product = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-3xl font-bold">
          <div className="flex gap-2 items-center justify-center">
            <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-4 w-4 bg-black rounded-full animate-bounce"></div>
          </div>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 justify-center py-2">
      <Pagination count={count || 0} />
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
        {Array.isArray(product) &&
          product?.map(
            (item: any) =>
              item?.status === "ready" && (
                <Cardproduct key={item.id} item={item} />
              )
          )}
      </div>
      <Pagination count={count || 0} />
    </div>
  );
}
