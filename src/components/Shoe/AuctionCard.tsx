import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Clock, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';
import { Shoe } from '@/lib/types';

interface AuctionCardProps {
    shoe: Shoe;
}

export function AuctionCard({ shoe }: AuctionCardProps) {
    const [bidAmount, setBidAmount] = useState<string>("");

    const handlePlaceBid = (e: React.FormEvent) => {
        e.preventDefault();
        const bid = Number.parseFloat(bidAmount);
        if (bid <= shoe.lowestBid) {
            alert(`Bid must be higher than current bid of $${shoe.lowestBid}`);
            return;
        }
        // TODO: Implement actual bidding logic
        console.log("Placing bid:", bid);
        alert(`Bid of $${bid} placed successfully!`);
        setBidAmount("");
    };

    const timeRemaining = () => {
        const now = new Date();
        const endTime = new Date(shoe.auctionEndTime);
        const diff = endTime.getTime() - now.getTime();

        if (diff <= 0) return "Auction ended";

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m remaining`;
    };

    return (
        <Card className="border-2 shadow-lg">
            <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl">
                    <TrendingUp className="w-7 h-7 text-foreground" />
                    Current Auction Status
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="flex items-end justify-between">
                    <div className="space-y-2">
                        <span className="text-5xl font-bold text-foreground">${shoe.lowestBid}</span>
                        <p className="text-muted-foreground font-medium">Current highest bid</p>
                    </div>
                    <div className="text-right space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-5 h-5" />
                            <span className="font-medium text-lg">{shoe.totalBids} bids</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium text-lg">{timeRemaining()}</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handlePlaceBid} className="space-y-6">
                    <div className="space-y-3">
                        <Label htmlFor="bidAmount" className="text-lg font-semibold">
                            Place Your Bid
                        </Label>
                        <p className="text-sm text-muted-foreground">
                            Minimum bid: ${shoe.lowestBid + 1}
                        </p>
                        <Input
                            id="bidAmount"
                            type="number"
                            placeholder={`Enter amount above $${shoe.lowestBid}`}
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            min={shoe.lowestBid + 1}
                            step="1"
                            required
                            className="text-xl py-4 h-14"
                        />
                    </div>
                    <Button type="submit" className="w-full text-xl py-4 h-14 font-bold">
                        Place Bid
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}