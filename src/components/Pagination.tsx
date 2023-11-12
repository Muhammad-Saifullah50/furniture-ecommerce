'use client'

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

const Pagination = ({ pageNumber, isNext }: { pageNumber: number, isNext: boolean }) => {

  const router = useRouter()

  const handleNavigation = (type: string) => {

    let nextPageNumber = pageNumber

    if (type === 'prev') {
      nextPageNumber = Math.max(1, pageNumber - 1)
    }
    else if (type === 'next') {
      nextPageNumber = pageNumber + 1
    }

    if (nextPageNumber < 1) {
      nextPageNumber = 1
    }

    const nextPageUrl = `/shop?page=${nextPageNumber}`

    router.push(nextPageUrl)
  }

  if (!isNext && pageNumber === 1) return null




  return (
    <div className="flex justify-center pb-16 gap-5 items-center">
      <Button
        className=""
        disabled={pageNumber === 1}
        onClick={() => handleNavigation('prev')}
        size='sm'
      >
        Previous
      </Button>
      <p className="">Page {pageNumber}</p>
      <Button
        className=""
        disabled={!isNext}
        onClick={() => handleNavigation('next')}
        size="sm"
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
