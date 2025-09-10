import { Badge } from '@/components/ui/badge';
import { Shoe } from '@/lib/types';

interface ShoeHeaderProps {
    shoe: Shoe;
}

export function ShoeHeader({ shoe }: ShoeHeaderProps) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                    {shoe.brand}
                </Badge>
                <Badge variant="outline" className="text-sm font-medium px-4 py-2">
                    {shoe.category}
                </Badge>
            </div>

            <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {shoe.name}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {shoe.description}
                </p>
            </div>
        </div>
    );
}