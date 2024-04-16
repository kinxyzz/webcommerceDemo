import { Database } from "@/lib/database.type";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { PAGE_SIZE } from "../utils/constant";

// export async function getData() {
//   try {
//     const res = await fetch(`${STATIC_LINK}/api/product`, {
//       cache: "no-store",
//     });
//     const result = await res.json();

//     return result;
//   } catch (error: any) {
//     throw new Error(error.message)
//   }
// }
export async function getData({
  page,
  filter,
  search,
}: {
  page: number;
  filter?: null | {
    field?: string | undefined;
    value?: string | undefined;
  };
  search?: string | null;
}) {
  const supabase = createClientComponentClient<Database>();
  let query = supabase
    .from("product")
    .select("*,category!inner(*)", { count: "exact" })

    .order("id", { ascending: false });

  if (search) query = query.ilike("name", `%${search}%`);

  if (filter)
    query = query.ilike(`${filter?.field}.type`, `%${filter?.value}%`);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }

  return { data, count };
}
