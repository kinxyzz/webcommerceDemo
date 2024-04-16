"use client";

import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import Button from "../ui/Button";
import Filter from "./Filter";

export default function FilterProduct() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <Button
        onClick={() => setShowFilter((showFilter) => !showFilter)}
        className="lg:hidden"
      >
        <IoFilterSharp />
        Filter Batik
      </Button>
      {showFilter && (
        <div className="absolute shadow-sm left-0 mt-2 w-36 bg-white">
          <div className="w-full p-2 gap-2 flex justify-center items-center flex-col text-center">
            <Filter
              className="w-full"
              filterField="category"
              options={[
                { value: "katun", label: "Katun" },
                { value: "satin", label: "Satin" },
                { value: "sutra", label: "Sutra" },
              ]}
            />
          </div>
        </div>
      )}
    </>
  );
}
