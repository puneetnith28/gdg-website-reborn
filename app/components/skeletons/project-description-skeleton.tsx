function ProjectDescriptionSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white dark:bg-[rgb(23,23,23)]">
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <div className="h-10 w-64 bg-neutral-200 dark:bg-neutral-700 rounded-lg mx-auto mb-4 animate-pulse" />
        <div className="h-6 w-96 max-w-full bg-neutral-200 dark:bg-neutral-700 rounded-lg mx-auto animate-pulse" />
      </div>

      {/* Highlights Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-[#3C3D37] rounded-lg animate-pulse"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-200 dark:bg-neutral-700 mb-4" />
              <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-2" />
              <div className="h-4 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* Features Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg animate-pulse"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
              <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
            </div>
            <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-700 rounded-md" />
          </div>
        ))}
      </div>

      {/* Technologies and Repository Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technologies Card */}
        <div className="p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg animate-pulse">
          <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-4" />
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((index) => (
              <div
                key={index}
                className="h-10 w-full bg-neutral-200 dark:bg-neutral-700 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Repositories Card */}
        <div className="p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg animate-pulse">
          <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-4" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="h-12 w-full bg-neutral-200 dark:bg-neutral-700 rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDescriptionSkeleton;
