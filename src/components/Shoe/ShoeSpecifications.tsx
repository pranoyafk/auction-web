import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shoe } from '@/lib/types';

interface ShoeSpecificationsProps {
    shoe: Shoe;
}

export function ShoeSpecifications({ shoe }: ShoeSpecificationsProps) {
    const specifications = [
        { label: 'Size', value: shoe.size },
        { label: 'Condition', value: shoe.condition },
        { label: 'Colorway', value: shoe.details.colorway },
        { label: 'Release Year', value: shoe.details.releaseYear },
        { label: 'Style Code', value: shoe.details.style },
        { label: 'Original Retail', value: shoe.details.retailPrice },
    ];

    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl">Shoe Specifications</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {specifications.map((spec, index) => (
                        <div key={index} className="space-y-2">
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                {spec.label}
                            </span>
                            <p className="text-2xl font-bold">{spec.value}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}