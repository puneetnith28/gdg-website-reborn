function ProjectInfoCardSkeleton() {
  return (
    <div className="w-full flex flex-col h-full rounded-lg">
      <div className="min-h-48 bg-neutral-200 dark:bg-neutral-700 rounded-t-lg animate-pulse" />
      <div className="p-2 pb-3 flex flex-col h-full bg-neutral-50 dark:bg-neutral-800 border dark:border-neutral-600 rounded-b-lg space-y-2">
        <div className="flex flex-col h-full flex-1 space-y-2">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-md w-3/4 animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md w-full animate-pulse" />
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded-md w-5/6 animate-pulse" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-16 animate-pulse" />
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-16 animate-pulse" />
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-16 animate-pulse" />
        </div>
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-20 animate-pulse" />
          <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded-md w-16 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default ProjectInfoCardSkeleton;
