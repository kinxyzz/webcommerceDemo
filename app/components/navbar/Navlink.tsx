"use client";
import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { linkNavbar } from "../../utils/interface";

export default function Navlink({
  setIsOpen,
  isOpen,
  linkNav,
}: {
  isOpen: boolean;
  linkNav: linkNavbar[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex ${
          isOpen ? "top-14" : "-top-full"
        } lg:hidden text-2xl h-screen fixed duration-300  py-4 left-0 right-0 bg-slate-100 flex-col gap-4 z-[11]  w-screen justify-center items-center`}
      >
        <Image
          className="block"
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <ul>
          {linkNav.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 ${
                  pathname === link.link
                    ? "border-b-[1px] border-b-yellow-500"
                    : ""
                } hover:text-yellow-500  block w-full text-center font-semibold `}
                href={link.link}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
