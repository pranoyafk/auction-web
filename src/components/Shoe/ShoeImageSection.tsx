import { Shoe } from "@/lib/types"

interface ShoeImageSectionProps {
    shoe: Shoe
}

export function ShoeImageSection({ shoe }: ShoeImageSectionProps) {
    return (
        <div className="space-y-6">

            <div className="aspect-square overflow-hidden rounded-xl border bg-card">
                <img
                    src={shoe.image || "/placeholder.svg"}
                    alt={shoe.name}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    )
}
