import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, CheckCircle, XCircle } from "lucide-react"

interface BidStatusBadgeProps {
    status: string
    isUserHighest: boolean
}

export function BidStatusBadge({ status, isUserHighest }: BidStatusBadgeProps) {
    switch (status) {
        case "active":
            return isUserHighest ? (
                <Badge variant="secondary">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Winning
                </Badge>
            ) : (
                <Badge variant="outline">
                    <Clock className="w-3 h-3 mr-1" />
                    Outbid
                </Badge>
            )
        case "won":
            return (
                <Badge variant="secondary">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Won
                </Badge>
            )
        case "lost":
            return (
                <Badge variant="destructive">
                    <XCircle className="w-3 h-3 mr-1" />
                    Lost
                </Badge>
            )
        default:
            return <Badge variant="outline">Unknown</Badge>
    }
}