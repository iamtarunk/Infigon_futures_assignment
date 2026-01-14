"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

interface FavoritesToggleProps {
  productId: number;
}

export default function FavoritesToggle({
  productId,
}: FavoritesToggleProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const active = isFavorite(productId);

  return (
    <button
        onClick={(e) => {
            e.preventDefault();
            toggleFavorite(productId);
        }}
        aria-pressed={active}
        aria-label={active ? "Remove from favorites" : "Add to favorites"}
        className="absolute z-1 top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 ease-out group"
    >
      <Heart
        size={20}
        className={`transition-all duration-200 ${
          active
            ? "fill-red-500 text-red-500 scale-110"
            : "text-gray-400 group-hover:text-red-400"
        }`}
      />
    </button>
  );
}
