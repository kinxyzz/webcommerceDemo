"use client";

import { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const initUser = {
  first_name: "",
  id: "",
  last_name: "",
  rank: "",
};

export async function getUser() {
  const supabase = createClientComponentClient<Database>();
  const { data: session } = await supabase.auth.getSession();
  if (session) {
    const { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .single();
    return user;
  }

  return initUser;
}
