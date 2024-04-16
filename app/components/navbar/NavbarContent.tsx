"use client";

import { linkNavbar } from "@/app/utils/interface";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdDensitySmall } from "react-icons/md";
import { TfiClose } from "react-icons/tfi";
import Useraction from "./Useraction";

export default function NavbarContent({
  isOpen,
  setIsOpen,
  linkNav,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  linkNav: linkNavbar[];
}) {
  const pathname = usePathname();

  function handleNavMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <div className="flex w-full lg:w-1/3 ">
        <div className="w-12 h-12 rounded-full bg-yellow-900 flex items-center justify-center text-white">
          logo
        </div>
        <button
          onClick={() => {
            handleNavMenu();
          }}
        >
          {isOpen ? (
            <motion.div whileTap={{ scale: 0.9 }} animate={{ rotate: 90 }}>
              <TfiClose className="md:hidden text-3xl hover:text-yellow-400 hover:cursor-pointer" />
            </motion.div>
          ) : (
            <motion.div whileTap={{ scale: 0.9 }} animate={{ scale: 1.1 }}>
              <MdDensitySmall className="md:hidden text-3xl  hover:text-yellow-400 hover:cursor-pointer" />
            </motion.div>
          )}
        </button>
      </div>
      <div className="flex mx-auto justify-center gap-4 ">
        <ul className="md:flex gap-4 hidden">
          {linkNav.map((link, index) => (
            <li key={index}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  className={`px-4 py-2 ${
                    pathname === link.link
                      ? "border-b-[1px] border-b-#dbba6b"
                      : ""
                  }  block w-full text-center font-semibold `}
                  href={link.link}
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      <Useraction isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
