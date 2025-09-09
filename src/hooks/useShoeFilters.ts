import { Shoe } from '@/lib/types'
import { useState, useMemo } from 'react'



export function useShoeFilters(shoes: Shoe[]) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedBrand, setSelectedBrand] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedCondition, setSelectedCondition] = useState("all")
    const [priceRange, setPriceRange] = useState("all")

    const filteredShoes = useMemo(() => {
        return shoes.filter((shoe) => {
            const matchesSearch =
                shoe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                shoe.brand.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesBrand = selectedBrand === "all" || shoe.brand === selectedBrand
            const matchesCategory = selectedCategory === "all" || shoe.category === selectedCategory
            const matchesCondition = selectedCondition === "all" || shoe.condition === selectedCondition

            let matchesPrice = true
            if (priceRange !== "all") {
                const price = shoe.currentBid
                switch (priceRange) {
                    case "under-200":
                        matchesPrice = price < 200
                        break
                    case "200-500":
                        matchesPrice = price >= 200 && price <= 500
                        break
                    case "500-1000":
                        matchesPrice = price >= 500 && price <= 1000
                        break
                    case "over-1000":
                        matchesPrice = price > 1000
                        break
                }
            }

            return matchesSearch && matchesBrand && matchesCategory && matchesCondition && matchesPrice
        })
    }, [shoes, searchTerm, selectedBrand, selectedCategory, selectedCondition, priceRange])

    const clearFilters = () => {
        setSearchTerm("")
        setSelectedBrand("all")
        setSelectedCategory("all")
        setSelectedCondition("all")
        setPriceRange("all")
    }

    return {
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
    }
}