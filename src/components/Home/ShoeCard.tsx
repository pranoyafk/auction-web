import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Shoe } from '@/lib/types'



interface ShoeCardProps {
    shoe: Shoe
}

export function ShoeCard({ shoe }: ShoeCardProps) {
    return (
        <Link to={`/product/${shoe.id}`} className="group block">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-200 group-hover:border-foreground/20 rounded-none">
                <CardHeader className="p-0">
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                        <img
                            src={shoe.image}
                            alt={shoe.name}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                        />
                    </div>
                </CardHeader>

                <CardContent className="p-4 pb-2">
                    <div className="flex items-start justify-between mb-2 gap-2">
                        <h4 className="font-semibold text-card-foreground group-hover:text-foreground transition-colors text-sm md:text-base line-clamp-2">
                            {shoe.name}
                        </h4>
                        <Badge variant='secondary' className="text-xs shrink-0">
                            {shoe.brand}
                        </Badge>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-xs md:text-sm">
                        <span className="text-muted-foreground">Size {shoe.size}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{shoe.condition}</span>
                    </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <p className="text-xs text-muted-foreground">Lowest Bid</p>
                            <span className="text-lg font-bold text-foreground">₹{shoe.lowestBid}</span>
                        </div>
                        <Button size="sm" className="shrink-0">
                            Place Bid
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}