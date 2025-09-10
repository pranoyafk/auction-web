import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Clock, TrendingUp, Users, Zap } from "lucide-react"
import { useState } from "react"
import { Shoe } from "@/lib/types"

import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"
import { cn } from "@/lib/utils"

interface AuctionCardProps {
    shoe: Shoe
}
const shoeSizes = [
    "UK 5", "UK 5.5", "UK 6", "UK 6.5",
    "UK 7", "UK 7.5", "UK 8", "UK 8.5",
    "UK 9", "UK 9.5", "UK 10", "UK 10.5",
    "UK 11", "UK 11.5"
];
export function AuctionCard({ shoe }: AuctionCardProps) {
    const [bidAmount, setBidAmount] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedSize, setSelectedSize] = useState<string>();


    const handlePlaceBid = async (e: React.FormEvent) => {
        e.preventDefault()
        const bid = Number.parseFloat(bidAmount)

        if (bid <= shoe.lowestBid) {
            alert(`Bid must be higher than current bid of $${shoe.lowestBid}`)
            return
        }

        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
        alert(`Bid of $${bid} placed successfully!`)
        setBidAmount("")
        setIsLoading(false)
    }

    const timeRemaining = () => {
        const now = new Date()
        const endTime = new Date(shoe.auctionEndTime)
        const diff = endTime.getTime() - now.getTime()

        if (diff <= 0) return "Auction ended"

        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        return `${hours}h ${minutes}m`
    }

    const isAuctionActive = true



    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Live Auction
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Current Bid */}
                <div className="flex items-end justify-between">
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">
                                ${shoe.lowestBid.toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground">USD</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Current highest bid
                        </p>
                    </div>

                    <div className="text-right space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{shoe.totalBids} bids</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock
                                className={`h-4 w-4 ${isAuctionActive ? "text-primary" : "text-muted-foreground"
                                    }`}
                            />
                            <span className="text-sm font-medium">{timeRemaining()}</span>
                        </div>
                    </div>
                </div>

                {/* Bidding Form */}
                {isAuctionActive ? (
                    <form onSubmit={handlePlaceBid} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="bidAmount">Place Your Bid</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                                    $
                                </span>
                                <Input
                                    id="bidAmount"
                                    type="number"
                                    placeholder={`${(shoe.lowestBid + 1).toLocaleString()}`}
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                    min={shoe.lowestBid + 1}
                                    step="1"
                                    required
                                    disabled={isLoading}
                                    className="pl-8"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Minimum bid: ${(shoe.lowestBid + 1).toLocaleString()}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="bidAmount">Select Size</Label>

                            <div className="grid grid-cols-4 gap-2">
                                {shoeSizes.map((size) => (
                                    <button
                                        onClick={() => {
                                            setSelectedSize(size)
                                        }} className={cn('px-2 py-1 rounded-md border text-center', size === selectedSize ?
                                            'bg-primary text-primary-foreground' : 'hover:bg-accent-foreground/10 text-muted-foreground')} key={size}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
                                    Placing Bid...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4" />
                                    Place Bid
                                </div>
                            )}
                        </Button>
                    </form>
                ) : (
                    <div className="py-4 text-center">
                        <p className="font-medium text-muted-foreground">
                            This auction has ended
                        </p>
                    </div>
                )}
            </CardContent>
        </Card >
    )
}
