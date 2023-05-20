import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
import img1 from '../public/p1.png';
import img2 from '../public/p2.png';
import img3 from '../public/p3.png';
import img4 from '../public/p4.png';
import img5 from '../public/p5.png';
import img6 from '../public/p6.png';
import img7 from '../public/p7.png';
const ProductDetailsCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                 <Image src={img1} />
                 <Image src={img2} />
                 <Image src={img3} />
                 <Image src={img4} />
                 <Image src={img5} />
                 <Image src={img6} />
                 <Image src={img7} />
            </Carousel>
        </div>
    )
}

export default ProductDetailsCarousel