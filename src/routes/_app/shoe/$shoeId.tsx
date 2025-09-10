import { Button } from '@/components/ui/button';
import { mockShoes } from '@/lib/constants';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ShoeImageSection } from '@/components/Shoe/ShoeImageSection';
import { ShoeHeader } from '@/components/Shoe/ShoeHeader';
import { AuctionCard } from '@/components/Shoe/AuctionCard';
import { ShoeSpecifications } from '@/components/Shoe/ShoeSpecifications';
import { BiddingHistory } from '@/components/Shoe/BiddingHistory';
import { Breadcrumb } from '@/components/Shoe/Breadcrumb';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const Route = createFileRoute('/_app/shoe/$shoeId')({
    component: RouteComponent,
    loader: ({ params }) => mockShoes.find(shoe => shoe.id === params.shoeId)
});

function RouteComponent() {
    const shoe = Route.useLoaderData();

    if (!shoe) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center space-y-6 max-w-md mx-auto px-4">
                    <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-gray-400" />
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold text-foreground">Product Not Found</h1>
                        <p className="text-muted-foreground">
                            The shoe you're looking for doesn't exist or has been removed.
                        </p>
                    </div>

                    <Link to="/">
                        <Button className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-30 dark:opacity-20 z-[-1]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1)_0%,transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
            </div>

            <div className="relative">
                <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-7xl">
                    <Breadcrumb shoeName={shoe.name} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                        {/* Left Column - Image */}
                        <div className="lg:sticky lg:top-6 lg:h-fit">
                            <ShoeImageSection shoe={shoe} />
                        </div>

                        {/* Right Column - Details */}
                        <div className="space-y-6">
                            <ShoeHeader shoe={shoe} />

                            <div className="grid gap-6">
                                <AuctionCard shoe={shoe} />
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                    <ShoeSpecifications shoe={shoe} />
                                    <BiddingHistory shoe={shoe} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center justify-center">
                            <Link to="/">
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Browse More Shoes
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}