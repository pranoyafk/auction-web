import { Badge } from '@/components/ui/badge';
import { Shoe } from '@/lib/types';

interface ShoeHeaderProps {
    shoe: Shoe;
}

export function ShoeHeader({ shoe }: ShoeHeaderProps) {
    const getBrandColor = (brand: string) => {
        switch (brand.toLowerCase()) {
            case 'nike':
                return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
            case 'adidas':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'new balance':
                return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case 'basketball':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
            case 'lifestyle':
                return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'running':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
                <Badge
                    variant="secondary"
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${getBrandColor(shoe.brand)} border-0`}
                >
                    {shoe.brand}
                </Badge>
                <Badge
                    variant="outline"
                    className={`text-xs font-medium px-3 py-1.5 rounded-full ${getCategoryColor(shoe.category)} border-0`}
                >
                    {shoe.category}
                </Badge>
            </div>

            <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight">
                    {shoe.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                    {shoe.description}
                </p>
            </div>
        </div>
    );
}