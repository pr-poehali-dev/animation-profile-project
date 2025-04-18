import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import CartoonCard, { CartoonProps } from "@/components/CartoonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  // Данные профиля (в реальном проекте должны приходить с API)
  const profile = {
    name: "Алексей Иванов",
    avatarUrl: "/placeholder.svg",
    favoritesCount: 12,
    watchedCount: 28,
    level: 3
  };
  
  // Избранные мультфильмы
  const favoriteCartoons: CartoonProps[] = [
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
    }
  ];
  
  // Просмотренные мультфильмы
  const watchedCartoons: CartoonProps[] = [
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
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <ProfileCard {...profile} />
          </div>
          
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Моя коллекция</h2>
            
            <Tabs defaultValue="favorites" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="favorites">Избранное ({favoriteCartoons.length})</TabsTrigger>
                <TabsTrigger value="watched">Просмотренные ({watchedCartoons.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="favorites">
                {favoriteCartoons.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteCartoons.map(cartoon => (
                      <CartoonCard key={cartoon.id} {...cartoon} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">У вас пока нет избранных мультфильмов</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="watched">
                {watchedCartoons.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {watchedCartoons.map(cartoon => (
                      <CartoonCard key={cartoon.id} {...cartoon} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-muted-foreground">Вы пока не просмотрели ни одного мультфильма</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;