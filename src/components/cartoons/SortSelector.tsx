import { SlidersHorizontalIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type SortOption = "newest" | "oldest" | "rating" | "name";

interface SortSelectorProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const SortSelector = ({ sortOption, onSortChange }: SortSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      <SlidersHorizontalIcon size={16} className="text-muted-foreground" />
      <Select value={sortOption} onValueChange={(value) => onSortChange(value as SortOption)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Сортировка" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Сначала новые</SelectItem>
          <SelectItem value="oldest">Сначала старые</SelectItem>
          <SelectItem value="rating">По рейтингу</SelectItem>
          <SelectItem value="name">По названию</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelector;