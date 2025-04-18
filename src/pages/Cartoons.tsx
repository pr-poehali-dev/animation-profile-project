import { useState } from "react";
import Navbar from "@/components/Navbar";
import CartoonCard, { CartoonProps } from "@/components/CartoonCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, FilterIcon, SlidersHorizontalIcon } from "lucide-react";

const Cartoons = () => {
  // Данные о мультфильмах (в реальном проекте должны приходить с API)
  const allCartoons: CartoonProps[] = [
    {
      id: 1,
      title: "Холодное сердце",
      description: "Анна отправляется в путешествие, чтобы спасти королевство от вечной зимы, устроенной ее сестрой Эльзой.",
      imageUrl: "/placeholder.svg",
      rating: 4.8,
      year: 2013,
      category: "Приключения"
    },
    {
      id: 2,
      title: "История игрушек",
      description: "Игрушки оживают, когда люди не видят, и у них своя жизнь, полная приключений и опасностей.",
      imageUrl: "/placeholder.svg",
      rating: 4.9,
      year: 1995,
      category: "Семейный"
    },
    {
      id: 3,
      title: "Шрек",
      description: "Огр Шрек и его верный друг Осел отправляются спасать принцессу Фиону из заточения в башне.",
      imageUrl: "/placeholder.svg",
      rating: 4.7,
      year: 2001,
      category: "Комедия"
    },
    {
      id: 4,
      title: "Зверополис",
      description: "В городе, населенном животными, новый офицер полиции, кролик Джуди Хоппс, и хитрый лис Ник Уайлд должны работать вместе, чтобы раскрыть заговор.",
      imageUrl: "/placeholder.svg",
      rating: 4.6,
      year: 2016,
      category: "Детектив"
    },
    {
      id: 5,
      title: "Вверх",
      description: "78-летний ворчун Карл Фредриксен отправляется в приключение на своем летающем доме, к которому случайно присоединяется 8-летний скаут.",
      imageUrl: "/placeholder.svg",
      rating: 4.8,
      year: 2009,
      category: "Приключения"
    },
    {
      id: 6,
      title: "Головоломка",
      description: "Путешествие по разуму девочки вместе с пятью эмоциями, которые управляют ее действиями и формируют воспоминания.",
      imageUrl: "/placeholder.svg",
      rating: 4.7,
      year: 2015,
      category: "Семейный"
    },
    {
      id: 7,
      title: "Рататуй",
      description: "Крыса Реми мечтает стать шеф-поваром и с помощью юного помощника повара пытается воплотить свою мечту.",
      imageUrl: "/placeholder.svg",
      rating: 4.7,
      year: 2007,
      category: "Комедия"
    },
    {
      id: 8,
      title: "Корпорация монстров",
      description: "Монстры из параллельного мира пугают детей, чтобы собирать их крики для получения энергии.",
      imageUrl: "/placeholder.svg",
      rating: 4.6,
      year: 2001,
      category: "Комедия"
    },
    {
      id: 9,
      title: "ВАЛЛ-И",
      description: "Маленький робот-мусорщик ВАЛЛ-И находит свою любовь и отправляется в космическое путешествие.",
      imageUrl: "/placeholder.svg",
      rating: 4.9,
      year: 2008,
      category: "Фантастика"
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [yearRange, setYearRange] = useState([1990, 2024]);
  
  // Фильтрация мультфильмов
  const filteredCartoons = allCartoons.filter(cartoon => {
    const matchesSearch = cartoon.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || cartoon.category === category;
    const matchesRating = cartoon.rating >= minRating;
    const matchesYear = cartoon.year >= yearRange[0] && cartoon.year <= yearRange[1];
    return matchesSearch && matchesCategory && matchesRating && matchesYear;
  });
  
  // Получение уникальных категорий для фильтра
  const categories = Array.from(new Set(allCartoons.map(cartoon => cartoon.category)));
  
  // Сброс всех фильтров
  const resetFilters = () => {
    setSearchTerm("");
    setCategory("");
    setMinRating(0);
    setYearRange([1990, 2024]);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Каталог мультфильмов</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1 bg-card p-6 rounded-lg border">
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
          
          <div className="md:col-span-3">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Поиск мультфильмов..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Найдено: <span className="font-medium">{filteredCartoons.length}</span>
              </p>
              <div className="flex items-center gap-2">
                <SlidersHorizontalIcon size={16} className="text-muted-foreground" />
                <Select defaultValue="newest">
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
            </div>
            
            {filteredCartoons.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCartoons.map(cartoon => (
                  <CartoonCard key={cartoon.id} {...cartoon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-card rounded-lg">
                <p className="text-xl text-muted-foreground mb-4">Мультфильмы не найдены</p>
                <Button onClick={resetFilters}>Сбросить все фильтры</Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cartoons;