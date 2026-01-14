import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import FavoritesToggle from "./FavoritesToggle";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group relative rounded-2xl border bg-white text-white dark:bg-gray-900 overflow-hidden transition hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <FavoritesToggle productId={product.id} />

        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-6 transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium leading-snug line-clamp-2">
          {product.title}
        </h3>

        <p className="mt-1 text-xs text-gray-500 capitalize">
          {product.category}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold">
            ₹{product.price}
          </span>

          <span className="text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
