import Link from 'next/link'
import { Home, Users, BookOpen } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Sidebar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button asChild variant="secondary" className="w-full justify-start">
              <Link href="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Accueil
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/assemblees">
                <Users className="mr-2 h-4 w-4" />
                Assemblées
              </Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/dashboard/predications">
                <BookOpen className="mr-2 h-4 w-4" />
                Prédications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

