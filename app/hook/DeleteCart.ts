"use client";

import { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export async function CartSupabase(id: number) {
  const supabase = createClientComponentClient<Database>();
  const { data: session } = await supabase.auth.getSession();
  if (session) {
    const { error } = await supabase.from("shoppingCart").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }
  }
}

export default function DeleteCart() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: CartSupabase,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { mutate };
}
