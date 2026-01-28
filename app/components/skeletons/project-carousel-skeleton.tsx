import ProjectCarouselCardSkeleton from "./project-carousel-card-skeleton";

function ProjectCarouselSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Title Skeleton */}
      <div className="h-10 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mx-auto mb-10 animate-pulse" />

      <div className="max-w-6xl w-full mx-auto p-8 bg-gray-50 dark:bg-neutral-800 rounded-2xl">
        <div className="relative overflow-hidden">
          {/* Cards Container */}
          <div className="flex gap-x-4">
            {[1, 2, 3].map((index) => (
              <ProjectCarouselCardSkeleton key={index} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full animate-pulse" />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-neutral-800 rounded-full animate-pulse" />

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-700 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCarouselSkeleton;
