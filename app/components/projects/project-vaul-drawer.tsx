"use client";
import { Drawer } from "vaul";
import { SlidersHorizontalIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

interface ProjectVaulDrawerProps {
  technologies: string[];
}

export default function ProjectVaulDrawer({ technologies }: ProjectVaulDrawerProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const formData = new FormData(e.currentTarget);
    const formObj = {
      year: formData.get("year"),
      category: formData.get("category"),
      projectStatus: formData.getAll("projectStatus"),
    };
    
    if (formObj.category) {
      params.set("technology", encodeURIComponent(formObj.category as string));
    } else {
      params.delete("technology");
    }
    
    router.push(`/projects?${params.toString()}`);
  };

  // todo: fetch these things from backend
  // const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  // const years = ["ALL", "2024", "2023", "2022"];

  const fieldClasses =
    "border dark:border-neutral-600 p-1 rounded-md dark:bg-neutral-700 dark:text-neutral-50 focus:outline-none focus:outline-4";

  return (
    <Drawer.Root>
      <Drawer.Trigger className="font-Exo">
        <div className="h-9 px-4 py-2 flex items-center hover:cursor-pointer bg-neutral-800 rounded-md text-neutral-700">
          <SlidersHorizontalIcon className="h-6 text-neutral-50 w-6 py-1.5 sm:py-0.5 sm:h-4 sm:w-4 sm:mr-1" />
          <span className="hidden sm:flex text-white">Filter</span>
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[100]" />
        <Drawer.Content className="bg-white font-Exo dark:bg-neutral-800 rounded-t-xl px-5 pb-5 h-fit fixed bottom-0 left-0 right-0 outline-none z-[101]">
          <div className="p-4 w-full bg-white flex dark:bg-neutral-800 justify-center items-center">
            <div className="w-[3rem] p-[2px] bg-neutral-200 dark:bg-neutral-500 rounded-full" />
          </div>
          {technologies.length > 0 ? (
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <div className="grid">
                  <label
                    htmlFor="category"
                    className="text-neutral-700 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className={fieldClasses}
                  >
                    {technologies?.map((category) => {
                      return (
                        <option value={category} key={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <Drawer.Close className="w-full">
                  <div className="w-full">
                    <button
                      className="w-full text-white rounded-md transition-all hover:opacity-90 duration-150 ease-out bg-gradient-to-b from-orange-400  to-orange-600 px-4 p-2"
                      type="submit"
                    >
                      Apply
                    </button>
                  </div>
                </Drawer.Close>
              </div>
            </form>
          ) : (
            <div className="h-44 dark:text-white text-neutral-800 w-full flex justify-center items-center">
              No Filter found
            </div>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}