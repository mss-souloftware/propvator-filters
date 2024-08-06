"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slides.module.css'
import Image from "next/image";
import slidesData from "@/app/data/testimonials.json"
import Link from "next/link";


export default function Slides() {
    var settings = {
        dots: false,
        arrow: false,
        initialSlide: 3,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3,
                    dots: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    arrow: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrow: false,
                }
            },
        ]
    };
    return (
        <Slider {...settings}>
            {slidesData.map((item, index) => (
                <div key={index} className={styles.MainSlides}>
                    <div className={styles.slideInner}>
                        <p>
                            <Image src="/Images/icons/quot1.svg" width={35} height={35} alt="Qoutes" />
                            {item.testi}
                            <Image src="/Images/icons/quot2.svg" width={35} height={35} alt="Qoutes" />
                        </p>
                    </div>

                    <div className={styles.rating}>
                        <Image src="/Images/icons/rating.svg" width={120} height={25} alt="Ratings" />
                        <p className="CName text-white mt-4 font-bold">
                            <Link href={item.client}>
                                {item.CName}
                            </Link>
                        </p>
                        <p className="CDes text-white mt-1 text-sm">{item.CDes}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}