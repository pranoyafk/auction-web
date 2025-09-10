export interface Shoe {
    id: string
    name: string
    description: string;
    brand: string
    size: string
    condition: string
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
}