import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goldshore Freights & Logistics | Cargo, Shipping & Logistics',
  description: 'Professional freight, shipping, cargo handling and logistics support from Goldshore Freights & Logistics in Ghana.',
  keywords: ['Goldshore Freights & Logistics','cargo Ghana','freight logistics','shipping services','cargo handling'],
  openGraph: { title: 'Goldshore Freights & Logistics', description: 'Moving Cargo. Connecting Businesses. Delivering Possibilities.', type: 'website' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
