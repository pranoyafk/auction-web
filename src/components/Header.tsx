import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/constants"
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router"

export function Header() {
    const location = useLocation();
    return (
        <header className={cn("sm:block hidden w-full border-b border-border", {
            'supports-[backdrop-filter]:bg-background/70 z-50 backdrop-blur sticky top-0': location.pathname !== '/'
        })}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                <div className="flex gap-6">
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center">
                            <span className="font-bold text-sm">UA</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">UdayAuction</span>
                    </Link>


                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/signin"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link to="/signup">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div >
        </header >
    )
}
