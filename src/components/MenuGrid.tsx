import { FoodItem } from "@/types/food";
import FoodCard from "@/components/FoodCard";

interface MenuGridProps {
  items: FoodItem[];
  searchQuery: string;
  selectedCategory: string;
}

const MenuGrid = ({ items, searchQuery, selectedCategory }: MenuGridProps) => {
  if (items.length === 0) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No items found
            </h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : "No items in this category"}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-foreground">
            {selectedCategory === "all" ? "All Items" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
            <span className="text-muted-foreground font-normal text-base ml-2">
              ({items.length} items)
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <FoodCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
