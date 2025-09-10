import { Link } from '@tanstack/react-router';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    shoeName: string;
}

export function Breadcrumb({ shoeName }: BreadcrumbProps) {
    return (
        <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link
                to="/"
                className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
            >
                <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Home</span>
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-gray-400 mx-1" />

            <span className="text-foreground font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs">
                {shoeName}
            </span>
        </nav>
    );
}