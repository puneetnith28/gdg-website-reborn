"use client";
import { useEffect, useCallback, useRef } from "react";
import { Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  technologies: string[];
}

export function ProjectSidebar({ isOpen, onClose, technologies }: ProjectSidebarProps) {
  const sidebarRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(target)
      ) {
        onClose();
      }
    },
    [isOpen, onClose],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside, onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    onClose();
  };

  if (!isOpen) return null;

  const fieldClasses =
    "border bg-neutral-50/10 dark:border-neutral-600 p-1 py-2 rounded-md dark:bg-neutral-700 dark:text-neutral-50 focus:outline-none focus:outline-4";

  // todo: fetch these things from backend
  // const categories = ["ALL", "WEB", "AI/ML", "HARDWARE"];
  // const years = ["ALL", "2024", "2023", "2022"];

  return (
    <div className="hidden font-Exo sm:flex fixed inset-0 bg-black/40 z-[1000]">
      <div className="right-0 top-0 bottom-0 fixed z-10 flex ">
        <form
          className="border-l border-l-bg-neutral-500 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-[260px] grow p-4 flex flex-col dark:text-white"
          ref={sidebarRef}
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-2">
            <Filter size={14} />
            <h3>FILTER</h3>
          </div>
          <div className="border dark:border-neutral-600 rounded-full mt-1" />
          {technologies.length > 0 ? (
            <div className="space-y-3 mt-5">
              <div className="grid gap-1">
                <label
                  htmlFor="category"
                  className="text-neutral-700 text-sm font-Exo dark:text-white"
                >
                  Category
                </label>
                <select id="category" name="category" className={fieldClasses}>
                  {technologies?.map((category) => {
                    return (
                      <option value={category} key={category}>
                        {category}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-full pt-4">
                <button className="w-full text-white rounded-md transition-all hover:opacity-90 duration-150 ease-out bg-gradient-to-b from-orange-400  to-orange-600  px-4 p-2">
                  Apply
                </button>
              </div>
            </div>
          ) : (
            <div className="h-44 dark:text-white text-neutral-800 w-full flex justify-center items-center">
              No Filter found
            </div>
          )}
        </form>
      </div>
    </div>
  );
}