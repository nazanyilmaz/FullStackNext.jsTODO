"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Delius } from "next/font/google";

const delius = Delius({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const path = usePathname();

  return (
    <div className="bg-zinc-900 border fixed top-0 left-0 w-full border-black border-b-amber-400 h-[100px] flex justify-between items-center px-10 ">
      <Link
        href="/"
        className=" text-3xl md:text-5xl font-extrabold"
        style={delius.style}
      >
        ToDo<span className="text-amber-500">APP</span>
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          href="/todo/todos"
          style={delius.style}
          className={
            path == "/todo/todos"
              ? "text-amber-400 bg-zinc-700 rounded-full px-3 py-1 border border-amber-400 md:font-bold "
              : null
          }
        >
          Tum Gorevler
        </Link>
        <Link
          href="/todo/new"
          style={delius.style}
          className={
            path == "/todo/new"
              ? "text-amber-400 bg-zinc-700 rounded-full px-3 py-1 border border-amber-400  md:font-bold"
              : null
          }
        >
          Yeni Gorev
        </Link>
      </div>
    </div>
  );
};

export default Header;
