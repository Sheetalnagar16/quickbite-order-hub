import { Star, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FoodItem } from "@/types/food";
import { useCart } from "@/context/CartContext";

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              🔥 Popular
            </span>
          )}
          {item.isNew && (
            <span className="bg-success text-success-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
              ✨ New
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <Button
          size="icon"
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
          onClick={handleAddToCart}
        >
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="font-semibold text-foreground text-lg leading-tight">
            {item.name}
          </h4>
          <span className="text-lg font-bold text-primary shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium text-foreground">{item.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{item.prepTime}</span>
            </div>
          </div>

          <Button
            size="sm"
            variant="secondary"
            onClick={handleAddToCart}
            className="md:hidden"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
