"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";

interface optionsProps {
  label: string;
  value: string;
}

export default function Filter({
  filterField,
  options,
  className = "w-2/3",
}: {
  filterField: string;
  options: optionsProps[];
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentFilter = searchParams.get(filterField) || options?.at(0)?.value;

  function handleClick(value: string) {
    // const optionValues = options.map((option) => option.value);
    const params = new URLSearchParams(searchParams);

    const search = searchParams.get("search");
    if (search) {
      params.delete("search");
    }

    const isSameValue = searchParams.get(filterField) === value;

    value = isSameValue ? "all" : value;

    params.set(filterField, value);

    if (value === "all") {
      params.delete(filterField);
    }

    if (searchParams.get("page")) params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }

  const paramValue = searchParams.get(filterField);

  return (
    // <div className="flex flex-col gap-3 items-center m-auto w-5/6 border-2 border-red-200">
    <>
      {options.map((option) => (
        <Button
          className={`${
            paramValue === option.value &&
            " w-15 flex flex-nowrap gap-2 text-center justify-center items-center px-4 py-2 bg-slate-50 rounded-md text-slate-900 border-2 border-red-900"
          } ${className}  `}
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={paramValue === option.value}
        >
          {option.label}
        </Button>
      ))}
    </>
    // </div>
  );
}
