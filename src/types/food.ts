export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};
