import { useState } from "react";
import Navbar from "@/components/Navbar";
import CartoonCard, { CartoonProps } from "@/components/CartoonCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, FilterIcon } from "lucide-react";

const Home = () => {
  // Данные о мультфильмах (в реальном проекте должны приходить с API)
  const cartoons: CartoonProps[] = [
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
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  
  // Фильтрация мультфильмов
  const filteredCartoons = cartoons.filter(cartoon => {
    const matchesSearch = cartoon.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || cartoon.category === category;
    return matchesSearch && matchesCategory;
  });
  
  // Получение уникальных категорий для фильтра
  const categories = Array.from(new Set(cartoons.map(cartoon => cartoon.category)));
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <section className="mb-10">
          <h1 className="text-4xl font-bold mb-6 text-center">МультМир — лучшие мультфильмы онлайн</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Смотрите любимые мультики в высоком качестве прямо сейчас!
            Создайте свой профиль и сохраняйте понравившиеся мультфильмы.
          </p>
        </section>
        
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Поиск мультфильмов..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 min-w-[200px]">
              <FilterIcon size={18} className="text-muted-foreground" />
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Все категории</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCartoons.map(cartoon => (
              <CartoonCard key={cartoon.id} {...cartoon} />
            ))}
          </div>
          
          {filteredCartoons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Мультфильмы не найдены</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setCategory("");
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;