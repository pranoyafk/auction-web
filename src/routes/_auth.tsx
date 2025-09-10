import { Button } from '@/components/ui/button'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { LucideHome } from 'lucide-react'

export const Route = createFileRoute('/_auth')({
    component: RouteComponent,
})

function RouteComponent() {
    return <main className='max-w-6xl mx-auto px-4'>
        <div className='flex items-center my-3'>
            <Button variant='outline' asChild>
                <Link to='/'>
                    <LucideHome />Home</Link>
            </Button>
        </div>
        <Outlet />
    </main>
}
