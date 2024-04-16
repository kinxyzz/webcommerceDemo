import Image from "next/image";
import Button from "./Button";

export default function Card({
  action,
  icon,
  children,
  onClick,
  link,
}: {
  action?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
}) {
  return (
    <div className="relative h-72 overflow-hidden flex w-full bg-black/80 text-white rounded-md">
      <Image
        width={100}
        height={100}
        src="/custom.jpg"
        className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
        alt=""
      />
      <div className="absolute   top-8 left-0  z-[10] flex gap-4 flex-col justify-between px-8">
        {children}
      </div>
      <div className="absolute px-4 bottom-4 left-4 ">
        <Button onClick={onClick} type="outline">
          {icon} {action}
        </Button>
      </div>
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}

function Description({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`${className} w-full md:w-2/3`}>{children}</p>;
}

Card.title = Title;
Card.desc = Description;
