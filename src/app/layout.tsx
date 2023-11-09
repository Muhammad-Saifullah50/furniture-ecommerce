import { Footer, Navbar } from '@/components'
import './globals.css'
import Provider from '@/providers/SessionProvider'
import { getServerSession } from 'next-auth/next'
import { Toaster } from "@/components/ui/toaster"


import type { Metadata } from 'next'
import { authOptions } from '@/lib/authOptions'

export const metadata: Metadata = {
  title: 'Furnitees',
  description: 'A modern furniture e-commerce app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <body className='font-poppins'>
        <Provider session={session}>
          <Navbar />
          <section className='px-5'>
            {children}
          </section>
          <Toaster />
          <Footer />
        </Provider>

      </body>
    </html>
  )
}
