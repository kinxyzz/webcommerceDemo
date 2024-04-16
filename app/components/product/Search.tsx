"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Button from "../ui/Button";

export default function Search({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState<string | null>(null);

  function handleSubmit(e?: any) {
    e?.preventDefault();

    const params = new URLSearchParams(searchParams);
    const type = searchParams.get("category");
    const page = searchParams.get("page");
    if (!search) {
      params.delete("search");
      return replace(`${pathname}?${params.toString()}`);
    } else {
      params.set("search", search?.toString());
    }
    if (type || page) {
      params.delete("category");
      params.delete("page");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={`${className} flex gap-2 mt-2 `}>
      <input
        className="p-2 border-[1px] w-4/6 border-slate-900 rounded-md"
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        onChange={({ target }) => setSearch(target.value)}
        value={search === null ? "" : search}
      />
      <Button onClick={() => handleSubmit()} type="submit">
        Search
      </Button>
    </div>
  );
}
