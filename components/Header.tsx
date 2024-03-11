"use client";

import { ChevronLeft, ChevronRight, HomeIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle Logout
  };
  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-pink-800 p-6")}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <ChevronLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <ChevronRight className="text-white" size={35} />
          </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-3 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HomeIcon className="text-black" fill="currentColor" size={20} />
          </button>
          <button className="rounded-full p-3 bg-white flex items-center justify-center hover:opacity-75 transition">
            <SearchIcon className="text-black" size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                onClick={() => {}}
                className="bg-transparent text-neutral-300 font-medium"
              >
                Sign up
              </Button>
            </div>

            <div>
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
