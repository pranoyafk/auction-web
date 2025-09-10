import { Button } from '@/components/ui/button'
import { ShoeCard } from './ShoeCard'
import { Shoe } from '@/lib/types'



interface ProductsGridProps {
    filteredShoes: Shoe[]
    onClearFilters: () => void
}

export function ProductsGrid({ filteredShoes, onClearFilters }: ProductsGridProps) {
    return (
        <section className="py-12 md:py-16 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Current Auctions
                        <span className="text-muted-foreground text-base md:text-lg ml-2 block sm:inline">
                            ({filteredShoes.length} shoes)
                        </span>
                    </h3>
                </div>

                {filteredShoes.length === 0 ? (
                    <div className="text-center py-12 md:py-16">
                        <p className="text-muted-foreground text-lg mb-4">No shoes match your current filters.</p>
                        <Button variant="outline" onClick={onClearFilters}>
                            Clear Filters
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {filteredShoes.map((shoe) => (
                            <ShoeCard key={shoe.id} shoe={shoe} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}