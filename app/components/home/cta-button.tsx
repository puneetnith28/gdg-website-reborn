import Link from "next/link";

export default function CTA_Button({
  className = "",
  text,
}: {
  className?: string;
  text?: string;
}) {
  return (
    <Link href="/events">
      <button
        className={`bg-black h-12 w-48 text-white font-Tektur tracking-wide rounded-full hover:opacity-90 dark:hover:opacity-80 duration-200 transition-all ${className}`}
      >
        {text || "View All Events"}
      </button>
    </Link>
  );
}
