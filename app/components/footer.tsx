import Image from "next/image";
import Link from "next/link";

const lists = {
  "ABOUT US": [
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Our Team",
      link: "/Team",
    },
    {
      title: "Events",
      link: "/events",
    },
  ],
  "GET INVOLVED": [
    {
      title: "Join Us",
      link: "/sign-up",
    },
    {
      title: "Our Projects",
      link: "/projects",
    },
  ],
};

export default function Footer() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-4/5 z-20 h-64 flex flex-col sm:flex-row sm:items-center rounded-xl overflow-hidden px-6 py-4 relative bg-violet-300 mx-auto translate-y-16 footer-head">
        <Image
          src="/assets/stars_two.png"
          alt="stars"
          width={1200}
          height={900}
          className="-z-10 min-w-[1024px] w-full min-h-[1000px] mx-auto absolute animate-stars top-0 left-0"
        />
        <div className="flex flex-col gap-2">
          <span className="text-neutral-200 lg:text-4xl text-xl sm:text-3xl">
            Get Started Already?
          </span>
          <span className="text-slate-300 lg:text-4xl text-lg sm:text-2xl">
            Join Our Community today!!
          </span>
        </div>
        <Link
          href="/sign-up"
          className="flex-1 flex justify-end items-center h-full w-full"
        >
          <button className="w-28 h-11 bg-violet-300 mt-auto sm:mt-0 sm:ml-auto rounded-md text-neutral-900 font-medium text-md tracking-wider hover:bg-violet-400 transition-colors active:bg-violet-200">
            Join
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 bg-slate-900 dark:bg-neutral-950 py-32 px-8 footer-content z-10">
        <div className="flex flex-col flex-1 gap-4">
          <Image
            src="/knight.png"
            alt="icon"
            width={1200}
            height={900}
            className="w-12 h-12"
          />
          <span className="text-neutral-200 text-xl font-semibold">
            Google Developer Student Club
          </span>
          <span className="text-neutral-200 text-sm font-medium">
            A Google Developers program for university students to learn mobile
            and web development skills, design thinking skills and leadership
            skills.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row my-8 md:my-0 gap-4 flex-1 sm:items-center md:items-start md:ml-12 lg:ml-0">
          {Object.entries(lists).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col gap-4 flex-1 md:items-center"
            >
              <div className="flex flex-col gap-2">
                <span className="text-neutral-400 text-xs tracking-widest font-medium">
                  {key}
                </span>
                <ul className="flex flex-col gap-2 mt-8">
                  {value.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        className="text-neutral-200 text-sm font-medium hover:text-neutral-100 transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/*
        <div className="flex flex-col gap-4 flex-1">
          <span className="text-neutral-400 text-xs tracking-widest font-medium">
            NOT SURE WHERE TO START?
          </span>
          <div className="flex flex-col gap-1 mt-6">
            <span className="text-neutral-200 text-sm font-medium">
              Join us on Discord
            </span>
            <span className="text-neutral-200 text-sm font-medium">
              Enter your discord ID here to join our server
            </span>
            <div className="flex flex-row gap-4 mt-8">
              <input
                type="text"
                className="w-64 h-10 rounded-md px-2 py-1 outline outline-1 text-sm neutral-neutral-300 bg-slate-800 placeholder:tex-neutral-400 text-white"
                placeholder="Discord ID"
              />
              <button className="w-24 h-10 bg-violet-300 rounded-md text-neutral-900 font-medium text-sm hover:bg-violet-400 transition-colors focus:bg-violet-200">
                Join
              </button>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
}
