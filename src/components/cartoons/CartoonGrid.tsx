import CartoonCard, { CartoonProps } from "@/components/CartoonCard";
import { Button } from "@/components/ui/button";

interface CartoonGridProps {
  cartoons: CartoonProps[];
  resetFilters: () => void;
}

const CartoonGrid = ({ cartoons, resetFilters }: CartoonGridProps) => {
  if (cartoons.length === 0) {
    return (
      <div className="text-center py-12 bg-card rounded-lg">
        <p className="text-xl text-muted-foreground mb-4">Мультфильмы не найдены</p>
        <Button onClick={resetFilters}>Сбросить все фильтры</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cartoons.map(cartoon => (
        <CartoonCard key={cartoon.id} {...cartoon} />
      ))}
    </div>
  );
};

export default CartoonGrid;