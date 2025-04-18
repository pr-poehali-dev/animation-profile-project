import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeftIcon, PlayIcon, HeartIcon, StarIcon, CalendarIcon, TagIcon } from "lucide-react";

const CartoonDetail = () => {
  const { id } = useParams();
  
  // В реальном приложении здесь должен быть запрос к API
  // Используем заглушку для демонстрации
  const cartoon = {
    id: Number(id),
    title: "Холодное сердце",
    description: "Анна отправляется в путешествие, чтобы спасти королевство от вечной зимы, устроенной ее сестрой Эльзой. В пути ей помогают простой ледоруб Кристофф, его верный олень Свен и забавный снеговик Олаф. Им предстоит преодолеть множество испытаний и доказать, что настоящая любовь способна растопить любой лед.",
    imageUrl: "/placeholder.svg",
    rating: 4.8,
    year: 2013,
    duration: "102 мин",
    category: "Приключения",
    director: "Крис Бак, Дженнифер Ли",
    characters: ["Эльза", "Анна", "Кристофф", "Олаф", "Свен"],
    episodes: []
  };
  
  if (!cartoon) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Мультфильм не найден</h1>
          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeftIcon size={16} />
              <span>Назад</span>
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
              <img 
                src={cartoon.imageUrl || "/placeholder.svg"} 
                alt={cartoon.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className="flex items-center gap-1 bg-yellow-500">
                  <StarIcon size={14} />
                  {cartoon.rating}
                </Badge>
              </div>
            </div>
            
            <div className="flex gap-3 mt-4">
              <Button className="flex-1 flex items-center gap-2">
                <PlayIcon size={16} />
                <span>Смотреть</span>
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <HeartIcon size={16} />
                <span>В избранное</span>
              </Button>
            </div>
            
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CalendarIcon size={16} className="text-muted-foreground" />
                    <span>Год выпуска: <strong>{cartoon.year}</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TagIcon size={16} className="text-muted-foreground" />
                    <span>Категория: <strong>{cartoon.category}</strong></span>
                  </div>
                  {cartoon.duration && (
                    <div className="flex items-center gap-3">
                      <span className="emoji">⏱️</span>
                      <span>Длительность: <strong>{cartoon.duration}</strong></span>
                    </div>
                  )}
                  {cartoon.director && (
                    <div className="flex items-center gap-3">
                      <span className="emoji">🎬</span>
                      <span>Режиссер: <strong>{cartoon.director}</strong></span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-3">{cartoon.title}</h1>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Описание</h3>
              <p className="text-muted-foreground">{cartoon.description}</p>
            </div>
            
            {cartoon.characters && cartoon.characters.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Персонажи</h3>
                <div className="flex flex-wrap gap-2">
                  {cartoon.characters.map((character, index) => (
                    <Badge key={index} variant="secondary">{character}</Badge>
                  ))}
                </div>
              </div>
            )}
            
            {cartoon.episodes && cartoon.episodes.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Серии</h3>
                <div className="space-y-2">
                  {cartoon.episodes.map((episode, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Серия {index + 1}</h4>
                          <p className="text-sm text-muted-foreground">{episode}</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          <PlayIcon size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartoonDetail;