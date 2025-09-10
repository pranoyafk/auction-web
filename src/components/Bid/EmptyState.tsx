import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from '@tanstack/react-router'
import { LucideIcon } from "lucide-react"

interface EmptyStateProps {
    icon: LucideIcon
    title: string
    description: string
    actionText?: string
    actionLink?: string
}

export function EmptyState({
    icon: Icon,
    title,
    description,
    actionText = "Browse Auctions",
    actionLink = "/"
}: EmptyStateProps) {
    return (
        <Card>
            <CardContent className="py-12 text-center">
                <Icon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">{title}</h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    {description}
                </p>
                {actionLink && actionText && (
                    <Link to={actionLink}>
                        <Button>{actionText}</Button>
                    </Link>
                )}
            </CardContent>
        </Card>
    )
}