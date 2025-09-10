export interface Shoe {
    id: string
    name: string
    description: string;
    brand: string
    size: string
    lowestBid: number
    image?: string
    category: string;
    auctionEndTime: string,
    totalBids: 23,
    bidHistory:
    { amount: number, time: string, bidder: string }[],
    details: {
        colorway: string,
        releaseYear: string,
        style: string,
        retailPrice: string,
    },
}export interface UserBid {
    id: string; shoeId: string; shoeName: string; brand: string; size: string; image: string | undefined; userBid: number; currentHighestBid: number; isUserHighest: boolean; auctionEndTime: string; status: string; bidPlacedTime: string
}