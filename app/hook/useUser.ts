"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/getUser";

export default function useUser() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { user };
}
