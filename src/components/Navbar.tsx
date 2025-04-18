import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon, User2Icon, FilmIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <FilmIcon size={24} />
          <span>МультМир</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <HomeIcon size={18} />
              <span>Главная</span>
            </Button>
          </Link>
          
          <Link to="/cartoons">
            <Button variant="ghost" className="flex items-center gap-2">
              <FilmIcon size={18} />
              <span>Мультфильмы</span>
            </Button>
          </Link>
          
          <Link to="/profile">
            <Button variant="secondary" className="flex items-center gap-2">
              <User2Icon size={18} />
              <span>Профиль</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;