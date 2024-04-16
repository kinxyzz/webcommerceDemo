"use client";

import { TbListDetails } from "react-icons/tb";
import Card from "./ui/Card";

export default function CustomBatik() {
  return (
    <div className="flex px-4 items-center justify-center my-4">
      <div className="container px-0">
        <Card
          icon={<TbListDetails />}
          onClick={() => alert("demo doang")}
          action="More Details"
        >
          <Card.title>Custom Your Own Batik</Card.title>
          <Card.desc className="w-2/3">
            setiap orang memiliki gaya dan kebutuhan yang berbeda. Maka kami
            menyediakan layanan pembuatan batik tulis personalisasi dengan
            desain yang sesuai keinginan Anda
          </Card.desc>
        </Card>
      </div>
    </div>
  );
}
