'use client'

import { useAuth } from '../contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UserProfile() {
  const auth = useAuth()

  if (!auth || !auth.user) {
    return null
  }

  const { user, logout } = auth

  return (
    <Card className="w-64">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-primary">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="mb-2 text-foreground"><strong className="text-primary">Username:</strong> {user.username}</p>
        <p className="mb-2 text-foreground"><strong className="text-primary">Email:</strong> {user.email}</p>
        <p className="mb-4 text-foreground"><strong className="text-primary">Questions Solved:</strong> 0</p>
        <Button onClick={logout} variant="outline" className="w-full">Logout</Button>
      </CardContent>
    </Card>
  )
}

