import Filter from "@/app/components/product/Filter";
import ProductFilter from "@/app/components/product/ProductFilter";
import Search from "@/app/components/product/Search";
import { Metadata } from "next";
import React from "react";
import { FaFilter } from "react-icons/fa";

// const filterLink: linkNavbar[] = [
//   {
//     link: "/product/sutra",
//     label: "Sutra Atbm Baron",
//   },
//   {
//     link: "/product/katun",
//     label: "Katun",
//   },
//   {
//     link: "/product/satin",
//     label: "Satin",
//   },
// ];

// const filterColor: linkNavbar[] = [
//   {
//     link: "/product/black",
//     label: "Black",
//   },
//   {
//     link: "/product/white",
//     label: "White",
//   },
//   {
//     link: "/product/red",
//     label: "Red",
//   },
//   {
//     link: "/product/blue",
//     label: "Blue",
//   },
//   {
//     link: "/product/green",
//     label: "Green",
//   },
//   {
//     link: "/product/yellow",
//     label: "Yellow",
//   },
// ];

export const metadata: Metadata = {};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center py-2 h-screen ">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
          <div className="hidden lg:flex flex-col py-10 mt-48 h-screen pr-10 ">
            <div className="my-4 w-full mx-4">
              <div className="text-2xl font-bold flex gap-4 items-center">
                <FaFilter />
                <h3>Filter Kain</h3>
              </div>
              <div className="flex text-yellow-600 mt-4 text-base gap-4 flex-col justify-center">
                <Filter
                  filterField="category"
                  options={[
                    { value: "katun", label: "Katun" },
                    { value: "satin", label: "Satin" },
                    { value: "sutra", label: "Sutra" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-60 relative">
            <ProductFilter />
          </div>
          <div className="h-screen w-full lg:mt-48 ">
            <Search />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
