import { Database } from "@/lib/database.type";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest: NextRequest) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });
  const { data } = await supabase
    .from("product")
    .select(
      `
    *,
    category (
      type,price
    )
  `
    )
    .range(0, 10);

  const { searchParams } = new URL(NextRequest.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  if (!id && !type) {
    return NextResponse.json({ status: 200, message: "success", data: data });
  }

  if (id) {
    const cobafind = data?.find((item) => item.id === Number(id));
    return NextResponse.json({
      status: 200,
      message: "success",
      data: cobafind,
    });
  }
  if (!id || type) {
    const typefind = data?.filter((item) => item?.category?.type === type);

    return NextResponse.json({
      status: 200,
      message: "success",
      data: typefind,
    });
  }
}
