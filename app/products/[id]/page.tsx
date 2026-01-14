"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/api";
import FavoritesToggle from "@/components/FavoritesToggle";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const productId = Number(id);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(!Number.isNaN(productId));
  const [error, setError] = useState<string | null>(Number.isNaN(productId) ? "Invalid product id" : null);

  useEffect(() => {
    if (Number.isNaN(productId)) {
      return;
    }

    fetchProductById(productId)
      .then(setProduct)
      .catch(() => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return <div className="max-w-5xl mx-auto px-4 py-8">Loading...</div>;
  }

  if (error || !product) {
    return <div className="max-w-5xl mx-auto px-4 py-8">{error || "Product not found"}</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => router.push("/")}
        className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative bg-white rounded-xl p-6">
          <FavoritesToggle productId={product.id} />
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-600">
            {product.title}
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-600 capitalize">
            {product.category}
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-400">
            {product.description}
          </p>

          <p className="mt-6 text-3xl font-bold text-indigo-600">
            ₹{product.price}
          </p>
        </div>
      </div>
    </main>
  );
}
