import { Button } from "@/components/ui/button";
import { categories } from "@/data/foodData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Categories</h3>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "categoryActive" : "category"}
                size="lg"
                onClick={() => onSelectCategory(category.id)}
                className="flex items-center gap-2 px-5 shrink-0"
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategoryFilter;
