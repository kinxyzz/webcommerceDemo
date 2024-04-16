"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getData } from "../services/getProduct";
import { PAGE_SIZE } from "../utils/constant";

export function useProduct() {
  const searchParams = useSearchParams();

  const queryClient = useQueryClient();

  const search = searchParams.get("search");

  const filterTypeValue = searchParams.get("category");
  const filterType =
    !filterTypeValue || filterTypeValue === "all"
      ? null
      : { field: "category", value: filterTypeValue };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["product", page, filterType, search],
    queryFn: () => getData({ page, filter: filterType, search }),
  });

  const pageCount = Math.ceil(product?.count || 1 / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["product", page + 1],
      queryFn: () => getData({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["product", page - 1],
      queryFn: () => getData({ page: page - 1 }),
    });

  // if (error) {
  //   throw new Error(error.message);
  // }

  return { product, isLoading };
}
