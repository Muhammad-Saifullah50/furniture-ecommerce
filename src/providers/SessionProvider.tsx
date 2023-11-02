'use client'
interface ProviderProps{
    children: React.ReactNode,
    session: {expires: string} | null
}
import { SessionProvider } from "next-auth/react"
const Provider = ({ children, session }: ProviderProps) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider
