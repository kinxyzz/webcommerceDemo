"use client";

import { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function getCart(id?: number) {
  const supabase = createClientComponentClient<Database>();

  const { data: session } = await supabase.auth.getSession();

  //jika id tidak ada maka kosongkan saja
  if (!id) {
    return;
  }

  const { data: shoppingCart, error } = await supabase
    .from("shoppingCart")
    .select("*,user_id(first_name),product_id")
    .eq("product_id", id);

  if (shoppingCart?.length === 0) {
    if (session) {
      const { data, error } = await supabase
        .from("shoppingCart")
        .insert([{ user_id: session?.session?.user?.id, product_id: id }])
        .select();

      if (error) {
        throw new Error(error.message);
      }

      return data;
    }
  } else {
    alert("sudah ada");
    return;
  }

  return [];
}

export default function AddCart() {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn: getCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    // onError: (err) => {
    //   alert("Login First");
    // },
  });
  return { mutate, error };
}
