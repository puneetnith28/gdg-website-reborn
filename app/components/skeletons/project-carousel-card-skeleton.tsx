export default function ProjectCarouselCardSkeleton() {
  return (
    <div className="flex-none w-[calc(33.33%-16px)] bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-lg animate-pulse">
      <div className="w-full h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg" />
      <div className="h-6 w-24 bg-neutral-200 dark:bg-neutral-700 rounded-full mt-3 mb-2" />
      <div className="h-6 w-48 bg-neutral-200 dark:bg-neutral-700 rounded-md" />
    </div>
  );
}
