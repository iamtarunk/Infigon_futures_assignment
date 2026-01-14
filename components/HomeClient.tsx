"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FiltersPanel from "@/components/FiltersPanel";
import ProductGrid from "@/components/ProductGrid";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { useProducts } from "@/hooks/useProducts";

export default function HomeClient() {
  const {
    products,
    loading,
    error,
    search,
    setSearch,
    category,
    setCategory,
    categories,
    sort,
    setSort,
    showFavorites,
    setShowFavorites,
  } = useProducts();

  return (
    <>
      <Container>
        <Section>
          <FiltersPanel
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            categories={categories}
            sort={sort}
            setSort={setSort}
            showFavorites={showFavorites}
            setShowFavorites={setShowFavorites}
          />
        </Section>

        <Section>
          {loading && <LoadingSkeleton />}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && <ProductGrid products={products} />}
        </Section>
      </Container>
    </>
  );
}
