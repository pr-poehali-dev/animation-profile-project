import { FilterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export interface FilterSidebarProps {
  categories: string[];
  category: string;
  setCategory: (category: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  yearRange: [number, number];
  setYearRange: (range: [number, number]) => void;
  resetFilters: () => void;
}

const FilterSidebar = ({
  categories,
  category,
  setCategory,
  minRating,
  setMinRating,
  yearRange,
  setYearRange,
  resetFilters
}: FilterSidebarProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <FilterIcon size={18} />
          Фильтры
        </h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="text-sm"
        >
          Сбросить
        </Button>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Категория</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Все категории</SelectItem>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Минимальный рейтинг</label>
            <Badge variant="secondary">{minRating}</Badge>
          </div>
          <Slider
            value={[minRating]} 
            min={0} 
            max={5} 
            step={0.1} 
            onValueChange={(value) => setMinRating(value[0])}
          />
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium">Год выпуска</label>
            <Badge variant="secondary">{yearRange[0]} - {yearRange[1]}</Badge>
          </div>
          <Slider
            value={yearRange} 
            min={1980} 
            max={2024} 
            step={1}
            onValueChange={(value) => setYearRange(value as [number, number])}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;