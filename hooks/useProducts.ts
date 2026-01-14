"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchProducts } from "@/lib/api";
import { Product } from "@/types/product";
import { useFavorites } from "@/context/FavoritesContext";

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showFavorites, setShowFavorites] = useState(false);
    const { favorites } = useFavorites();
    const [sort, setSort] = useState<"none" | "asc" | "desc">("none");
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    useEffect(() => {
        async function loadProducts() {
            try {
                setLoading(true);
                const data = await fetchProducts();
                setProducts(data);
            } catch (err) {
                setError("Something went wrong while loading products");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    const categories = useMemo(() => {
        const unique = new Set(products.map(p => p.category));
        return ["all", ...Array.from(unique)];
    }, [products]);

    const filteredProducts = useMemo(() => {
        let result = products.filter((product) => {
            const matchesSearch = product.title
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesCategory =
                category === "all" || product.category === category;

            const matchesFavorites =
                !showFavorites || favorites.includes(product.id);

            return matchesSearch && matchesCategory && matchesFavorites;
        });

        if (sort === "asc") {
            result = [...result].sort((a, b) => a.price - b.price);
        }

        if (sort === "desc") {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, search, category, showFavorites, favorites, sort]);

    return {
        products: filteredProducts,
        loading,
        error,
        search,
        setSearch,
        category,
        setCategory,
        categories,
        showFavorites,
        setShowFavorites,
        sort,
        setSort,
    };
}
