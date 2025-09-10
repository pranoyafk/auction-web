import { navLinks } from "@/lib/constants";
import { Link } from "@tanstack/react-router";

export function BottomNav() {
    return (


        <div className="fixed sm:hidden block bottom-0 left-0 z-50 w-full h-16 support border-t supports-[backdrop-filter]:bg-background/90 backdrop-blur">
            <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
                {
                    navLinks.map(link => (
                        <Link key={link.to} to={link.to} className="inline-flex flex-col items-center justify-center px-5 text-muted-foreground">
                            <link.icon size={20} />
                            <span className="text-sm text-muted-foreground">{link.name}</span>
                        </Link>
                    ))
                }
            </div>
        </div>

    )
}