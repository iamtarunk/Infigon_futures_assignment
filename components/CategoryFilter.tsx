interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${
            selected === category
              ? "bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg transform scale-105"
              : "bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow-md"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
