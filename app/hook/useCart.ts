"use client";

import { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useQuery } from "@tanstack/react-query";

export async function getCart() {
  const supabase = createClientComponentClient<Database>();
  const { data: session } = await supabase.auth.getSession();

  if (session) {
    if (!session?.session?.user?.id) {
      return [];
    }

    let {
      data: shoppingCart,
      error,
      count,
    } = await supabase
      .from("shoppingCart")
      .select("*,product(id,name,image,category_id(price))", {
        count: "exact",
      })
      .eq("user_id", session?.session?.user?.id);

    if (error) {
      throw new Error(error.message);
    }

    return shoppingCart;
  }
  return [];
}

export default function useCart() {
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  return { cart };
}
