import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { mockShoes } from '@/lib/constants'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Award, Clock, Shield, Star, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/_app/shoe/$shoeId')({
    component: RouteComponent,
    loader: ({ params }) => mockShoes.find(shoe => shoe.id === params.shoeId)
})



function RouteComponent() {
    const shoe = Route.useLoaderData();
    const [bidAmount, setBidAmount] = useState<string>("")
    if (!shoe) {
        return (
            <div className="my-10 bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
                    <Link to="/">
                        <Button>Back to Home</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const handlePlaceBid = (e: React.FormEvent) => {
        e.preventDefault()
        const bid = Number.parseFloat(bidAmount)
        if (bid <= shoe.lowestBid) {
            alert(`Bid must be higher than current bid of $${shoe.lowestBid}`)
            return
        }
        // TODO: Implement actual bidding logic
        console.log("Placing bid:", bid)
        alert(`Bid of $${bid} placed successfully!`)
        setBidAmount("")
    }

    const timeRemaining = () => {
        const now = new Date()
        const endTime = new Date(shoe.auctionEndTime)
        const diff = endTime.getTime() - now.getTime()

        if (diff <= 0) return "Auction ended"

        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

        return `${hours}h ${minutes}m remaining`
    }
    return (<div className="min-h-screen bg-background">

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">{shoe.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="space-y-6">
                    <div className="aspect-square rounded-xl bg-card border border-border overflow-hidden relative group">
                        <img
                            src={shoe.image || "/placeholder.svg"}
                            alt={shoe.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge className="bg-background/90 text-foreground border">
                                <Award className="w-3 h-3 mr-1" />
                                Authenticated
                            </Badge>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <Shield className="w-4 h-4" />
                            <span>Verified Seller</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Premium Quality</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 flex-wrap">
                            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
                                {shoe.brand}
                            </Badge>
                            <Badge variant="outline" className="text-sm font-medium px-4 py-2">
                                {shoe.category}
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                {shoe.name}
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">{shoe.description}</p>
                        </div>
                    </div>

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
                                    <p className="text-sm text-muted-foreground">Minimum bid: ${shoe.lowestBid + 1}</p>
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

                    <Card className="shadow-md">
                        <CardHeader>
                            <CardTitle className="text-2xl">Product Specifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Size</span>
                                    <p className="text-2xl font-bold">{shoe.size}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Condition
                                    </span>
                                    <p className="text-2xl font-bold">{shoe.condition}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Colorway
                                    </span>
                                    <p className="text-2xl font-bold">{shoe.details.colorway}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Release Year
                                    </span>
                                    <p className="text-2xl font-bold">{shoe.details.releaseYear}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Style Code
                                    </span>
                                    <p className="text-2xl font-bold">{shoe.details.style}</p>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Original Retail
                                    </span>
                                    <p className="text-2xl font-bold">{shoe.details.retailPrice}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

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
                                        <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1">{bid.time}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </div>
    )
}
