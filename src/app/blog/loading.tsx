export default function BlogLoading() {
  return (
    <div className="bg-secondary text-primary">
      <section className="border-primary mx-auto border-b py-40 text-center md:py-64">
        <div className="mx-auto max-w-4xl">
          {/* Skeleton for title */}
          <div className="mb-6 h-16 w-3/4 animate-pulse rounded bg-primary/20 md:h-24" />
          
          {/* Skeleton for description */}
          <div className="mx-auto max-w-2xl space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-primary/10" />
          </div>
        </div>
      </section>

      {/* Skeleton for blog grid */}
      <div className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                {/* Image skeleton */}
                <div className="mb-4 h-48 w-full rounded-sm bg-primary/20" />
                {/* Title skeleton */}
                <div className="mb-2 h-6 w-3/4 rounded bg-primary/20" />
                {/* Description skeleton */}
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-primary/10" />
                  <div className="h-4 w-5/6 rounded bg-primary/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

