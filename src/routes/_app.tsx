import { BottomNav } from '@/components/BottomNav'
import { Header } from '@/components/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
    component: RouteComponent,
})

function RouteComponent() {
    return <main>
        <Header />
        <Outlet />
        <BottomNav />
    </main>
}
