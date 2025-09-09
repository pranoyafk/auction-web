import { Input } from '@/components/ui/input'
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from '@/components/ui/select'

interface FilterSectionProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
    selectedBrand: string
    setSelectedBrand: (brand: string) => void
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    selectedCondition: string
    setSelectedCondition: (condition: string) => void
    priceRange: string
    setPriceRange: (range: string) => void
}

export function FilterSection({
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
    selectedCondition,
    setSelectedCondition,
    priceRange,
    setPriceRange
}: FilterSectionProps) {
    return (
        <section className="py-6 md:py-8 px-4 bg-muted/30 border-b border-border">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="w-full">
                        <Input
                            placeholder="Search shoes or brands..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-md mx-auto lg:mx-0"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Brand" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Brands</SelectItem>
                                <SelectItem value="Nike">Nike</SelectItem>
                                <SelectItem value="Adidas">Adidas</SelectItem>
                                <SelectItem value="New Balance">New Balance</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="Basketball">Basketball</SelectItem>
                                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                <SelectItem value="Running">Running</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Condition" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Conditions</SelectItem>
                                <SelectItem value="Excellent">Excellent</SelectItem>
                                <SelectItem value="Very Good">Very Good</SelectItem>
                                <SelectItem value="Good">Good</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={priceRange} onValueChange={setPriceRange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Price Range" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Prices</SelectItem>
                                <SelectItem value="under-200">Under ₹200</SelectItem>
                                <SelectItem value="200-500">₹200 - ₹500</SelectItem>
                                <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                                <SelectItem value="over-1000">Over ₹1000</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </section>
    )
}