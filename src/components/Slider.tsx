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
            className={className}
            style={{ ...style, display: "block", background: "red" }}
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
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <Arrow className=''/>,
            prevArrow: <Arrow />
        };
        return (
            <div>
                <Slider {...settings}>
                   <div className=" px-2">
                        <Image
                        src='/slider1.png'
                        width={350}
                        height={800}
                        alt="sliderimage"
                        className="object-cover"
                        />
                    </div>
                    <div className=" px-2">
                        <Image
                        src='/slider2.png'
                        width={350}
                        height={800}
                        alt="sliderimage"
                        className="object-cover"

                        />
                    </div>
                    <div className=" px-2">
                        <Image
                        src='/slider3.png'
                        width={350}
                        height={800}
                        alt="sliderimage"
                        className="object-cover"

                        />
                    </div>
                    <div className=" px-2">
                        <Image
                        src='/slider4.png'
                        width={350}
                        height={800}
                        alt="sliderimage"
                        className="object-cover"
                        />
                    </div>

                </Slider>
            </div>
        );
    }
}
