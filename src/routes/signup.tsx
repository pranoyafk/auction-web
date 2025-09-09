import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'


export const Route = createFileRoute('/signup')({
    component: RouteComponent,
})

function RouteComponent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement authentication logic
        console.log("Sign up:", { name, email, password })
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Create your account</CardTitle>
                        <CardDescription>Join thousands of sellers getting top dollar for their shoes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Create a password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-muted-foreground">
                                Already have an account?{" "}
                                <Link to="/signin" className="text-primary hover:underline">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
