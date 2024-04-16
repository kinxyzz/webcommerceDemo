"use client";

import { motion } from "framer-motion";

export default function Button({
  type,
  className,
  children,
  onClick,
  disabled,
  active,
}: {
  className?: string;
  type?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;

  onClick?: () => void;
}) {
  if (disabled) {
    return (
      <motion.button
        type="button"
        className={`${className} w-15 flex drop-shadow-md flex-nowrap gap-2 text-center justify-center items-center px-4 py-2 cursor-not-allowed bg-slate-100 rounded-md text-slate-200`}
      >
        {children}
      </motion.button>
    );
  }

  if (active) {
    return (
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${className} w-15  flex flex-nowrap gap-2 text-center justify-center items-center px-4 py-2 bg-slate-50 rounded-md text-slate-900`}
      >
        {children}
      </motion.button>
    );
  }

  if (type === "outline")
    return (
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${className} flex gap-2 flex-nowrap items-center justify-center text-center px-4 py-2 border-[1px] border-yellow-500 rounded-md text-white hover:bg-gradient-to-r from-yellow-500 to-yellow-700`}
      >
        {children}
      </motion.button>
    );

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${className} w-15 drop-shadow-md flex flex-nowrap gap-2 text-center justify-center items-center px-4 py-2  bg-black rounded-md text-slate-50`}
    >
      {children}
    </motion.button>
  );
}
