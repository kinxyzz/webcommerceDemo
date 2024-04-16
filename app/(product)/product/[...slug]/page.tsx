import { STATIC_LINK } from "@/app/utils/staticlink";
import { Metadata } from "next";

async function fetchData(slug: string) {
  try {
    const checkNumber = parseInt(slug);

    if (isNaN(checkNumber)) {
      const res = await fetch(`${STATIC_LINK}/api/product/?type=${slug}`, {
        cache: "no-store",
      });
      return res.json();
    } else {
      const res = await fetch(`${STATIC_LINK}/api/product/?id=${slug}`, {
        cache: "no-store",
      });
      return res.json();
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { data } = await fetchData(params.slug);

  return (
    <div className="flex justify-center">
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 mx-auto"></div>
    </div>
  );
}

//   <div className="flex justify-center">
//     <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 mx-auto">
//       {product?.map((item) => (
//         <Cardproduct
//           key={item.id}
//           picture={item.image}
//           title={item.name}
//           desc={item.status}
//         />
//       ))}
//     </div>
//   </div>
