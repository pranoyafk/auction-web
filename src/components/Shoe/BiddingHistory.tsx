import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shoe } from '@/lib/types';

interface BiddingHistoryProps {
    shoe: Shoe;
}

export function BiddingHistory({ shoe }: BiddingHistoryProps) {
    return (
        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="text-2xl">Bidding Activity</CardTitle>
                <CardDescription className="text-lg">Recent bidding history</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {shoe.bidHistory.map((bid, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between py-4 border-b border-border last:border-b-0"
                        >
                            <div className="space-y-1">
                                <span className="text-2xl font-bold">${bid.amount}</span>
                                <div className="text-sm text-muted-foreground">by {bid.bidder}</div>
                            </div>
                            <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1">
                                {bid.time}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}