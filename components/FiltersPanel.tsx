import { FiHeart, FiList, FiChevronDown } from "react-icons/fi";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

interface FiltersPanelProps {
    search: string;
    setSearch: (v: string) => void;
    category: string;
    setCategory: (v: string) => void;
    categories: string[];
    sort: string;
    setSort: (v: string) => void;
    showFavorites: boolean;
    setShowFavorites: (v: boolean) => void;
}

export default function FiltersPanel({
    search,
    setSearch,
    category,
    setCategory,
    categories,
    sort,
    setSort,
    showFavorites,
    setShowFavorites,
}: FiltersPanelProps) {
    return (
        <div className="
            relative rounded-2xl 
            bg-white/80 dark:bg-gray-800
            shadow-[0_8px_30px_rgba(0,0,0,0.06)]
            p-4 md:p-6
        ">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                {/* Category */}
                <div className="md:col-span-12">
                    <CategoryFilter
                        categories={categories}
                        selected={category}
                        onChange={setCategory}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center md:col-span-12">
                    {/* Search – Primary */}
                    <div className="md:col-span-5">
                        <SearchBar value={search} onChange={setSearch} />
                    </div>


                    {/* Sort */}
                    <div className="md:col-span-2 relative">
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="
                            w-full h-11
                            appearance-none
                            rounded-xl
                            border border-gray-300 dark:border-gray-700
                            bg-white dark:bg-gray-900
                            text-gray-900 dark:text-gray-100
                            px-4 pr-10
                            text-sm cursor-pointer
                            focus:outline-none focus:ring-2 focus:ring-indigo-500/30
                            "
                        >
                            <option value="none">Sort by price</option>
                            <option value="asc">Low → High</option>
                            <option value="desc">High → Low</option>
                        </select>

                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Favorites Toggle */}
                    <div className="md:col-span-2">
                        <button
                            onClick={() => setShowFavorites(!showFavorites)}
                            className={`
                                    w-full h-11
                                    rounded-xl
                                    flex items-center justify-center gap-2
                                    text-sm font-medium
                                    transition-all
                                    cursor-pointer
                                    ${showFavorites
                                    ? "bg-indigo-600 text-white shadow-md"
                                    : "border border-gray-300 text-white hover:text-white hover:border-gray-800 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                }
                    `}
                        >
                            {showFavorites ? <FiList /> : <FiHeart />}
                            {showFavorites ? "All Products" : "Favorites"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
