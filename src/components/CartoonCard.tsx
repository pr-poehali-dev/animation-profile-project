import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayIcon, StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface CartoonProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  year: number;
  category: string;
}

const CartoonCard = ({ id, title, description, imageUrl, rating, year, category }: CartoonProps) => {
  return (
    <Card className="overflow-hidden transition-transform hover:scale-105 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className="flex items-center gap-1 bg-yellow-500">
            <StarIcon size={14} />
            {rating}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-1">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-semibold line-clamp-1">{title}</CardTitle>
          <Badge variant="outline">{year}</Badge>
        </div>
        <Badge variant="secondary" className="mt-1">{category}</Badge>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Link to={`/cartoons/${id}`} className="w-full">
          <Button className="w-full flex items-center gap-2">
            <PlayIcon size={16} />
            <span>Смотреть</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CartoonCard;