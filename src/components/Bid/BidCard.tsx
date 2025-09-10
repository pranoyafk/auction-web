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
        <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
                <div className="flex">
                    {/* Image Section */}
                    <div className="w-40 h-40 bg-muted flex-shrink-0">
                        <img
                            src={bid.image || "/placeholder.svg"}
                            alt={bid.shoeName}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 flex flex-col justify-between p-5">
                        <div>
                            {/* Header */}
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-semibold text-lg leading-tight">{bid.shoeName}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {bid.brand} • Size {bid.size}
                                    </p>
                                </div>
                                <BidStatusBadge status={bid.status} isUserHighest={bid.isUserHighest} />
                            </div>

                            {/* Bid info */}
                            <div className="grid grid-cols-2 gap-6 mt-3">
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
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center text-sm text-muted-foreground">
                                {bid.status === "active" ? (
                                    <>
                                        <Clock className="w-4 h-4 mr-1" />
                                        {getTimeRemaining(bid.auctionEndTime)}
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Ended
                                    </>
                                )}
                            </div>
                            <Link to="/shoe/$shoeId" params={{ shoeId: bid.shoeId }}>
                                <Button size="sm" className="rounded-xl">
                                    <Eye className="w-4 h-4 mr-2" />
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
