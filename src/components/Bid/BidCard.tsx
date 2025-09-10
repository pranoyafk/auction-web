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
        <Card>
            <CardContent className="p-0">
                <div className="flex">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden">
                        <img
                            src={bid.image || "/placeholder.svg"}
                            alt={bid.shoeName}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                            {/* Header */}
                            <div className="mb-2 flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold leading-tight">
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

                            {/* Bid info */}
                            <div className="mt-3 grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs text-muted-foreground">Your Bid</p>
                                    <p className="text-xl font-bold">${bid.userBid.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Current High</p>
                                    <p className="text-xl font-bold text-primary">
                                        ${bid.currentHighestBid.toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                {bid.status === "active" ? (
                                    <>
                                        <Clock className="h-4 w-4" />
                                        <span>{getTimeRemaining(bid.auctionEndTime)}</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="h-4 w-4" />
                                        <span>Ended</span>
                                    </>
                                )}
                            </div>
                            <Link to="/shoe/$shoeId" params={{ shoeId: bid.shoeId }}>
                                <Button size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    View
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
