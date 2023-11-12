'use client'

import Image from "next/image"
import { Input } from "./ui/input"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const Search = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (search) {
                router.push(`/shop/?query=` + search, { scroll: false })
            }
            else {
                router.push(`/shop`, { scroll: false });
            }
        }, 300)

        return () => clearTimeout(debounce)
    }, [search])

    return (
        <div className="w-2/3  flex gap-2 justify-center items-center searchbar">
            <Input
                value={search}
                className=" no-focus searchbar_input bg-dark-2 text-light-1"
                placeholder={'Search for products...'}
                onChange={(e) => setSearch(e.target.value)}
            />

            <Image
                src='/search.svg'
                alt="search"
                width={24}
                height={24}
            />
        </div>
    )
}

export default Search
