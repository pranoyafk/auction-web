import { Link } from '@tanstack/react-router';

interface BreadcrumbProps {
    shoeName: string;
}

export function Breadcrumb({ shoeName }: BreadcrumbProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
                Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{shoeName}</span>
        </nav>
    );
}