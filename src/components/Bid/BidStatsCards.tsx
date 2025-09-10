import { Card, CardContent } from "@/components/ui/card"
import { Activity, Trophy, Target } from "lucide-react"
import { mockUserBids } from '@/lib/constants'

export function BidStatsCards() {
    const activeBids = mockUserBids.filter((bid) => bid.status === "active")
    const wonBids = mockUserBids.filter((bid) => bid.status === "won")

    const stats = [
        {
            title: "Active Bids",
            value: activeBids.length,
            description: `${activeBids.filter((bid) => bid.isUserHighest).length} winning`,
            icon: Activity
        },
        {
            title: "Auctions Won",
            value: wonBids.length,
            description: `$${wonBids.reduce((sum, bid) => sum + bid.userBid, 0).toLocaleString()} value`,
            icon: Trophy
        },
        {
            title: "Total Bids",
            value: mockUserBids.length,
            description: "All time",
            icon: Target
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <Card key={index}>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                                    <p className="text-2xl font-semibold">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                                </div>
                                <Icon className="h-5 w-5 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}