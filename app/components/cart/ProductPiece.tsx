import DeleteCart from "@/app/hook/DeleteCart";
import Image from "next/image";
import { discount } from "../ui/Cardproduct";

export default function ProductPiece({ product }: { product: any }) {
  const { mutate } = DeleteCart();

  const discountPrice =
    product?.product?.category_id?.price -
    (product?.product?.category_id?.price * discount) / 100;

  return (
    <div className=" h-32 bg-slate-100 text-slate-900 w-full p-2 border-b border-b-slate-200 ">
      <div className="relative flex gap-1 h-full justify-evenly items-center ">
        <div className={`h-24 w-16 bg-slate-900`}>
          <Image
            width={100}
            height={150}
            src={product?.product?.image}
            alt="batik"
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {product?.product?.name}
          </p>
          <p>
            <span className="font-semibold">Price:</span>
            {discountPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p>
            <span className="font-semibold">qty:</span> {product?.quantity}
          </p>
        </div>
        <div className="absolute bottom-0 right-0">
          <button
            onClick={() => mutate(product?.id)}
            className="px-2 py-1 bg-red-900 text-white rounded-md"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
