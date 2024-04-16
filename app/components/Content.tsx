"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MdOutlineReadMore } from "react-icons/md";
import { fadeIn } from "../utils/variants";
import Card from "./ui/Card";

export default function Content() {
  const router = useRouter();

  return (
    <section className="flex px-4  justify-center ">
      <div className="container px-0  mt-4">
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="flex gap-4 flex-col md:flex-row"
        >
          <Card
            onClick={() => {
              router.push("/product?category=sutra");
            }}
            icon={<MdOutlineReadMore />}
            action="Show More"
          >
            <Card.title>Kain Batik Sutra</Card.title>
            <Card.desc className="w-2/3">
              Kami menyediakan batik tulis berbahan sutra yang bagus dan elegant
              yang sangat cocok digunakan untuk berbagai acara penting.
            </Card.desc>
          </Card>
          <Card
            onClick={() => {
              router.push("/product?category=katun");
            }}
            icon={<MdOutlineReadMore />}
            action="Show More"
          >
            <Card.title>Kain Batik Katun</Card.title>
            <Card.desc className="w-2/3">
              Kami menyediakan batik tulis berbahan Katun yang bagus dan elegant
              yang sangat cocok digunakan untuk berbagai acara penting.
            </Card.desc>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
