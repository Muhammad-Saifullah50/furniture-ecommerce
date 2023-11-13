"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

function Arrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} mx-7 z-20 rounded-full`}
            style={{ ...style, display: "block", background: "gray", }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <Arrow />,
            prevArrow: <Arrow />,
        };
        return (
            <div className="h-full pt-8">
                <Slider {...settings} className="flex w-full h-full">
                    <div className=" w-full relative px-2 h-56 sm:h-80">
                        <Image
                            src='/slider1.png'
                            width={300}
                            height={300}
                            alt="sliderimage"
                            className="object-cover h-full"
                        />
                    </div>
                    <div className="w-full relative px-2 h-56 sm:h-80">
                        <Image
                            src='/slider2.png'
                            width={300}
                            height={300}
                            alt="sliderimage"
                            className="object-cover h-full"
                        />
                    </div>
                    <div className="w-full relative px-2 h-56 sm:h-80">
                        <Image
                            src='/slider3.png'
                            width={300}
                            height={300}
                            alt="sliderimage"
                            className="object-cover h-full"

                        />
                    </div>
                    <div className="w-full relative px-2 h-56 sm:h-80">
                        <Image
                            src='/slider4.png'
                            width={300}
                            height={300}
                            alt="sliderimage"
                            className="object-cover h-full"
                        />
                    </div>

                </Slider>
            </div>
        );
    }
}
