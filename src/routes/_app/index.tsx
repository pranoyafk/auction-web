import { mockShoes } from '@/lib/constants'
import { createFileRoute } from '@tanstack/react-router'
import { useShoeFilters } from '@/hooks/useShoeFilters'
import { HeroSection } from '@/components/Home/HeroSection'
import { FilterSection } from '@/components/Home/FilterSection'
import { ProductsGrid } from '@/components/Home/ProductsGrid'

export const Route = createFileRoute('/_app/')({
    component: RouteComponent,
})

function RouteComponent() {
    const {
        searchTerm,
        setSearchTerm,
        selectedBrand,
        setSelectedBrand,
        selectedCategory,
        setSelectedCategory,
        selectedCondition,
        setSelectedCondition,
        priceRange,
        setPriceRange,
        filteredShoes,
        clearFilters
    } = useShoeFilters(mockShoes)

    return (
        <div className="min-h-screen bg-background">
            <HeroSection />

            <FilterSection
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedCondition={selectedCondition}
                setSelectedCondition={setSelectedCondition}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
            />

            <ProductsGrid
                filteredShoes={filteredShoes}
                onClearFilters={clearFilters}
            />
        </div>
    )
}