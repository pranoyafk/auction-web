import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Shoe } from "@/lib/types"

interface ShoeSpecificationsProps {
    shoe: Shoe
}

interface Specification {
    label: string
    value: string
}

export function ShoeSpecifications({ shoe }: ShoeSpecificationsProps) {
    const specifications: Specification[] = [
        { label: "Size", value: `US ${shoe.size}` },
        { label: "Colorway", value: shoe.details.colorway },
        { label: "Release Year", value: shoe.details.releaseYear },
        { label: "Style Code", value: shoe.details.style },
        { label: "Original Retail", value: shoe.details.retailPrice },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Info className="h-5 w-5 text-primary" />
                    Specifications
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {specifications.map((spec, index) => (
                        <div key={index} className="space-y-1">
                            <span className="text-xs font-medium uppercase text-muted-foreground">
                                {spec.label}
                            </span>
                            <p className="text-base font-semibold text-foreground">
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 border-t pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        <span>All details verified by our authentication team</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
