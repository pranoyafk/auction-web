import { Badge } from '@/components/ui/badge';
import { Award, Shield, Star } from 'lucide-react';
import { Shoe } from '@/lib/types';

interface ShoeImageSectionProps {
    shoe: Shoe;
}

export function ShoeImageSection({ shoe }: ShoeImageSectionProps) {
    return (
        <div className="space-y-6">
            <div className="aspect-square rounded-xl bg-card border border-border overflow-hidden relative group">
                <img
                    src={shoe.image || "/placeholder.svg"}
                    alt={shoe.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground border">
                        <Award className="w-3 h-3 mr-1" />
                        Authenticated
                    </Badge>
                </div>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Verified Seller</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Premium Quality</span>
                </div>
            </div>
        </div>
    );
}
