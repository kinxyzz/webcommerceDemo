"use client";

import { useProduct } from "../hook/useProduct";
import Cardproduct from "./ui/Cardproduct";

export default function Collection() {
  const { product: data } = useProduct();

  let product = data?.data?.slice(0, 4) || [];

  return (
    <div className="flex  px-4 items-center justify-center ">
      <div className="container px-0 text-slate-800 py-10">
        <div>
          <h3 className="text-2xl font-bold">Koleksi Kain Batik Terbaru</h3>
          <p className="text-sm">
            Kami menyediakan koleksi kain batik terbaru.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 mx-auto">
            {product?.map((item: any) => (
              <Cardproduct key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
