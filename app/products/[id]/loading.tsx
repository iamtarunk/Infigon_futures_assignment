export default function ProductDetailsLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80 bg-gray-200 rounded-xl" />
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-24 bg-gray-200 rounded" />
          <div className="h-8 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}
