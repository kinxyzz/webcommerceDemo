"use client";

import { linkNavbar } from "@/app/utils/interface";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavbarContent from "./NavbarContent";
import Navlink from "./Navlink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const linkNav: linkNavbar[] = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/product",
      label: "Product",
    },
    {
      link: "/profile",
      label: "About",
    },

    {
      link: "/contact",
      label: "Contact",
    },
  ];

  return (
    <>
      {pathname !== "/biolink" && (
        <>
          <header
            className={`${
              pathname === "/biolink" ? "hidden" : ""
            } fixed bg-slate-100 w-full h-16 lg:h-fit  top-0  z-[1000] drop-shadow-md flex flex-col items-center justify-center   `}
          >
            <div className="hidden w-screen text-black bg-gray-200 lg:flex justify-center items-center">
              <div className="container flex justify-between items-center px-4">
                <div>
                  <p className="font-normal text-xs">
                    Bebas Ongkir Seluruh Indonesia
                  </p>
                </div>
                <div className="flex gap-2 text-sm">
                  <p>wa:+62555555555</p>
                  <p>ig:@nsansbbn</p>
                </div>
              </div>
            </div>
            <nav className="w-full flex justify-center items-center py-2">
              <div className="flex items-center w-full justify-between container">
                <NavbarContent
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  linkNav={linkNav}
                />
              </div>
            </nav>
          </header>
          <Navlink isOpen={isOpen} setIsOpen={setIsOpen} linkNav={linkNav} />
        </>
      )}
    </>
  );
}
