"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "@tanstack/react-router"

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navigation = [
        { name: "Browse", href: "/" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "My Bids", href: "/orders" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                        <span className="text-background font-bold text-sm">SA</span>
                    </div>
                    <span className="text-xl font-bold text-foreground">ShoeAuction</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        to="/signin"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link to="/signup">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="sm" className="px-2">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center space-x-3 py-6 border-b border-border">
                                <div className="w-8 h-8 bg-foreground flex items-center justify-center">
                                    <span className="text-background font-bold text-sm">SA</span>
                                </div>
                                <span className="text-xl font-bold text-foreground">ShoeAuction</span>
                            </div>

                            <nav className="flex flex-col space-y-6 py-8 flex-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="border-t border-border pt-6 pb-6 space-y-4">
                                <Link
                                    to="/signin"
                                    className="block text-lg font-medium text-foreground hover:text-muted-foreground transition-colors py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link to="/signup" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full h-12 text-lg font-semibold">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div >
        </header >
    )
}
