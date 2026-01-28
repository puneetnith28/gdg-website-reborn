function ProjectTeamSectionSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="h-10 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg mx-auto mb-10 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#3C3D37] rounded-lg p-8 flex flex-col items-center animate-pulse"
          >
            {/* Profile Image Skeleton */}
            <div className="w-32 h-32 rounded-full bg-neutral-200 dark:bg-neutral-700 border-4 border-purple-200 dark:border-purple-500 mb-6" />

            {/* Name Skeleton */}
            <div className="h-6 w-32 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-2" />

            {/* Role Skeleton */}
            <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-md mb-6" />

            {/* Social Links Skeleton */}
            <div className="flex gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTeamSectionSkeleton;
