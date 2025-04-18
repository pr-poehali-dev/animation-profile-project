import Navbar from "@/components/Navbar";
import SearchBar from "@/components/cartoons/SearchBar";
import FilterSidebar from "@/components/cartoons/FilterSidebar";
import SortSelector from "@/components/cartoons/SortSelector";
import CartoonGrid from "@/components/cartoons/CartoonGrid";
import { useCartoonFilters } from "@/hooks/useCartoonFilters";
import { cartoonsData } from "@/data/cartoons";

const Cartoons = () => {
  const {
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
  } = useCartoonFilters(cartoonsData);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Каталог мультфильмов</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Боковая панель с фильтрами */}
          <div className="md:col-span-1">
            <FilterSidebar
              categories={categories}
              category={category}
              setCategory={setCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              yearRange={yearRange}
              setYearRange={setYearRange}
              resetFilters={resetFilters}
            />
          </div>
          
          {/* Основной контент с поиском и списком мультфильмов */}
          <div className="md:col-span-3">
            {/* Панель поиска */}
            <div className="mb-6">
              <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
              />
            </div>
            
            {/* Панель информации и сортировки */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Найдено: <span className="font-medium">{filteredCartoons.length}</span>
              </p>
              <SortSelector 
                sortOption={sortOption} 
                onSortChange={setSortOption} 
              />
            </div>
            
            {/* Сетка с мультфильмами */}
            <CartoonGrid 
              cartoons={filteredCartoons} 
              resetFilters={resetFilters} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cartoons;