import Image from "next/image"

const NotFound = () => {
  return (
    <section className="flex items-center justify-center min-h-[80vh]">
      <div className="flex flex-col items-center justify-center gap-4">
        <Image
        src={'/logoicon.png'}
        width={100}
        height={100}
        alt="logoicon"
        />
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-2xl">Sorry! the page you requested could not be found</p>
      </div>
    </section>
  )
}

export default NotFound
