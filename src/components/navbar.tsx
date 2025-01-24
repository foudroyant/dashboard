import Link from "next/link";
import { Home, Users, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const MobileNavbar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-white p-2 shadow-md",
        className
      )}
    >
      <Button asChild variant="ghost" className="flex flex-col items-center">
        <Link href="/">
          <Home className="h-5 w-5" />
          <span className="text-xs">Accueil</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="flex flex-col items-center">
        <Link href="/assemblees">
          <Users className="h-5 w-5" />
          <span className="text-xs">Assemblées</span>
        </Link>
      </Button>
      <Button asChild variant="ghost" className="flex flex-col items-center">
        <Link href="/predications">
          <BookOpen className="h-5 w-5" />
          <span className="text-xs">Prédications</span>
        </Link>
      </Button>
    </div>
  );
};

export default MobileNavbar;
