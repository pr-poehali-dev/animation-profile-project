import { useState, useMemo } from "react";
import { CartoonProps } from "@/components/CartoonCard";
import { SortOption } from "@/components/cartoons/SortSelector";

export const useCartoonFilters = (allCartoons: CartoonProps[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [yearRange, setYearRange] = useState<[number, number]>([1990, 2024]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // Получение уникальных категорий для фильтра
  const categories = useMemo(() => {
    return Array.from(new Set(allCartoons.map(cartoon => cartoon.category)));
  }, [allCartoons]);

  // Фильтрация мультфильмов
  const filteredCartoons = useMemo(() => {
    // Сначала фильтруем
    const filtered = allCartoons.filter(cartoon => {
      const matchesSearch = cartoon.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "" || cartoon.category === category;
      const matchesRating = cartoon.rating >= minRating;
      const matchesYear = cartoon.year >= yearRange[0] && cartoon.year <= yearRange[1];
      return matchesSearch && matchesCategory && matchesRating && matchesYear;
    });

    // Затем сортируем
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return b.year - a.year;
        case "oldest":
          return a.year - b.year;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [allCartoons, searchTerm, category, minRating, yearRange, sortOption]);

  // Сброс всех фильтров
  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setMinRating(0);
    setYearRange([1990, 2024]);
    setSortOption("newest");
  };

  return {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    minRating,
    setMinRating,
    yearRange,
    setYearRange,
    sortOption,
    setSortOption,
    filteredCartoons,
    categories,
    resetFilters
  };
};
