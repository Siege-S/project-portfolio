import { FaArrowUpRightFromSquare, IoIosCopy } from "./ReactIcons";

export function ButtonPrimary({ children, onClick, className }) {
  return (
    <button
      className={`flex h-fit items-center text-sm text-white font-medium py-2 px-2 rounded-lg cursor-pointer bg-green-500 border border-black shadow-md shadow-green-400/50 active:scale-95 active:bg-green-500/90 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonCard({ children, onClick }) {
  return (
    <button
      className="flex justify-center items-center w-full gap-2 rounded-sm cursor-pointer hover:bg-lightGrey/5 hover:text-neon active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonContactArrow({ children, className, onClick }) {
  return (
    <button
      className={`flex justify-center items-center w-full gap-2 rounded-lg py-2 cursor-pointer active:scale-95 text-sm text-white max-w-120 ${className}`}
      onClick={onClick}
    >
      {children}
      <FaArrowUpRightFromSquare />
    </button>
  );
}

export function ButtonContactCopy({ children, className, onClick }) {
  return (
    <button
      className={`flex justify-center items-center w-full gap-2 rounded-lg py-2 cursor-pointer active:scale-95 text-sm text-white max-w-120 ${className}`}
      onClick={onClick}
    >
      {children}
      <IoIosCopy />
    </button>
  );
}
