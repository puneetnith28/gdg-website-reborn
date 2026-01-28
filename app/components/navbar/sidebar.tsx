"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import navlinks from "./navlinks";
import NavbarButton from "./navbar-button";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  h-[100vh] m-0 bg-black bg-opacity-10 flex items-center justify-center z-[1000] p-10">
      <div
        ref={sidebarRef}
        className="bg-white absolute dark:bg-neutral-800 flex flex-col justify-between right-0 h-full border-l p-5"
      >
        <div>
          <Link
            href="/"
            className="flex flex-row items-end gap-2 cursor-pointer"
          >
            <div className="flex flex-row items-end gap-2">
              <Image
                className="w-6"
                width={400}
                height={400}
                src="/knight.png"
                alt="logo"
              />
              <span className="font-Exo font-medium text-neutral-700 dark:text-neutral-300">
                DEVELOPERS CLUB
              </span>
            </div>
          </Link>
          <div className="flex flex-col gap-4 mt-4 w-full">
            {navlinks.map((link) => (
              <NavbarButton key={link.text} text={link.text} to={link.to} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {theme === "dark" ? (
            <Button
              size="icon"
              className="border border-white flex w-full h-7 font-normal items-center rounded-full bg-transparent text-white hover:bg-transparent shadow-none"
              onClick={() => setTheme("light")}
            >
              <Sun size={18} />
              Light Mode
            </Button>
          ) : (
            <Button
              className="border flex w-full font-normal items-center h-7 border-neutral-300 text-neutral-900 shadow-none bg-transparent hover:bg-transparent rounded-full"
              onClick={() => setTheme("dark")}
            >
              <Moon size={18} />
              Dark Mode
            </Button>
          )}
          <Button
            className="border flex w-full font-normal items-center h-7  shadow-none bg-red-500 text-white hover:bg-red-500 rounded-full"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
