import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Activity, Trophy, Target } from "lucide-react"
import { mockUserBids } from '@/lib/constants'
import { BidStatsCards } from '@/components/Bid/BidStatsCards'
import { BidCard } from '@/components/Bid/BidCard'
import { EmptyState } from '@/components/Bid/EmptyState'

export const Route = createFileRoute('/_app/my-bids')({
    component: RouteComponent,
})

function RouteComponent() {
    const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all')

    const activeBids = mockUserBids.filter((bid) => bid.status === "active")
    const completedBids = mockUserBids.filter((bid) => bid.status === "won" || bid.status === "lost")

    const filteredBids = activeFilter === 'active'
        ? activeBids
        : activeFilter === 'completed'
            ? completedBids
            : mockUserBids

    const filters = [
        { key: 'all', label: 'All', count: mockUserBids.length },
        { key: 'active', label: 'Active', count: activeBids.length },
        { key: 'completed', label: 'Completed', count: completedBids.length },
    ]

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold mb-2">My Bids</h1>
                <p className="text-muted-foreground">
                    Track your auction activity
                </p>
            </div>

            {/* Stats */}
            <BidStatsCards />

            {/* Filters */}
            <div className="flex gap-2 mb-6">
                {filters.map((filter) => (
                    <Button
                        key={filter.key}
                        variant={activeFilter === filter.key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveFilter(filter.key as any)}
                    >
                        {filter.label} ({filter.count})
                    </Button>
                ))}
            </div>

            {/* Bids */}
            <div className="space-y-4">
                {filteredBids.length === 0 ? (
                    <>
                        {activeFilter === 'active' && (
                            <EmptyState
                                icon={Activity}
                                title="No active bids"
                                description="Your active auctions will appear here"
                            />
                        )}
                        {activeFilter === 'completed' && (
                            <EmptyState
                                icon={Trophy}
                                title="No completed auctions"
                                description="Your completed auctions will appear here"
                                actionText=""
                                actionLink=""
                            />
                        )}
                        {activeFilter === 'all' && (
                            <EmptyState
                                icon={Target}
                                title="No bids yet"
                                description="Start bidding on sneakers to see them here"
                            />
                        )}
                    </>
                ) : (
                    filteredBids.map((bid) => (
                        <BidCard key={bid.id} bid={bid} />
                    ))
                )}
            </div>
        </div>
    )
}