import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Description {
  description: string;
}

export interface ProjectInfoCardProps {
  _id: string;
  headline: string;
  description: Description[];
  progress: number;
  category: string;
  tags: string[];
  duration: string;
  images: string[];
}

function ProjectInfoCard({
  _id,
  headline,
  description,
  progress,
  // category,
  tags,
  duration,
  images, // todo : uncomment category once that is avaliable
}: ProjectInfoCardProps) {
  return (
    <Link
      href={`/projects/${_id}`}
      className="dark:text-white rounded-lg w-full flex flex-col h-full"
    >
      <div className="min-h-48">
        <Image
          src={images[0]}
          alt="Project"
          width={1200}
          height={900}
          className="object-cover h-full w-full rounded-t-lg"
        />
      </div>
      <div className="p-2 pb-3 flex flex-col bg-neutral-50 dark:bg-neutral-800 border dark:border-neutral-600 rounded-b-lg space-y-2">
        <div className="flex flex-col h-full space-y-2">
          <h2 className="font-medium">{headline}</h2>
          <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-300">
            {description[0].description}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-grow">
          {tags.map((tag) => (
            <div
              key={tag}
              className="px-2 py-0.5 w-fit bg-neutral-200/60 dark:bg-neutral-100 dark:text-neutral-800 rounded-md text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-3 pt-2">
          <div
            className={clsx("text-xs px-2 py-0.5 rounded-md w-fit", {
              "bg-red-200/60 dark:bg-red-100 text-red-800": progress <= 25,
              "bg-orange-200/60 dark:bg-orange-100 text-orange-800":
                progress > 25 && progress <= 50,
              "bg-yellow-200/60 dark:bg-yellow-100 text-yellow-800":
                progress > 50 && progress <= 75,
              "bg-green-200/60 dark:bg-green-100 text-green-800":
                progress > 75 && progress <= 100,
            })}
          >
            {progress} % completed
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {duration}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectInfoCard;