import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  link?: string;
  image?: string;
}

export default function SectionOneCard({
  className = "",
  title = "Card Title",
  description = "Lorem",
  link = "",
  image = "",
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`flex flex-row gap-2 items-start justify-center flex-1 bg-white dark:bg-neutral-900 rounded-md h-full px-10 py-12 ${className}`}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="h-8 w-8">
            <Image
              src={image || "/knight.png"}
              alt="arrow"
              width={1200}
              height={1000}
              className="dark:invert"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex flex-row gap-2 items-center">
              <span className="font-Tektur font-medium text-lg text-neutral-700 dark:text-neutral-300">
                {title}
              </span>
              <Link href={link} className="w-5 h-5">
                <Image
                  width={1200}
                  height={1000}
                  src="/assets/caretRight.svg"
                  alt="arrow"
                  className="dark:invert"
                />
              </Link>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {description}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
