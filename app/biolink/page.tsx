"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLocationArrow,
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";

export default function page() {
  return (
    <div className="bg-gradient-to-tr from-blue-900 to-blue-500 h-screen  w-full font-light">
      <div className="flex justify-center items-center flex-col gap-2 py-16">
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-4 px-10 ">
        <motion.div
          className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="">
            <div className="flex border-2 border-yellow-600 w-full text-center items-center rounded-md px-4 py-2">
              <FaWhatsapp className="text-yellow-200 text-xl" />
              <p className="flex-grow text-yellow-200 ">Whatsapp</p>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
            href=""
          >
            <div className="flex border-2 border-yellow-600 w-full text-center items-center rounded-md px-4 py-2">
              <FaInstagram className="text-yellow-200 text-xl" />
              <p className="flex-grow text-yellow-200 ">Instagram</p>
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="mt-20 mx-10 py-2 border-b-[1px] border-white"></div>
      <div className="mt-4 mx-10 py-2 text-yellow-400">
        <h3 className="mb-4">About Us</h3>
        <div className="flex flex-col gap-4">
          <motion.div
            className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
              href="/contact"
            >
              <div className="flex border-2 border-yellow-600 w-full text-center items-center rounded-md px-4 py-2">
                <MdRoundaboutRight className="text-yellow-200 text-xl" />
                <p className="flex-grow text-yellow-200 ">About Us</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
              href="/product"
            >
              <div className="flex border-2 border-yellow-600 w-full text-center items-center rounded-md px-4 py-2">
                <FaShoppingBag className="text-yellow-200 text-xl" />
                <p className="flex-grow text-yellow-200 text-sm ">
                  Catalog Product
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className="w-full hover:bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md"
              href=""
            >
              <div className="flex border-2 border-yellow-600 w-full text-center items-center rounded-md px-4 py-2">
                <FaLocationArrow className="text-yellow-200 text-xl" />
                <p className="flex-grow text-yellow-200 text-sm ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum possimus nihil molestias, voluptatibus ipsa hic
                  expedita nostrum iure impedit repellat tempora laudantium
                  rerum molestiae nam. Earum neque fugiat quo sint!
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <footer className="mt-16 w-full flex items-center justify-center text-yellow-500 font-normal">
        <p>© 2018 Gahara Batik, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
