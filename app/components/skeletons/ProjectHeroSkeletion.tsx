function ProjectHeroSkeleton() {
  const StatCardSkeleton = () => (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg animate-pulse">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
        <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
      </div>
      <div className="h-8 w-20 bg-neutral-200 dark:bg-neutral-700 rounded-md mt-2" />
    </div>
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900 dark:bg-gray-800">
      {/* Background Skeleton */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content Skeleton */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="w-full lg:w-2/3 space-y-12">
          {/* Header Skeleton */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-6 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
              <div className="h-6 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
            </div>

            <div className="space-y-4">
              <div className="h-12 sm:h-14 lg:h-16 bg-neutral-200 dark:bg-neutral-700 rounded-lg w-3/4 animate-pulse" />
              <div className="space-y-2">
                <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-full animate-pulse" />
                <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-5/6 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Info Card Skeleton */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Date Range */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
                <div className="h-4 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              </div>

              {/* Category */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
                <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
              </div>

              {/* Contributors */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
                  <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
                </div>
                <div className="ml-8 space-y-3">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full animate-pulse" />
                      <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-md animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section Skeleton */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <StatCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeroSkeleton;
