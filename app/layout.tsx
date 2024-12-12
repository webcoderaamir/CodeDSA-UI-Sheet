import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import DarkModeToggle from './components/DarkModeToggle'
import { AuthProvider } from './contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSA Question Bank',
  description: 'A React app for storing and reviewing DSA questions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <AuthProvider>
          <nav className="bg-card shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">DSA Question Bank</Link>
              <div className="flex items-center space-x-4">
                <Link href="/add-question" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-md transition-colors">
                  Add Question
                </Link>
                <DarkModeToggle />
              </div>
            </div>
          </nav>
          <main className="container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-card shadow-md mt-12">
            <div className="container mx-auto px-6 py-4 text-center text-muted-foreground">
              <p>&copy; 2024 DSA Question Bank. All rights reserved.</p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}

