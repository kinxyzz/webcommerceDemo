import Image from "next/image";
import Content from "./Content";

export default function Hero() {
  return (
    <div className="relative container px-4  mx-auto w-full h-[calc(100vh-10rem)] overflow-hidden bg-black/80">
      <Image
        src="/watik.jpg"
        width={400}
        height={400}
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]  h-full w-screen text-center text-white  flex justify-center ">
        <div className="container px-6  w-full flex items-center">
          <Content />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-slate-100  z-[2]"></div>
    </div>
  );
}
