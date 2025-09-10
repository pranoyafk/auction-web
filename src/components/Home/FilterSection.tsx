import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet'

import { Search, SlidersHorizontal } from 'lucide-react'



interface FilterSectionProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
    selectedBrand: string
    setSelectedBrand: (brand: string) => void
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    priceRange: string
    setPriceRange: (range: string) => void
    selectedSize: string
    setSelectedSize: (size: string) => void
    onClearFilters: () => void;
}

export function FilterSection({
    searchTerm,
    setSearchTerm,
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    onClearFilters
}: FilterSectionProps) {
    return (
        <section className="sticky top-0 z-10 p-4 border-b bg-background/80 backdrop-blur-sm border-border">
            <div className="container mx-auto">
                <div className="flex items-center gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search shoes or brands..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-sm pl-10"
                        />
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="gap-2 shrink-0">
                                <SlidersHorizontal className="w-5 h-5" />
                                <span className="hidden sm:inline">Filters</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle>Filter Products</SheetTitle>
                            </SheetHeader>
                            <div className="py-6 px-1 md:px-4 grid gap-8">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-foreground">Brand</label>
                                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Select a brand" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Brands</SelectItem>
                                            <SelectItem value="Nike">Nike</SelectItem>
                                            <SelectItem value="Adidas">Adidas</SelectItem>
                                            <SelectItem value="New Balance">New Balance</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-foreground">Category</label>
                                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Categories</SelectItem>
                                            <SelectItem value="Basketball">Basketball</SelectItem>
                                            <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                            <SelectItem value="Running">Running</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>


                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-foreground">Price Range</label>
                                    <Select value={priceRange} onValueChange={setPriceRange}>
                                        <SelectTrigger className='w-full'>
                                            <SelectValue placeholder="Select a price range" />
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
                            <SheetFooter>
                                <Button variant="outline" onClick={onClearFilters}>
                                    Clear Filters
                                </Button>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    )
}