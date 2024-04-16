import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest: NextRequest) {
  const requestUrl = new URL(NextRequest.url);
  const formData = await NextRequest.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const phoneNumber = formData.get("phoneNumber");
  const question = formData.get("question");
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from("question")
    .insert([
      {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        question: question,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "success",
    data: "terimakasih sudah bertanya ataupun memberi masukan",
  });
}
