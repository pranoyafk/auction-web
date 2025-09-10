import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, Eye } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { BidStatusBadge } from "./BidStatusBadge"
import { UserBid } from "@/lib/types"

interface BidCardProps {
    bid: UserBid
}

export function BidCard({ bid }: BidCardProps) {
    const getTimeRemaining = (endTime: string) => {
        const now = new Date()
        const end = new Date(endTime)
        const diff = end.getTime() - now.getTime()

        if (diff <= 0) return "Ended"

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

        if (days > 0) return `${days}d ${hours}h`
        if (hours > 0) return `${hours}h ${minutes}m`
        return `${minutes}m`
    }

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                {/* Main container: stacks on mobile, row on larger screens */}
                <div className="flex flex-col sm:flex-row">
                    {/* Image Section: Full width on mobile, fixed width on larger screens */}
                    <div className="w-full h-48 flex-shrink-0 sm:w-40">
                        <img
                            src={bid.image || "/placeholder.svg"}
                            alt={bid.shoeName}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* Info Section: Adjusted padding for mobile */}
                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                        <div>
                            {/* Header */}
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                    {/* Responsive font size */}
                                    <h3 className="text-base sm:text-lg font-semibold leading-tight">
                                        {bid.shoeName}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {bid.brand} • Size {bid.size}
                                    </p>
                                </div>
                                <BidStatusBadge
                                    status={bid.status}
                                    isUserHighest={bid.isUserHighest}
                                />
                            </div>

                            {/* Bid info: Stacks on mobile, 2-col grid on larger screens */}
                            <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                                <div>
                                    <p className="text-xs text-muted-foreground">Your Bid</p>
                                    {/* Responsive font size */}
                                    <p className="text-lg sm:text-xl font-bold">${bid.userBid.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Current High</p>
                                    <p className="text-lg sm:text-xl font-bold text-primary">
                                        ${bid.currentHighestBid.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                {bid.status === "active" ? (
                                    <>
                                        <Clock className="h-4 w-4" />
                                        <span>{getTimeRemaining(bid.auctionEndTime)}</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                        <span>Ended</span>
                                    </>
                                )}
                            </div>
                            <Link to="/shoe/$shoeId" params={{ shoeId: bid.shoeId }}>
                                <Button size="sm">
                                    <Eye className="h-4 w-4 sm:mr-2" />
                                    {/* Hide text on very small screens if needed, but "View" is short enough */}
                                    <span className="hidden sm:inline">View</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}