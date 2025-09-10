import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"
import { Shoe } from "@/lib/types"

interface BiddingHistoryProps {
    shoe: Shoe
}

export function BiddingHistory({ shoe }: BiddingHistoryProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    <Activity className="h-5 w-5 text-primary" />
                    Bidding Activity
                </CardTitle>
                <CardDescription>Recent bidding history</CardDescription>
            </CardHeader>

            <CardContent>
                <div className="space-y-2">
                    {shoe.bidHistory.length === 0 ? (
                        <div className="py-6 text-center">
                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                <Activity className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <p className="text-sm text-muted-foreground">No bids yet</p>
                        </div>
                    ) : (
                        shoe.bidHistory.map((bid, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-muted/50"
                            >
                                <div className="flex min-w-0 flex-1 items-center gap-3">
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-0.5 flex items-center gap-2">
                                            <span className="text-lg font-semibold">
                                                ${bid.amount.toLocaleString()}
                                            </span>
                                            {index === 0 && (
                                                <Badge
                                                    variant="secondary"
                                                    className="px-2 py-0 text-xs font-medium"
                                                >
                                                    Highest
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="truncate text-xs text-muted-foreground">
                                            {bid.bidder}
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-3 whitespace-nowrap rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                                    {bid.time}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {shoe.bidHistory.length > 0 && (
                    <div className="mt-4 flex items-center justify-center gap-1 border-t pt-3">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                        <span className="text-xs text-muted-foreground">Live updates</span>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
