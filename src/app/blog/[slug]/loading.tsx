export default function BlogPostLoading() {
  return (
    <div className="bg-secondary text-primary">
      {/* Title Section Skeleton */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title skeleton */}
          <div className="mb-6 h-16 w-full animate-pulse rounded bg-primary/20 md:h-24" />
          
          {/* Description skeleton */}
          <div className="mx-auto max-w-2xl space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-primary/10" />
            <div className="h-4 w-4/6 animate-pulse rounded bg-primary/10" />
          </div>
          
          {/* Date skeleton */}
          <div className="mt-6 h-4 w-32 animate-pulse rounded bg-primary/10" />
        </div>
      </section>

      {/* Hero Image Skeleton */}
      <section className="px-4 pb-20 md:px-8 md:pb-40">
        <div className="relative mx-auto h-[400px] w-full max-w-6xl animate-pulse rounded-sm bg-primary/20 md:h-[600px]" />
      </section>

      {/* Content Skeleton */}
      <section className="px-4 pb-20 md:px-8 md:pb-40">
        <div className="mx-auto max-w-4xl space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
              <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-primary/10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

