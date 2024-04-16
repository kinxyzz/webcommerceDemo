"use client";
import { fadeIn } from "@/app/utils/variants";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PiShirtFoldedLight } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import Typewriter from "typewriter-effect";
import Button from "../ui/Button";

export default function Content() {
  const router = useRouter();

  const handleProduct = () => {
    alert("Just Demo");
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className="flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-2 text-left ">
        <h2 className="text-3xl  font-bold  text-left">Your Title</h2>
        <div className="-mt-2 text-md text-yellow-500">
          <Typewriter
            options={{
              strings: ["Lorem ipsum dolor atmeet sit", "lorem lorem saja lah"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="mt-3 w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quae dolore esse fugiat cupiditate! Eius nulla repudiandae voluptate
          inventore nihil quas facilis corporis commodi voluptas animi, dolore
          id fuga quod.
          <br />
          Dapatkan Berbagai macam info terbaru di instagram kami
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button onClick={handleProduct} type="outline">
          <PiShirtFoldedLight />
          <p className="text-white">Product</p>
        </Button>
        <a
          className="flex items-center gap-2 border-[1px] p-2 border-white rounded"
          href="#"
        >
          <SlSocialInstagram /> <p>Instagram</p>
        </a>
      </div>
    </motion.div>
  );
}
