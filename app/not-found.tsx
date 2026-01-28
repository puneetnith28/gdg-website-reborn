"use client";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";
import TextHighlighter from "./components/text-highlighter";
import { Button } from "./components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-[90vh] justify-center items-center">
        <div className="flex flex-col justify-center items-center flex-1 px-20 sm:px-24 md:px-48 lg:px-12">
          <div className="flex flex-col gap-4 items-center">
            <span
              style={{ lineHeight: "1.5" }}
              className={`font-Exo text-center font-medium text-2xl sm:text-3xl md:text-4xl dark:text-neutral-300 text-neutral-700`}
            >
              Oops!
              <TextHighlighter
                text="Page Not Found"
                className="text-neutral-700 dark:text-neutral-800 bg-yellow-200 dark:bg-yellow-300"
              />
            </span>
            <span className="font-Exo font-normal text-center text-md dark:text-neutral-300 text-neutral-600">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </span>
            <Button
              onClick={() => router.back()}
              className="font-light px-5 py-3 rounded-full"
            >
              Go back
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
