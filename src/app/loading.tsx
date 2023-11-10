'use client'
import { RotatingLines } from "react-loader-spinner"
const Loading = () => {
    return (
        <section className="min-h-[75vh] flex justify-center items-center">
            <RotatingLines
                strokeColor="#B88E2F"
                strokeWidth="5"
                animationDuration="1"
                width="48"
                visible={true}
            />
        </section>
    )
}

export default Loading
