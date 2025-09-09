import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export function HeroSection() {
    return (
        <section className="py-12 md:py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                    Auction Your Shoes
                    <br />
                    <span className="text-foreground">Get Top Dollar</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                    Turn your premium sneakers into cash. We buy directly from you through our secure auction platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                    <Link to="/signup" className="w-full sm:w-auto">
                        <Button size="lg" className="text-lg px-6 md:px-8 w-full sm:w-auto">
                            Start Selling
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="text-lg px-6 md:px-8 w-full sm:w-auto bg-transparent">
                        Browse Shoes
                    </Button>
                </div>
            </div>
        </section>
    )
}