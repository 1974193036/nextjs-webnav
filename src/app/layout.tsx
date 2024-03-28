import type { Metadata } from 'next'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { Toaster } from '@/components/ui/toaster'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS',
  icons: {
    icon: '/favicon.ico'
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
