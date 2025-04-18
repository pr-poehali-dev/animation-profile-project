import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SettingsIcon, HeartIcon, EyeIcon } from "lucide-react";

export interface ProfileProps {
  name: string;
  avatarUrl?: string;
  favoritesCount: number;
  watchedCount: number;
  level: number;
}

const ProfileCard = ({ name, avatarUrl, favoritesCount, watchedCount, level }: ProfileProps) => {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
            {name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <CardTitle className="mt-4 text-xl">{name}</CardTitle>
        <Badge className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500">Уровень {level}</Badge>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col items-center bg-secondary p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <HeartIcon size={18} className="text-red-500" />
              <span className="font-semibold">Избранное</span>
            </div>
            <span className="text-xl font-bold">{favoritesCount}</span>
          </div>
          
          <div className="flex flex-col items-center bg-secondary p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <EyeIcon size={18} className="text-blue-500" />
              <span className="font-semibold">Просмотрено</span>
            </div>
            <span className="text-xl font-bold">{watchedCount}</span>
          </div>
        </div>
        
        <Button className="w-full mt-6 flex items-center gap-2 justify-center">
          <SettingsIcon size={16} />
          <span>Редактировать профиль</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;