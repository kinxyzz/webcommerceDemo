"use client";

import { PAGE_SIZE } from "@/app/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Button from "../ui/Button";

export default function Pagination({ count }: { count?: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  let preCount = count || 0;

  const pageCount = Math.ceil(preCount / PAGE_SIZE);

  function nextPage() {
    const params = new URLSearchParams(searchParams);
    const next: number =
      currentPage === pageCount ? currentPage : currentPage + 1;

    if (next) {
      params.set("page", next.toString());
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function prevPage() {
    const params = new URLSearchParams(searchParams);
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    if (prev) {
      params.set("page", prev.toString());
    } else {
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between w-full  mt-5 ">
      <p className="text-sm md:text-base">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>

      <div className="flex gap-2">
        <Button onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft /> <span>Prev</span>
        </Button>

        <Button onClick={nextPage} disabled={currentPage === pageCount}>
          <span>Next</span>
          <HiChevronRight />
        </Button>
      </div>
    </div>
  );
}
