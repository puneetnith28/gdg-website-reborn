import Image from "next/image";
import { useRouter } from "next/navigation";

interface Description {
  description: string;
}

interface ProjectData {
  _id: string;
  part: string;
  name: string;
  subtitle: string;
  version: string;
  progress: number;
  headline: string;
  description: Description[];
  images: string[];
}

interface ProjectCardProps {
  data: ProjectData;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row h-fit rounded-lg shadow-slate-300 dark:shadow-neutral-700 overflow-hidden w-full outline outline-1 outline-neutral-100 dark:outline-neutral-700">
      <div
        className="relative h-52 md:aspect-square aspect-auto"
        id="project-card-image"
      >
        <div className="-z-10 absolute h-full w-full bg-gradient-to-b from-neutral-800/80 via-neutral-600/30 to-neutral-800/40"></div>
        <Image
          src={data?.images[0]}
          alt="Project"
          width={1200}
          height={900}
          className="object-cover h-full w-full absolute -z-20"
        />
        <div className="h-full w-full flex flex-col px-3 py-4 gap-2 items-start justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-200">{data?.part}</span>
            <span className="text-md font-semibold tracking-wider text-white">
              {data?.name}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-md text-neutral-100">{data?.subtitle}</h3>
          </div>
        </div>
      </div>
      <div
        className="flex bg-white flex-col gap-2 p-4 w-full dark:bg-neutral-900"
        id="project-card-details"
      >
        <div className="flex flex-row justify-between">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {data?.version}
          </span>
          <div className="flex flex-col gap-1">
            <progress
              aria-busy="true"
              value={data?.progress}
              max="100"
              className="w-full h-1 rounded-lg"
            ></progress>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {data?.progress}%
            </span>
          </div>
        </div>
        <h2 className="text-lg font-semibold dark:text-white">
          {data?.headline}
        </h2>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {data?.description[0].description}
        </span>
        <button
          onClick={() => router.push(`/projects/${data?._id}`)}
          className="btn-primary mt-auto dark:bg-neutral-800 dark:text-white"
        >
          View Project
        </button>
      </div>
    </div>
  );
}