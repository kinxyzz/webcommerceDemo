import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex items-center justify-center py-2 border-slate-800 border-t-[1px]">
      <div className="container px-4 text-sm text-light">
        <div className="flex justify-between px-4">
          <p>© 2018 lorem ipsum, Inc. All rights reserved.</p>
          <div className="flex text-xl gap-2">
            <CiInstagram />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}
