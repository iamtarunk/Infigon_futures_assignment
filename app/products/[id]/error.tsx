"use client";

export default function ProductDetailsError({
  error,
}: {
  error: Error;
}) {
  return (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold text-red-600">
        Failed to load product
      </h2>
      <p className="mt-2 text-gray-500">{error.message}</p>
    </div>
  );
}
