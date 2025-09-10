import { Button } from '@/components/ui/button';
import { mockShoes } from '@/lib/constants';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ShoeImageSection } from '@/components/Shoe/ShoeImageSection';
import { ShoeHeader } from '@/components/Shoe/ShoeHeader';
import { AuctionCard } from '@/components/Shoe/AuctionCard';
import { ShoeSpecifications } from '@/components/Shoe/ShoeSpecifications';
import { BiddingHistory } from '@/components/Shoe/BiddingHistory';
import { Breadcrumb } from '@/components/Shoe/Breadcrumb';

export const Route = createFileRoute('/_app/shoe/$shoeId')({
    component: RouteComponent,
    loader: ({ params }) => mockShoes.find(shoe => shoe.id === params.shoeId)
});

function RouteComponent() {
    const shoe = Route.useLoaderData();

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
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-7xl">
                <Breadcrumb shoeName={shoe.name} />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <ShoeImageSection shoe={shoe} />

                    <div className="space-y-8">
                        <ShoeHeader shoe={shoe} />
                        <AuctionCard shoe={shoe} />
                        <ShoeSpecifications shoe={shoe} />
                        <BiddingHistory shoe={shoe} />
                    </div>
                </div>
            </div>
        </div>
    );
}